import React from "react";

const MLComputerVision = () => {
  return (
    <>
      <style>
        {`
          @keyframes blinkingText {
            0% { color: #000; }
            49% { color: #000; }
            60% { color: transparent; }
            99% { color: transparent; }
            100% { color: #000; }
          }
          .blinking {
            animation: blinkingText 0.6s infinite;
          }
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
        `}
      </style>

      <div className="min-h-screen bg-white p-2 sm:p-4 md:p-6">
        <div className="w-[90%] mx-auto bg-[#FFF067] p-2 sm:p-4 md:p-6 text-sm">
          {/* Header - Improved mobile layout */}
          <div className="relative mb-6 md:mb-8 pt-8 sm:pt-4">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold font-['Quicksand']">
              Machine Learning for Computer Vision
            </h1>
            <h1 className="text-center text-red-800 text-md sm:text-xl md:text-2xl font-bold font-['Quicksand']">
              June 29 - July 10 , 2020
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScBCng4WHpc6wRQ7skxM1LoGjnebwjR_g4mP2UV5QVHBEH-Kw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="blinking font-bold text-xs sm:text-sm"
              >
                Apply Online
              </a>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Coordinators - Improved mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-2">
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Prof. Aparajita Ojha, IIITDM Jabalpur</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Principal Co-Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">
                  Dr. Santosh Kumar Vipparthi ,MNIT, Jaipur
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Academy Level Coordinator */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Academy Level Coordinator:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Mukesh Kumar</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:mukesh.kumar@nitp.ac.in"
                  className="hover:underline"
                >
                  mukesh.kumar@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:8984142557" className="hover:underline">
                  8984142557
                </a>
              </p>
            </div>

            <br />

            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Subodh Srivastava</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:subodh@nitp.ac.in" className="hover:underline">
                  subodh@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:8090318878" className="hover:underline">
                  8090318878
                </a>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Fee Details - More compact on mobile */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Course Fee Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                Academic (student/faculty):{" "}
                <strong>500 INR (GEN/OBC) / 250 INR (SC/ST)</strong>
              </p>
              <p>
                Industry People/ Others:{" "}
                <strong>1000 INR/ 500INR (SC/ST)</strong>
              </p>
            </div>
          </div>

          {/* Payment Details - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Payment Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>Bank Name: Allahabad Bank</p>
              <p>Account Name: NIT Patna</p>
              <p>
                <strong>Account No.: 50380476798</strong>
              </p>
              <p>
                <strong>IFSC Code: ALLA0212286</strong>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Resource Persons - Responsive text */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Resource Persons:
            </h2>
            <p className="text-sm sm:text-base">
              Prof. P.K. Biswas, IIT Kharagpur Dr. Partha Pratim Roy, IIT
              Roorkee Dr. Santosh Viparthi, MNIT Jaipur Prof. Aparajita Ojha,
              IIITDM Jabalpur 1 full day session by an expert from NVIDIA
            </p>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Contents - Improved mobile layout */}
          <div className="mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] text-center mb-3 sm:mb-4">
              Course contents:
            </h2>
            <div className="border-2 border-black">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-['Quicksand'] w-16">
                        S.No.
                      </th>
                      <th className="p-4 text-left font-['Quicksand']">
                        Module Name
                      </th>
                      <th className="p-4 text-left font-['Quicksand']">
                        Topics
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#FFE81C] text-base">
                    {[
                      {
                        name: "Introduction to Image Processing and Computer Vision (CV)",
                        topic:
                          "Introduction to Computer Vision, Main Goals and Challenges, Structure of Human Eye and Vision, Color Models, Image Processing Goals and Tasks, Image Enhancement, Edge Detection, Segmentation",
                      },
                      {
                        name: "Introduction to Artificial Intelligence (AI) and Machine Learning (ML)",
                        topic:
                          "Introduction to Artificial Intelligence and Machine Learning, Supervised and Unsupervised Learning, Feature Extraction using Local Patterns and their applications to Image Processing and CV: Image Classification, Image Enhancement, Segmentation.",
                      },
                      {
                        name: "Introduction to Deep Learning (DL)",
                        topic:
                          "Basic differences of Conventional ML and DL approaches, Feed forward Neural Networks (NN), Back propagation, Stochastics Gradient Method and Variants, Regularization, and Optimization. Types of NNs and limitations. Applications of NN in Image Processing and CV.",
                      },
                      {
                        name: "Convolutional Neural Network architectures (CNN) for CV",
                        topic:
                          "The Convolution Operation, Motivation, Pooling, Basic architecture of a Convolution Neural Network CNN as feature extractors, Image classification using CNN, Image Enhancement and Segmentation, Introduction to GAN",
                      },
                      {
                        name: "Motion Detection and Depth Estimation (DE)",
                        topic:
                          "Optical Flow, Flow Net and their Versions, Stereo Vision, DL based Depth Estimation",
                      },
                      {
                        name: "Object Detection using CNN",
                        topic:
                          "R-CNN, Faster R-CNN, YOLO, SSD and more recent models for Object Detection.",
                      },
                      {
                        name: "Applications of CNN",
                        topic:
                          "Face Detection and Recognition using CNN, Siamese Network and Triplet Loss. Recent Advances",
                      },
                    ].map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-[#FFE81C]" : "bg-[#FFF067]"
                        }
                      >
                        <td className="p-4 align-top">{index + 1}</td>
                        <td
                          className="p-4"
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        ></td>
                        <td
                          className="p-4"
                          dangerouslySetInnerHTML={{ __html: item.topic }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Core Team Members - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Core Team Members, E&ICT Academy, NIT Patna:
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-bold">
                  Dr. Bharat Gupta
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:bharat@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    bharat@nitp.ac.in
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  Dr. M.P Singh
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:mps@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    mps@nitp.ac.in
                  </a>
                </p>
              </div>
              <p>
                Website: <strong>http://old.nitp.ac.in/ict/index.php</strong>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MLComputerVision;
