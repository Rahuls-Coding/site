import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import MDXComponents from "../components/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "journal", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "journal", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "journal", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        import("remark-autolink-headings"),
        import("remark-slug"),
        import("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "journal", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "journal", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
