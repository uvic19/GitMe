import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Main = () => {
  const [question, setQuestion] = useState("");
  const [answer, setanswer] = useState("");
  const [copied, setcopied] = useState("");
 
  function downloadReadme(content) {
    const blob = new Blob([content], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "readme.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

  async function generateAnswer() {
    setanswer("loading...");
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI}`,
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: `Convert this to code to a readme for GitHub and make it in this format:

1. Header Section  
2. Description Section  
3. Features Section  
4. Technologies Used Section
5. Installation Section  
6. Live Demo Section  
7. Contribution Section 

add more sections as per you feel needed 

Contribution Section: There are many features left to be implemented, and contributions are welcome! Feel free to fork the project, submit issues, or create pull requests for enhancements or fixes.

, If here is anything except a code or a empty "tell to give me a valid code!" and don't add any note. or file type on top

${question}`,
              },
            ],
          },
        ],
      },
    });
    setanswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    downloadReadme(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full flex items-center justify-center lg:mb-0 mb-[30px] flex-wrap">
        <div className="lg:h-[530px] lg:h-max-[530px] lg:w-[800px]  mt-[80px] lg:mt-[0px] flex flex-col lg:items-center pl-3 pr-3">
          <h1 className=" text-3xl lg:text-3xl lg:pt-5 text-center font-bold">
            <span className="text-[#c82217]">Git</span>Hub Read
            <span className="text-[#c82217]">me</span> Generator
          </h1>

          <form action="">
            <div className="flex lg:flex-row flex-col justify-between items-center lg:mt-[45px] mt-[70px]">
              <h1 className="mt-2 font-semibold text-xl">Paste Code Here</h1>
              <div className="flex gap-5 mt-7 lg:mt-0 mb-2.5">
                <button
                  className="md:block bg-[#F03C2E] px-5 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    generateAnswer();
                  }}
                >
                  Generate
                </button>
                <button className="md:block bg-[#F03C2E] px-8 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all"
                onClick={async (e) => {
                e.preventDefault(); // Prevents page reload
                await navigator.clipboard.writeText(`${answer}`);
                setcopied("write-text");
                }}
                >
                {copied === "write-text" ? "Copied" : "Copy"}
              </button>
              </div>
            </div>
            <textarea
              type="text"
              placeholder="Write your code here:"
              className="resize-none lg:h-[391.5px] lg:w-[750px] h-[550px] w-[370px] text-black mt-10 lg:mt-2 p-1.5 bg-gray-200 border-2 border-[white]"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </form>
        </div>
        <div className="mt-[70px] md:mt-[343.5px] lg:h-[550px] lg:w-[700px] h-[550px] w-[370px] text-black lg:mt-[40px] bg-gray-200 border-2 border-[white] lg:mb-[20px] mb-[10px] overflow-auto">
          <pre
            onClick={() => setTextToCopy(answer)}
            className="text-black text-md mt-2 lg:mt-0 text-wrap"
          >
            {answer}
          </pre>
        </div>
      </div>
      <div className="h-5 lg:text-lg lg:mt-5 mt-1 text-md pl-6 pr-6 text-wrap leading-[40px] font-semibold">
      To view the contents of the your <span className="text-[#c82217]">README.md</span>, simply copy it here and click - <a href="https://markdownlivepreview.com/" target="_blank" className="bg-[#c82217] text-white rounded p-2 ml-2 ">Open</a>
      </div>
    </div>
  );
};

export default Main;
