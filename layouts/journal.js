import React from "react";
import Link from "next/link";
import Head from "next/head";
import Logo from "../components/Logo.tsx";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

function Layout({ children, frontMatter }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title> {frontMatter.title} | Rahul Rajkumar </title>
      </Head>
      <div className="grid lg:grid-cols-8 grid-rows-8 gap-4">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div className="special text-black lg:mt-10 leading-relaxed tracking-wide row-span-7 lg:col-span-7 mr-4">
          <div className="lg:mt-20 text-2xl">{frontMatter.title}</div>
          <div className=" grid grid-cols-2 content-center py-3 w-full text-sm ">
            <div className="justify-self-start bg-gray-100 rounded py-1 px-2 mt-2">
              {frontMatter.date}
            </div>
            <div className="justify-self-end mt-2 ">
              <Link
                className=" flex w-full items-center gap-2 text-sm "
                href="/journal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <div className="underline underline-offset-2 hover:underline-offset-2 hover:decoration-wavy">
                  Go Back
                </div>
              </Link>
            </div>
          </div>
          <div className=" text-black mt-10 leading-relaxed tracking-wide mb-3">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
