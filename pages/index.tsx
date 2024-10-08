import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Rahul Rajkumar</title>
      </Head>
      <div className="grid lg:grid-cols-8 grid-rows-8 gap-4">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div className="special dark:text-slate-200 lg:mt-10 leading-relaxed tracking-wide row-span-7 lg:col-span-7">
          <div className="text-2xl lg:mt-20 mb-10">Rahul Rajkumar</div>
          <p className="pb-4">
            Hey, I&#39;m a freshmen at Rutgers University.
          </p>
          <p className="pb-4">
            I&#39;ve been programming as early as middle school. I first fell
            into love programming when I started learning about data science
            with Python. Ever since then I&#39;ve learned a lot more about the
            about programming and technology, such as new programming languages
            like Java, Javascript, and Typescript.
          </p>
          <p className="pb-4">
            After exploring web development, I am now
            continuing to learn more about AI, specifcally Deep Learning with PyTorch. 
          </p>
          <p className="pb-4">
            Other than programming, I love travelling, biking, and badminton. If
            it weren&#39;t for these hobbies, I would be programming 24/7, cause
            it is very addictive.
          </p>
          <p className="pb-4">
            To know a little bit more about me, you can take a look at my
            socials below. Or if you want to know about my skills, you can view
            my resume.
          </p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
