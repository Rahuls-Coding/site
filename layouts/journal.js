import React from "react";
import Link from "next/link";
import Footer from '../components/Footer'

function Layout({ children, frontMatter }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl sm:mx-auto pb-16 mx-6">
      <div className="mt-20 text-2xl">{frontMatter.title}</div>
      <div className=" grid grid-cols-2 content-center py-3 w-full text-sm dark:text-slate-200">
        <div className="justify-self-start ">{frontMatter.date}</div>
        <div className="justify-self-end ">
          <Link
            className=" flex w-full items-center gap-2 text-sm "
            href="/journal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>

            <div className="underline  underline-offset-2 hover:underline-offset-2 hover:decoration-wavy">
              Go Back
            </div>
          </Link>
        </div>
      </div>
      <div className="special text-white mt-10 leading-relaxed tracking-wide mb-3">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
