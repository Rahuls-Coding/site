import React from "react";
import Link from "next/link";
import Head from 'next/head';
import Code from "../components/Code";
import { motion } from 'framer-motion';

function Social() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Socials | Rahul Rajkumar</title>
      </Head>
      <div className="text-2xl mt-20">Socials</div>
      <Link
        className="flex w-full items-center justify-end gap-2 mt-3 text-sm dark:text-slate-100"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>

        <div className="underline  underline-offset-2 hover:underline-offset-2 hover:decoration-wavy">
          Go Back
        </div>
      </Link>
      <div className=" dark:text-slate-200 mt-10 leading-relaxed tracking-wide text-sm">
        <div className="pb-6">
          My socials are below, but you can also quickly access all my socials
          by doing,
          <Code text="rahulrajkumar.me/{i}" className="inline" />, where i
          represents the name of the social.
        </div>
        <motion.div
           whileHover={{ scale: 1.03 }}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
           >
          <a
            className="hover:bg-gray-200 rounded p-2 grid grid-cols-2 content-center py-1 mb-3 w-full text-sm"
            href="https://github.com/rahuls-coding"
            target="_blank"
            rel="noreferrer"
          >
            <div className="justify-self-start ">Github</div>
            <div className="justify-self-end text-gray-500 dark:text-gray-400">
              All of my open-sourced and personal projects.
            </div>
            </a>
          </motion.div>
        <motion.div
           whileHover={{ scale: 1.03 }}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
           >
          <a
            className="hover:bg-gray-200 rounded p-2 grid grid-cols-2 content-center py-1 mb-3 w-full text-sm"
            href="https://twitter.com/rahuls_coding"
            target="_blank"
            rel="noreferrer"
          >
            <div className="justify-self-start ">Twitter</div>
            <div className="justify-self-end text-gray-500 dark:text-gray-400">
              Tweet random thoughts or amplify others
            </div>
            </a>
          </motion.div>
        <motion.div
           whileHover={{ scale: 1.03 }}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
           >
          <a
            className="hover:bg-gray-200 rounded p-2 grid grid-cols-2 content-center py-1 mb-3 w-full text-sm"
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rahulscoding1@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="justify-self-start ">Email</div>
            <div className="justify-self-end text-gray-500 dark:text-gray-400">
            Mostly for business/hiring inquiries or for a &#34;Hi!&#34;
            </div>
            </a>
          </motion.div>
        <motion.div
           whileHover={{ scale: 1.03 }}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
           >
          <a
            className="hover:bg-gray-200 rounded p-2 grid grid-cols-2 content-center py-1 mb-3 w-full text-sm"
            href="https://linkedin.com/in/rahulscoding"
            target="_blank"
            rel="noreferrer"
          >
            <div className="justify-self-start ">Linkedin</div>
            <div className="justify-self-end text-gray-500 dark:text-gray-400">
            A place to connect with me professionally
            </div>
            </a>
          </motion.div>
     
      </div>
    </div>
  );
}

export default Social;
