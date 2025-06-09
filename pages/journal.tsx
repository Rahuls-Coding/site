import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { getAllFilesFrontMatter } from "../src/mdx";

interface Article {
  title: string;
  date: string;
  description: string;
  slug: string;
  avil?: boolean;
  [key: string]: any;
}

interface JournalProps {
  articles: Article[];
}

export default function Journal({ articles }: JournalProps) {
  const filteredBlogPosts = articles.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <div className="flex text-black flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Journal | Rahul Rajkumar</title>
      </Head>
      <div className="grid lg:grid-cols-8 grid-rows-8 gap-4">
        <div>
          <Logo />
          <Navbar />
        </div>
        <div className="special mt-6 lg:mt-10 leading-relaxed tracking-wide mb-14 row-span-7 lg:col-span-7">
          <h1 className="text-2xl lg:mt-20 mb-10">Journal</h1>
          <p className="pb-4">
            This is my journal where I write about my experiences, thoughts, and
            stories. I love to keep note of what&#39;s currently happening in
            the world and how I could possibly apply it to myself.
          </p>
          <div className="my-3">
            <div className="text-sm">
              <div>Recent Articles</div>
            </div>
          </div>
          {filteredBlogPosts.map((frontMatter: Article) => (
            <Container
              key={frontMatter.title}
              title={frontMatter.title}
              description={frontMatter.description}
              slug={frontMatter.slug}
              date={frontMatter.date}
              avil={frontMatter.avil}
            />
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const articles = await getAllFilesFrontMatter("posts");
  return { props: { articles } };
};
