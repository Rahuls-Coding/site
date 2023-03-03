import React from "react";
import Head from "next/head";
import Code from "../components/Code";
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion";

function Social() {
  return (
    <div className="flex flex-col justify-center items-start max-w-3xl sm:mx-auto pb-16 mx-6">
      <Head>
        <title>Socials | Rahul Rajkumar</title>
      </Head>
      <div className="grid lg:grid-cols-8 grid-rows-8 gap-4">
        <div>
          <Logo />
          <Navbar />
        </div>
      <div className="special dark:text-slate-200 lg:mt-10 leading-relaxed tracking-wide row-span-7 lg:col-span-7">
      <div className="text-2xl lg:mt-20">Socials</div>
      <div className=" dark:text-slate-200 lg:mt-10 leading-relaxed tracking-wide text-sm">
        <div className="pb-6 w-full">
          My socials are below, but you can also quickly access all my socials
          by doing, rahulrajkumar.me/&#123;i&#x7D; , where i represents the name of the social.
        </div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <a
            className="hover:bg-gray-200 rounded p-2 grid grid-cols-2 content-center py-1 mb-3 w-full text-sm"
            href="/Rahul_Rajkumar_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="justify-self-start ">CV</div>
            <div className="justify-self-end text-gray-500 dark:text-gray-400">
              My personal portfolio of skills and experience
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
        </div>
    </div>
  );
}

export default Social;
