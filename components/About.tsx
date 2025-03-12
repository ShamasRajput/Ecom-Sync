"use client"
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div id='about' className='px-[24px] max-w-full pt-[80px] text-center flex flex-col text-custom_black items-center'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1, y: 0, 
          transition: {
            type: "tween",
            duration: 0.5
          }
        }}
        className='font-extraBoldWide text-[24px] lg:text-[32px] leading-[120%]'>WHO WE ARE</motion.h1>
      <p className='mt-[40px] font-medium text-[18px] lg:text-[24px] leading-[145%] max-w-[846px]'>
        Ecom Sync is not only a web design company, but we are also a digital marketing agency, social media management firm, and SEO company. We offer a variety of services to fit any need, budget, and timeline. We work closely with our clients to understand their business goals, target audience, and brand identity.
        <br />
        We offer graphic designing, web development, SEO, and Social Media Handling Services.
We aim to bring the best quality work within the stipulated time frame. We understand the value of time and hence deliver the project as per the timeline.

         </p>
    </motion.div>
  )
}

export default About