"use client"
import React from 'react'
import { motion } from 'framer-motion'


const Button = ({ text = "Hello World" }: {
  text: string
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        y: -5,
        rotate: 2,
        transition: {
          type: "tween",
          duration: 0.4
        }
      }}
      className='bg-primary px-[40px] py-[16px] flex items-center justify-center rounded-[100px]'
    >
      <p className='font-boldWide text-[16px] text-custom_white leading-[15px]'>{text}</p>
    </motion.button>
  )
}

export default Button