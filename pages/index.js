import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

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
            Hey, I&#39;m a Full Stack Developer, a High School Student, a Ml/AI
            and Blockchain Enthusiast.
          </p>
          <p className="pb-4">
            I&#39;ve been programming as early as middle school. I first fell
            into love programming when I started learning about data science
            with Python. Ever since then I&#39;ve learned a lot more about the
            space of technology. I learned more language since then like Rust,
            Javascript, or Solidity.{" "}
          </p>
          <p className="pb-4">
            Currently, I&#39;m going back and learning more data science and
            ML/AI with Python but still continue to get lost in the space of Web
            Development.
          </p>
          <p className="pb-4">
            Other than programming, I love travelling, biking, and badminton. If
            it weren&#39;t for these hobbies, I would be doing programming 24/7.
            To know a little bit more about me, you can find take a look at socials. 
          </p>
          <Footer text="Design inspired by Nextra" />
        </div>
      </div>
    </div>
  );
}
