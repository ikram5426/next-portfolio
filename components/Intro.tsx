"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className="flex items-center justify-center pt-28 sm:pt-36">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image className="rounded-full h-48 w-30 border-[0.25rem] object-cover
            border-gray shadow-xl " src="/profile.jpg" alt="ikram profile picture" width={192} height={192} quality={100} priority={true} />
          </motion.div>

          <motion.span className="text-5xl absolute right-5 bottom-2" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}>👋🏼</motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ikram Khan.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2.5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium " initial={{opacity:0,y:100}} animate={{opacity:1 , y:0}} transition={{delay:.2}}>

        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-300 hover:text-gray-900 active:scale-105 transition-all cursor-pointer border border-white/10'>Contact me here <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition"/></Link>
        <a className='group bg-gray-300 text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-300 hover:bg-gray-900 active:scale-105 transition-all cursor-pointer border border-black/10' href='/Resume.pdf' download>Download Resume <HiDownload className="group-hover:translate-y-1 transition"/></a>
        <a className="bg-gray-300 text-gray-900 p-4 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110 hover:text-gray-300 hover:bg-gray-900 active:scale-[1.15] transition-all cursor-pointer  border border-black/10
        " href="https://www.linkedin.com/in/devikramkhan" target='_blank'><BsLinkedin /></a>
        <a className="bg-gray-300 text-gray-900 p-4 flex items-center gap-2 text-[1.3rem] rounded-full  outline-none focus:scale-110 hover:scale-110 hover:text-gray-300 hover:bg-gray-900 active:scale-[1.15] transition-all cursor-pointer border border-black/10" href='https://github.com/ikram5426' target="_blank"><FaGithubSquare /></a>
      </motion.div>
    </section>
  )
}

export default Intro