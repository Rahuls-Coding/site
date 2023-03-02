import React from "react";
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { getAllFilesFrontMatter } from "../src/mdx";

export default function Journal({ articles }) {
  const filteredBlogPosts = articles.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <div className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Journal | Rahul Rajkumar</title>
      </Head>
      <div className="grid grid-cols-8 xs:grid-rows-8 gap-4">
        <div>

            <Logo />

          <Navbar
            places={["Projects", "Journal"]}
            links={["/projects", "/journal"]}
          />
        </div>
      <div className="special dark:text-slate-200 mt-6 sm:mt-10 leading-relaxed tracking-wide mb-14 xs:row-span-7 col-span-7">
        <h1 className="text-2xl sm:mt-20 mb-10">Journal</h1>
          <p className="pb-4">
            This is my journal where I write about my experiences, thoughts, and
            stories. I love to keep note of what&#39;s currently happening in the
            world and how I could possbily apply that.
          </p>
          <div className="my-3">
            <div className="text-sm dark:text-gray-400 ">
              <div>Recent Articles</div>
            </div>
          </div>
          {filteredBlogPosts.map((frontMatter) => (
            <Container key={frontMatter.title} {...frontMatter} />
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllFilesFrontMatter("posts");
  return { props: { articles } };
}
