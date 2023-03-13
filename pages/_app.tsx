import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Manrope } from "@next/font/google";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </MDXProvider>
  );
}

export default MyApp;
