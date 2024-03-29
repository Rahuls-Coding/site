const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      import("remark-autolink-headings"),
      import("remark-slug"),
      import("remark-code-titles"),
    ],
    rehypePlugins: [
      import("mdx-prism"),
      import("rehype-prism"),
      import("rehype-prism-plus"),
    ],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Rahul_Rajkumar_CV.pdf",
        permanent: true,
      },
    ];
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
