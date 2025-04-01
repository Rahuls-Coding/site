import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const active =
    "underline underline-offset-4 hover:underline-offset-4 hover:decoration-wavy mb-4 hover:text-teal-600";
  const nonActive = "font-bold mb-4 underline";
  const [style, setStyle] = useState(active);
  const [style2, setStyle2] = useState(active);
  const [style3, setStyle3] = useState(active);
  const [style4, setStyle4] = useState(active);

  const checkIfOnPage = () => {
    if (router.asPath === "/") {
      setStyle(nonActive);
    } else if (router.asPath.includes("/journal")) {
      setStyle2(nonActive);
    } else if (router.asPath === "/projects") {
      setStyle3(nonActive);
    } else if (router.asPath === "/socials") {
      setStyle4(nonActive);
    }
  };

  useEffect(() => {
    checkIfOnPage();
  });

  return (
    <div className="flex justify-start gap-4 lg:grid lg:justify-items-start text-sm mt-8 ">
      <div className={style}>
        <Link href="/">about</Link>
      </div>
      <div className={style3}>
        <Link href="/projects">projects</Link>
      </div>
      <div className={style2}>
        <Link href="/journal">journal</Link>
      </div>
      <div className={style4}>
        {/* <Link href="google.com" target="_blank" rel="noreferrer">
          Resume
        </Link> */}
      </div>
    </div>
  );
}


