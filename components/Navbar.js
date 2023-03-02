import React, {useState, useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";


function Navbar() {
  const router = useRouter();
  const active = "underline underline-offset-2 hover:underline-offset-2 hover:decoration-wavy mb-4";
  const nonActive = "font-bold mb-4";
  const [style, setStyle] = useState(active);
  const [style2, setStyle2] = useState(active);
  const [style3, setStyle3] = useState(active);

  const checkIfOnPage = () => {
    if (router.asPath === "/") {
      console.log("is true")
      setStyle(nonActive);
    } else if (router.asPath.includes("/journal")) {
      console.log("is true jounal")
      setStyle2(nonActive);
    } else if (router.asPath === "/projects") {
      console.log("is true projects")
      setStyle3(nonActive);
    }
    console.log("checked")
    console.log(style)
  }

  useEffect(() => {
    checkIfOnPage();
  });

  return (
    <div className="justify-items-end text-sm mt-8 dark:text-slate-100">
      <button className={style}>
            <Link href='/'>
                About
            </Link>
        </button>
      <div className={style2}>
            <Link href='/journal'>
                Journal
            </Link>
        </div>
      <div className={style3}>
            <Link href='/projects'>
                Projects
            </Link>
        </div>
    </div>
  );
}

export default Navbar;
