import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen text-center items-center max-w-7xl px-10 mx-auto
      justify-evenly md:text-left md:flex-row relative"
    >
      <h3 className="absolute top-20 sm:pt-0 md:top-16 uppercase tracking-[18px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover
           md:rounded-lg md:w-56 md:h-[300px] lg:w-[300px] lg:h-[400px] relative top-14"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        className="space-y-6 px-0 md:px-10"
      >
        <h4 className="text-3xl font-semibold xl:text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-[16px] xl:text-lg">
          {pageInfo.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
}
