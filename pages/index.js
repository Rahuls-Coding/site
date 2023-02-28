import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Rahul Rajkumar</title>
      </Head>
      <div className="grid grid-cols-8 gap-4">
        <div>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="62.000000pt" height="81.000000pt" viewBox="0 0 62.000000 81.000000"
          preserveAspectRatio="xMidYMid meet" className="text-black dark:text-white mt-32 w-10 h-10">

          <g transform="translate(0.000000,81.000000) scale(0.100000,-0.100000)"
          fill="currentColor" stroke="none">
          <path d="M178 800 c-62 -8 -108 -32 -108 -55 0 -18 27 -45 68 -67 45 -24 59
          -79 44 -171 -17 -96 -61 -226 -122 -354 -50 -105 -52 -122 -14 -123 14 0 98
          179 140 297 l32 93 113 -205 c63 -113 118 -205 124 -205 5 0 16 4 24 9 11 7
          -5 43 -78 175 -50 91 -91 167 -91 168 0 2 37 4 81 5 168 4 252 94 221 240 -21
          102 -81 158 -192 181 -70 15 -179 20 -242 12z m232 -61 c81 -19 108 -37 136
          -95 21 -43 25 -64 22 -99 -11 -98 -62 -128 -209 -128 -134 1 -141 4 -132 56 5
          23 8 72 8 108 -1 74 -17 108 -66 138 -16 10 -26 21 -22 24 10 11 213 8 263 -4z"/>
          </g>
          </svg>
          <Navbar
            places={["Projects", "Journal"]}
            links={["/projects", "/journal"]}
          />
        </div>
        <div className="special dark:text-slate-200 mt-10 leading-relaxed tracking-wide col-span-7">
          <div className="text-2xl mt-20 mb-10">Rahul Rajkumar</div>
          <p className="pb-4">
            Hey, I&#39;m a Full Stack Developer, a High School Student, a Ml/AI
            and Blockchain Enthusiast.
          </p>
          <p className="pb-4">
            I&#39;ve been programming as early as middle school. I first fell into
            love programming when I started learning about data science with
            Python. Ever since then I&#39;ve learned a lot more about the space of
            technology. I learned more language since then like Rust, Javascript,
            or Solidity.{" "}
          </p>
          <p className="pb-4">
            Currently, I&#39;m going back and learning more data science and ML/AI
            with Python but still continue to get lost in the space of Web
            Development.
          </p>
          <p className="pb-4">
            Other than programming, I love travelling, biking, and badminton. If
            it weren&#39;t for these hobbies, I would be doing programming 24/7.
            To know a little bit more about me, you can find my{" "}
            <Link
              href="/social"
              className="underline hover:decoration-wavy underline-offset-2"
            >
              socials
            </Link>{" "}
            here.{" "}
          </p>
      <Footer text="Design inspired by Nextra" />
        </div>
      </div>
    </div>
  );
}
