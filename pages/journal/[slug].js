import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFileBySlug } from "../../src/mdx";
import Layout from "../../layouts/journal";
import MDXComponents from "../../components/MDXComponents";

export default function Journal({ mdxSource, frontMatter }) {
  return (
    <Layout frontMatter={frontMatter}>
      <div className="prose dark:text-slate-200 special max-w-none leading-relaxed prose-headings:dark:text-slate-200 prose-a:dark:text-sky-300 prose-pre:dark:bg-[#232323] prose-pre:rounded-xl prose-pre:bg-[#f6f8fa] prose-pre:dark:text-white prose-pre:text-black prose-pre:py-0.5 prose-blockquote:dark:text-slate-200 prose-blockquote:rounded-sm prose-pre:mt-1 prose-blockquote:dark:border-[#444444] prose-code:dark:text-slate-300 prose-code:dark:bg-[#232323] prose-code:bg-[#f6f8fa] prose-code:p-1 prose-code:rounded-md prose-img:rounded-xl">
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = await getFiles("posts");

  return {
    paths: articles.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await getFileBySlug("posts", params.slug);

  return { props: articles };
}
