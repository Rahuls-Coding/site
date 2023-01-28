import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from '../components/Footer'
import { getAllFilesFrontMatter } from "../src/mdx";

export default function Journal({ articles }) {
  const filteredBlogPosts = articles.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <div className="flex flex-col justify-center items-start max-w-2xl sm:mx-auto pb-16 mx-6">
      <h1 className="text-2xl mt-20">Journal</h1>
      <Navbar places={["About", "Projects"]} links={["/", "projects"]} />
      <div className="special dark:text-slate-200 mt-10 leading-relaxed tracking-wide mb-14">
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
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllFilesFrontMatter("posts");

  return { props: { articles } };
}
