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
          <img src='/r.png' className=' w-10 h-10 mt-32' />
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
