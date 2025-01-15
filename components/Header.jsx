import React from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets'; 
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center max-auto h-screen flex
     flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration:0.8,type:'spring',stiffness:100}}
      >
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
          width={128}
          height={128}
        />
      </motion.div>
      <motion.h3 
         initial={{y:-20,opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{duration:0.6, delay:0.3}}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Venkadesan{' '}
        <Image
          src={assets.hand_icon}
          alt="Hand icon"
          className="w-6"
          width={24}
          height={24}
        />
      </motion.h3>
      <motion.h1 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.6, delay:0.7}}
      className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack Developer.
      </motion.h1>

      <motion.p 
      initial={{y:-20,opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{duration:0.6, delay:0.3}}
      className="max-w-2xl mx-auto font-Ovo">
        Java Full Stack Developer with expertise in building scalable web
        applications using Java, Spring Boot, and modern frontend frameworks.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
         initial={{y:30,opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{duration:0.6, delay: 1}}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black 
          text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4"
            width={16}
            height={16}
          />
        </motion.a>
        <motion.a
         initial={{y:30,opacity: 0}}
         whileInView={{y:0, opacity: 1}}
         transition={{duration:0.6, delay: 1}}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex 
          items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4"
            width={16}
            height={16}
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
