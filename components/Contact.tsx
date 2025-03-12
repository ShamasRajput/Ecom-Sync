"use client"
import React from 'react'
import Button from './Button'


import { motion } from 'framer-motion'

const Contact = () => {
    // construct the animation variants from the initial and final states
    const variants = {
        initial: {
            opacity: 0,
            height: 0,
            scaleY: 0
        },
        animate: {
            opacity: 1,
            height: "100%",
            scaleY: 1,
            transition: {
                duration: 0.5,
            }
        }
    }

    return (
        <motion.div
        id='contact'
            initial='initial'
            whileInView='animate'
            variants={variants}
            className='px-[24px] origin-top'>
            <section className='bg-custom_black mt-[80px] flex flex-col items-center justify-center max-w-[1056px] mx-auto rounded-[30px] py-[96px] px-[32px]'>
                <motion.h3
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "tween",
                            delay: 0.4,
                        }
                    }}
                    className='mb-[24px] text-center font-boldWide text-[18px] sm:text-[24px] md:text-[32px] text-white max-w-[737px]'>Don’t be shocked by how beautiful your project turns out after you have made a decision.</motion.h3>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -5,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "tween",
                            delay: 0.5,
                        }
                    }}
                >
                    <a href="mailto:ecomsync.help@gmail.com">
                        <Button text='Start a project?' />
                    </a>
                </motion.div>
            </section>
        </motion.div>
    )
}

export default Contact