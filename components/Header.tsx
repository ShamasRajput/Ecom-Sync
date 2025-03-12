"use client"

import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Container from './Container'
import Nav from './Nav'
import { motion } from "framer-motion"


const Header = () => {
    return (
        <Container>
            <header className='px-[24px] min-h-[90vh]  overflow-x-hidden h-auto pb-[72px] pt-[140px] relative flex items-center   bg-custom_black'>
                <motion.div
                    id='home'
                    initial={{ opacity: 0, top: -100 }}
                    animate={{ opacity: 1, top: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.3
                    }}
                    className='absolute left-0 right-0 top-0 z-[9999]'>
                    <Nav />
                </motion.div>
                {/* <div className='absolute top-0 bottom-0 left-0 right-[50%] bg-header bg-no-repeat '>
            </div> */}
                <div className='mx-auto text-custom_white text-center flex flex-col items-center gap-[24px] z-40'>
                    <div className='w-fit h-fit relative'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: 45 }}
                            whileInView={{
                                opacity: 1, scale: 1.2, rotate: 0,
                                transition: {
                                    type: "tween",
                                    duration: 0.3,
                                }
                            }}
                            className='w-full h-[70%] z-[-1] blur-[130px] bg-opacity-40 bg-primary rounded-full absolute top-0 right-0 bottom-0 left-0'></motion.div>
                        <section className='flex flex-col items-center gap-[16px] z-40'>
                            <motion.h3
                                initial={{ opacity: 0, translateY: 20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: "tween",
                                    duration: 0.3,
                                    delay: 0.1
                                }}
                                className='font-medium text-[20px] md:text-[24px] leading-[115%] tracker-[0.05em]'>ECOM SYNC</motion.h3>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    type: "tween",
                                    duration: 0.3
                                }}
                                className='font-extraBoldWide leading-[115%] tracker-[0.05em] text-[48px] md:text-[66px] max-w-[842px]'>We Don’t Just Design We Build</motion.h1>
                            <motion.p
                                initial={{ opacity: 0, translateY: -20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: "tween",
                                    duration: 0.3,
                                    delay: 0.1
                                }}
                                className='font-mediumWide leading-[130%] text-[14px] md:text-[16px] max-w-[576px]'>We offer complete solutions from start to finish. From concept to completion we take care of everything.</motion.p>
                        </section>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                        className="w-full h-full flex justify-center"
                    >
                        <a href="mailto:contact@digitallyserved.com">
                            <Button text='Start New Project' />
                        </a>
                    </motion.div>
                    <motion.div className='flex items-center gap-[8px]'>
                        <motion.div
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{
                                type: "tween",
                                duration: 0.3
                            }}
                            className='cursor-pointer group w-[48px] h-[48px] relative flex items-center justify-center bg-custom_gray rounded-full'>
                            <div className='scale-0 group-hover:scale-100 transition-all delay-150 ease-in absolute left-0 right-0 top-0 bottom-0 rounded-full bg-custom_black'></div>
                            <a className='z-[999]' rel="noreferrer" target={"_blank"}>
                                <Image src={"/assets/facebook.png"} alt="facebook" width={24} height={24} />
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{
                                type: "tween",
                                duration: 0.3,
                                delay: 0.2
                            }}
                            className='cursor-pointer group w-[48px] h-[48px] relative flex items-center justify-center bg-custom_gray rounded-full'>
                            <div className='scale-0 group-hover:scale-100 transition-all delay-150 ease-in absolute left-0 right-0 top-0 bottom-0 rounded-full bg-custom_black'></div>
                            <a className='z-[999]' rel="noreferrer" target={"_blank"}>
                                <Image src={"/assets/instagram.png"} alt="facebook" width={24} height={24} />
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{
                                type: "tween",
                                duration: 0.3,
                                delay: 0.4
                            }}
                            className='cursor-pointer group w-[48px] h-[48px] relative flex items-center justify-center bg-custom_gray rounded-full'>
                            <div className='scale-0 group-hover:scale-100 transition-all delay-150 ease-in absolute left-0 right-0 top-0 bottom-0 rounded-full bg-custom_black'></div>
                            <a className='z-[999]' rel="noreferrer" target={"_blank"}>
                                <Image src={"/assets/linkedin.png"} alt="linkedin" width={24} height={24} />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </header>
        </Container>
    )
}

export default Header