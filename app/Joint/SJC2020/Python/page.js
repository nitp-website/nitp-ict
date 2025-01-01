import React from "react";

const Python = () => {
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
              Python Programming
            </h1>
            <h1 className="text-center text-red-800 text-md sm:text-xl md:text-2xl font-bold font-['Quicksand']">
              7 Sept – 18 Sept, 2020
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://forms.gle/h9CWtvaVzy7y9mmLA"
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
                <li className="ml-4">Dr. Atul Gupta, IIITDM Jabalpur</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Co-Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Arka Prokash Mazumdar, MNIT Jaipur</li>
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
                <strong>Dr. Prabhat Kumar, NITP</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:prabhat@nitp.ac.in" className="hover:underline">
                  prabhat@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:8406001700" className="hover:underline">
                  8406001700
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
                Faculty/ PhD Scholar :
                <strong> Rs.500/-(SC/ST = Rs. 250/- )</strong>
              </p>
              <p>
                Others (Except Faculty/PhD-Scholar):
                <strong> Rs. 1000/- (SC/ST = Rs. 500/- )</strong>
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
              <strong>
                Prof. Aparajita Ojha, IIITDMJ<br /> Dr. Arka P. Mazumdar, MNITJ,<br /> Dr.
                Emmanuel S. Pilli, MNITJ
              </strong>
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
                        name: "Introduction & Basics of Python Programming",
                        topic:
                          "Unconstrained and Constrained Optimization, Linear Programming, Graphical Method, Symmetric Dual Problems, Simplex Method, Derivative based Optimization, Newton’s Method, Least Mean Square Method.",
                      },
                      {
                        name: "Decision Statements; Loop Control Statements; Functions, Strings",
                        topic:
                          "Boolean Type, Boolean Operators, Using Number and Strings with Boolean Operators, Decision Making Statements and Conditional Expressions, While Loop, range() Function, For Loop, Nested Loops, Break Statement, Continue Statement; Syntax and Basics of a Function, Use of a Function, Parameters and Arguments, Local and Global Scope, Scope of a Variable, return Statement, and Recursive Functions; str Class, Inbuilt Functions for String, index[] Operator, Traversal of String, String Operators, String Operations.",
                      },
                      {
                        name: "Lists and Dictionaries; Tuples and Sets; File Handling; Pandas",
                        topic:
                          "Creating Lists, Basic List Operators, Slicing, Inbuilt Functions for Lists, List Operator, List Methods, Splitting; Need of Dictionary, Creating a Dictionary, Adding and Replacing Values, Retrieving Values, Deleting Items, and Traversing Dictionaries. Tuples and Sets: Creating Tuples, Tuple() Function, Inbuilt Functions for Tuples, Indexing and Slicing, Operations on Tuples, Traverse Tuples from a List; Set Operators, Set Class. Object-Oriented Programming: Classes and Objects, Methods, Operator Overloading, Inheritance, super() and Method Overriding. File Handling: Need of File Handling, Reading/Writing Text and Numbers to/from a File, Directories on a Disk. Pandas: Using Pandas, the Python Data Analysis Library, and Data Frames.",
                      },
                      {
                        name: "Data Handling and Use Cases",
                        topic:
                          "RE Pattern Matching, Parsing Data, Introduction to Regression, Types of Regression, Use Cases, Exploratory Data Analysis, Correlation Matrix, Visualization using Matplotlib, and Implementing Linear Regression.",
                      },
                      {
                        name: "Machine Learning",
                        topic:
                          "Machine Learning Algorithm; Algorithms ‐ Random Forest, Support Vector Machine, Random Forest; Building Your Own Model in Python, and Comparison Between Random Forest and Decision Tree.",
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
                  Dr. Bharat Gupta (CI E & ICT Academy, NIT Patna)
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
                  Dr. M.P Singh (CI E & ICT Academy, NIT Patna)
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

          {/* Contact Information - Responsive spacing */}
          <div className="text-center px-2">
            <p className="font-bold font-['Quicksand'] mb-2 text-sm sm:text-base">
              Contact us :
            </p>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Electronics and ICT Academy</p>
              <h1 className="font-bold">Mr. Ram Gopal (TPO) : 8434305807</h1>
              <p>National Institute of Technology, Patna</p>
              <p>AshokRajpath, Patna 800005</p>
              <p>
                <span className="font-bold font-['Quicksand']">Email:</span>{" "}
                eictapatna@nitp.ac.in
              </p>
              <p>
                <span className="font-bold font-['Quicksand']">Website:</span>{" "}
                http://old.nitp.ac.in/ict
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Python;
