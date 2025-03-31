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
            Hey, I&#39;m Rahul! 👋
          </p>
          <p className="pb-4">
          

            I&#39;m currently a student at Rutgers University-NB majoring in Math + CS. 

          </p>
          <p className="pb-4">
            I&#39;ve been programming since I was 8th grade, when I first learned how to build websites. 
            Over time I became fascinated with AI, so I&#39;m currenlty working on deep learning research. 
          </p>
          <p className="pb-4">
          When I&#39;m not coding, you&#39;ll find me traveling, biking, or playing badminton. These hobbies keep me balanced, otherwise, I&#39;d probably be programming 24/7.
          </p>
          <p className="pb-4">
          If you&#39;d like to connect or learn more about me, feel free to check out my socials below.
                    </p>
          <Footer />
        </div>
      </div>
    </div>
  );
}
