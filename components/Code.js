import React from "react";

function Code({ text }) {
  return (
    <div className="inline dark:bg-[#2e2e2e] mx-1 bg-[#dbdbdb] text-black dark:text-[#f8f8f2] px-1 py-0.5 rounded w-fit">
      {text}
    </div>
  );
}

export default Code;
