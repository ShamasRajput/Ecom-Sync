"use client"
import React, { useRef } from 'react'
import { motion, Variants } from 'framer-motion'

const Analytics = () => {

    return (
        <motion.div className=' grid grid-cols-8 max-w-[854px] px-[24px]  mx-auto gap-[21px] place-items-center  pt-[80px]'>
            <motion.section
                whileHover={{
                    scale: 1.02,
                    rotate: -1.05,
                    transition: {
                        type: "tween",
                        duration: 0.3
                    }
                }}
                viewport={{ once: true, amount: 0.8 }}
                className='bg-light_orange border-b-[4px] border-l-[4px] border-black col-span-8 md:col-span-5 z-[999] rounded-[30px] p-8 relative text-white   h-[432px] flex items-center justify-center'>
                {/* <motion.div
                    initial={{
                        opacity: 0, translateX: -100
                    }}
                    whileInView={{
                        opacity: 1, translateX: 0,
                        transition: {
                            type: "tween",
                            duration: 0.8
                        }
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    className='absolute bg-custom_black z-[-1] left-[-6px] right-[6px] top-[6px] bottom-[-6px] rounded-[30px] '></motion.div> */}
                <div className='flex flex-col items-center justify-center '>
                    <motion.p
                        initial={{
                            opacity: 0, translateX: -20
                        }}
                        whileInView={{
                            opacity: 1, translateX: 0,
                            transition: {
                                type: "tween",
                                duration: 0.5
                            }
                        }}
                        className='font-extraBoldWide text-[32px] md:text-[48px] lg:ext-[72px]'>PKR 150K+</motion.p>
                    <motion.p
                        initial={{
                            opacity: 0, translateX: 20
                        }}
                        whileInView={{
                            opacity: 1, translateX: 0,
                            transition: {
                                type: "tween",
                                duration: 0.5
                            }
                        }}
                        className='font-mediumWide text-[22px] lg:text-[24px] text-center'>Total Revenue Generated From Our Portfolio</motion.p>
                </div>
            </motion.section>
            <section className='flex flex-row max-[430px]:flex-col md:flex-col col-span-8 md:col-span-3 gap-[16px]'>
                <motion.div
                    whileHover={{
                        scale: 1.02,
                        rotate: 1.05,
                        zIndex: 999,
                        transition: {
                            type: "tween",
                            duration: 0.3
                        }
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    className='px-[24px] bg-custom_white  flex items-center rounded-[30px] max-w-[305px] h-[205px]  border-custom_black border-[2px]'>
                    <div className='flex flex-col '>
                        <motion.p
                            initial={{
                                opacity: 0, translateX: -20
                            }}
                            whileInView={{
                                opacity: 1, translateX: 0,
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                }
                            }}
                            className='font-extraBoldWide text-[32px] lg:text-[40px]'>4+</motion.p>
                        <motion.p
                            initial={{
                                opacity: 0, translateX: 20
                            }}
                            whileInView={{
                                opacity: 1, translateX: 0,
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                }
                            }}
                            className='font-mediumWide text-[16px]'>Clients helped growing their business</motion.p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.02,
                        rotate: -1.05,
                        zIndex: 999,
                        transition: {
                            type: "tween",
                            duration: 0.3
                        }
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    className='px-[24px] flex bg-custom_white items-center rounded-[30px] max-w-[305px] h-[205px]  border-custom_black border-[2px]'>
                    <div className='flex flex-col '>
                        <motion.p
                            initial={{
                                opacity: 0, translateX: -20
                            }}
                            whileInView={{
                                opacity: 1, translateX: 0,
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                }
                            }}
                            className='font-extraBoldWide text-[32px] lg:text-[40px]'>5+</motion.p>
                        <motion.p
                            initial={{
                                opacity: 0, translateX: 20
                            }}
                            whileInView={{
                                opacity: 1, translateX: 0,
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                }
                            }}
                            className='font-mediumWide text-[16px]'>Projects done with 100% client satisfaction</motion.p>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    )
}

export default Analytics