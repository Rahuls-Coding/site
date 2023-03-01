import "../styles/globals.css";

import { Manrope } from "@next/font/google";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";

const manrope = Manrope({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </MDXProvider>
  );
}

export default MyApp;
