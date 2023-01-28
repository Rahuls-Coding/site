import React from "react";

function Footer({ text }) {
  return (
    <div className="grid w-full">
      <div className="justify-self-center">
        <img src="/line.svg" alt="line" className="mt-6" />
      </div>

      <div className="grid grid-cols-2 mt-10 text-xs w-full">
        <div className="justify-self-start">2023 © Rahul Rajkumar</div>
        <div className="justify-self-end">{text}</div>
      </div>
    </div>
  );
}

export default Footer;
