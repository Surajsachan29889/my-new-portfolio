"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import logo1 from '@/public/logo1.svg'
import Loading from "@/app/loading";
import { Suspense } from "react";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full h-[100vh]  text-center sm:mb-0 sm:mt-0 mt-[20vh]"
    >
        <div className="h-[40%] w-[30%] z-[-100] absolute top-[40%] blur-[150px] bg-pri "></div>
        <div className="h-[40%] w-[30%] absolute z-[-100] top-[40%] blur-[150px] bg-four right-0 "></div>
        <Suspense fallback={<Loading/>}>

      <div className="flex items-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={logo1}
              alt="suraj"
              width="20"
              height="20"
              className="h-[40%] w-[40%] ml-[27%] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-[35%] text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 sm:ml-[25%] ml-[10%] text-2xl sm:w-1/2 w-[80%]  font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-four">Hello, I'm Suraj.</span> I'm a{" "}
        <span className="font-bold text-pri">full-stack developer</span> <br/>{" "}
        <span className="font-bold"></span>  I enjoy
        building <span className="italic">sites </span>. My focus is{" "}
        <span>React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-tri px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-tri px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="#"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
<div className="sm:flex-col !flex-row flex gap-5">

        <a
          className="bg-sec p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/surajsachan"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-five p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/surajsachan29889"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
</div>
      </motion.div>
        </Suspense>
        <div className="h-[20%] w-full flex justify-center items-center ">

        <div className="w-[.5%] h-[10vh] mt-[5%] rounded-full sm:block hidden  bg-[#cacaca69]  drop-shadow-md "></div>
        </div>
    </section>
  );
}