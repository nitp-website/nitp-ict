import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Readable } from 'stream';

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_DRIVE_CREDENTIALS),
  scopes: ['https://www.googleapis.com/auth/drive.file']
});

const drive = google.drive({ version: 'v3', auth });

export async function POST(request) {
  try {   

    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { message: 'No file provided' },
        { status: 400 }
      );
    }

    const buffer = await file.arrayBuffer();
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      return NextResponse.json(
        { message: 'Google Drive Folder ID is missing from environment variables' },
        { status: 500 }
      );
    }

    const driveResponse = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [folderId],
      },
      media: {
        mimeType: file.type,
        body: Readable.from(Buffer.from(buffer))
      },
      fields: 'id, webViewLink'
    });

    await drive.permissions.create({
      fileId: driveResponse.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone'
      }
    });

    return NextResponse.json({
      success: true,
      url: driveResponse.data.webViewLink,
      id: driveResponse.data.id
    });

  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};