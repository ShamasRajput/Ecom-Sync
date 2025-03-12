"use client"
import Image from 'next/image'
import React from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'

const ServicesSlider = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, 500, 600])
  return (
    <section   className='w-auto scrollbar-hide bg-custom_gray py-[48px] text-white overflow-y-scroll sm:overflow-hidden'>
        <motion.div style={{x}} className=' flex sm:translate-x-0 items-center justify-start sm:justify-center gap-[24px] whitespace-nowrap'>
            <p className='font-mediumWide text-[22px] sm:text-[28px] tracking-[8%]'>Portfolio Design</p>
            <Image src="/assets/diamond.png" alt='diamond' width={32} height={32} className="object-contain"   />
            <p className='font-mediumWide text-[22px] sm:text-[28px] tracking-[8%]'>Social Media Marketing</p>
            <Image src="/assets/diamond.png" alt='diamond' width={32} height={32} className="object-contain"   />
            <p className='font-mediumWide text-[22px] sm:text-[28px] tracking-[8%]'>Graphics Design</p>
            <Image src="/assets/diamond.png" alt='diamond' width={32} height={32} className="object-contain"   />
            <p className='font-mediumWide text-[22px] sm:text-[28px] tracking-[8%]'>UI/UX</p>
            <Image src="/assets/diamond.png" alt='diamond' width={32} height={32} className="object-contain"   />
            <p className='font-mediumWide text-[22px] sm:text-[28px] tracking-[8%]'>E-Commerce Development</p>
        </motion.div>
    </section>
  )
}

export default ServicesSlider