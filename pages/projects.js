import Head from "next/head";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Logo from '../components/Logo'

function projects() {
  return (
    <div className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Projects | Rahul Rajkumar</title>
      </Head>
      <div className="grid grid-cols-8 gap-4">
        <div>
          <Logo />
          <Navbar places={["About", "Journal"]} links={["/", "journal"]} />
        </div>
        <div className="col-span-7 mt-10">
          <div className="text-2xl mt-20 mb-10">Projects</div>
          <div className="special dark:text-slate-200 mt-10 leading-relaxed tracking-wide">
            <p className="pb-4">
              These are the projects that I personally loved working on and was
              interested in. This doesn&#39;t mean I didn&#39;t like the other
              projects I worked on, but these are the ones that I&#39;ve
              highlighted.
            </p>
            <p className="pb-4">
              Most projects that I&#39;m currently building are private (for now)
              but almost everyhting I build is open-source as you can check it out{" "}
              <a
                className="underline hover:decoration-wavy underline-offset-2"
                href="https://github.com/rahuls-coding"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="my-3 mb-10">
            <div className="text-sm dark:text-gray-400 grid grid-cols-3 gap-24">
              <div>Started</div>
              <div>Building</div>
            </div>
            <div className="grid grid-cols-3 gap-24 mt-3 w-full">
              <div className="special">
                <div className="dark:text-gray-200 underline underline-offset-2">
                  Foresight
                </div>
                <div className="dark:text-gray-300 pt-2 w-40 text-sm leading-6">
                  Predicts prices of BTC & ETH with ML and PyTorch
                </div>
              </div>
              <div className="special">
                <div className="dark:text-gray-200 underline underline-offset-2">
                  SendTX
                </div>
                <div className="dark:text-gray-300 pt-2 w-40 text-sm leading-6">
                  An east way to send crypto between wallets
                </div>
              </div>
              <a
                className="special"
                href="https://github.com/rahuls-coding/cram"
                target="_blank"
                rel="noreferrer"
              >
                <div className="dark:text-gray-200 underline hover:decoration-wavy underline-offset-2">
                  Cram
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 inline w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>


                </div>
                <div className="dark:text-gray-300 pt-2 w-40 text-sm leading-6">
                  Review all the content for AP Calculus
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
