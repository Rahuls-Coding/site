import * as React from "react";
import { motion } from "framer-motion";


function Logo() {
    const icon = {
      hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(0, 0, 0, 0)"
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(0, 0, 0, 1)"
      }
    };
    return (
  <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="62.000000pt"
      height="81.000000pt"
      className="item dark:text-white"
    >
      <motion.path
        d="M280 800 c-144 -17 -200 -47 -244 -129 -21 -39 -28 -67 -29 -109 -1
        -121 75 -188 217 -194 37 -1 71 -7 76 -13 6 -7 -22 -66 -77 -163 -70 -125 -83
        -155 -73 -167 7 -8 16 -15 21 -15 7 0 126 205 174 299 35 69 -8 111 -115 111
        -115 0 -170 47 -170 145 0 72 32 124 95 155 43 21 67 25 177 28 155 5 174 1
        127 -31 -81 -54 -89 -169 -25 -361 36 -106 134 -326 146 -326 3 0 14 6 24 13
        16 12 13 21 -38 127 -99 207 -146 390 -117 463 6 15 31 39 56 55 97 58 60 104
        -95 115 -36 3 -94 1 -130 -3z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] }
        }}
        className='dark:text-white'
      />
    </motion.svg>
  </div>
)}

export default Logo;