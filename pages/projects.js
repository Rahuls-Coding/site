import Head from "next/head";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

function projects() {
  return (
    <div className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Projects | Rahul Rajkumar</title>
      </Head>
      <div className="grid lg:grid-cols-8 grid-rows-8 gap-4">
        <div>

            <Logo />

          <Navbar/>
        </div>
        <div className="row-span-7 lg:col-span-7 lg:mt-10">
          <div className="text-2xl lg:mt-20 mb-10">Projects</div>
          <div className="special dark:text-slate-200 mt-10 leading-relaxed tracking-wide">
            <p className="pb-4">
              These are the projects that I personally loved working on and was
              interested in. This doesn&#39;t mean I didn&#39;t like the other
              projects I worked on, but these are the ones that I&#39;ve
              highlighted.
            </p>
            <p className="pb-4">
              Most projects that I&#39;m currently building are private (for
              now) but almost everyhting I build is open-source as you can check
              it out{" "}
              <a
                className="underline hover:decoration-wavy underline-offset-2"
                href="https://github.com/Rahuls-Coding?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="my-3 mb-10">
            {/* <div className="text-sm dark:text-gray-400 grid grid-cols-3 gap-24">
              <div>Started</div>
              <div>Building</div>
            </div> */}
            <div className="grid grid-rows-3 lg:gap-24 gap-8 mt-3 w-full lg:grid-cols-3">
              <div className="special w-full">
                <div className="dark:text-gray-200 underline underline-offset-2 w-full">
                  GeneAI
                </div>
                <div className="dark:text-gray-300 pt-2 lg:w-40 text-sm leading-6 ">
                  A ML model that&#39;s able to generate smaller models with little data. 
                </div>
              </div>
              <a
                className="special"
                href="https://github.com/rahuls-coding/shapemind"
                target="_blank"
                rel="noreferrer"
              >
                <div className="dark:text-gray-200 underline hover:decoration-wavy underline-offset-2">
                  ShapeMind
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 inline w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </div>
                <div className="dark:text-gray-300 pt-2 lg:w-40 text-sm leading-6">
                  A CNN model that identifies shapes in real life objects in images.
                </div>
              </a>
              <a
                className="special"
                href="https://github.com/rahuls-coding/volog"
                target="_blank"
                rel="noreferrer"
              >
                <div className="dark:text-gray-200 underline hover:decoration-wavy underline-offset-2">
                  Volog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 inline w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </div>
                <div className="dark:text-gray-300 pt-2 lg:w-40 text-sm leading-6">
                  A tracker to track your volunteering hours.
                </div>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default projects;
