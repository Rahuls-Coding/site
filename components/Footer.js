import React from "react";
import Image from "next/image";

function Footer({ text }) {
  return (
    <div className="grid w-full">
      <div className="justify-self-center">
        <Image src='/line.svg' alt="line" width={90} height={90} className="mt-6" />
      </div>

      <div className="grid grid-cols-2 mt-10 text-xs w-full">
        <div className="justify-self-start">2023 © Rahul Rajkumar</div>
        <div className="justify-self-end">{text}</div>
      </div>
    </div>
  );
}

export default Footer;
