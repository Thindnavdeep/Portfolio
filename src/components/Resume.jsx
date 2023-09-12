import { SectionWrapper } from "../hoc";
import React from "react";

const Resume = () => {
  return (
    <>
      <div
        className="resume"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <a
          href="/RESUMEs.pdf" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
          }}
        >
          Download Resume
        </a>
      </div>
    </>
  );
};
export default SectionWrapper(Resume, "");
