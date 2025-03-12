"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import Button from './Button'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'

type Props = {
    title: string,
    description: string,
    list: string[],
    image: string,
    shadow?: boolean,
    color?: string,
    styles?: string,
}

const MotionButton = motion(Button)

const Card = ({ title, description, list, image, shadow, color, styles }: Props) => {

    return (
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
            className={`${styles} ${shadow && "border-l-[4px] border-b-[4px] border-black"} rounded-[30px] relative flex h-auto gap-[16px] col-span-4 max-w-[302px] flex-col ${color} text-white px-[32px] py-[56px]`}>
            {/* {
                shadow && (
                    <div className='absolute top-[6px] right-[6px] w-full h-full bg-black rounded-[30px] z-[-1]'></div>
                )
            } */}
            <Image src={image} alt={title} width={40} height={40} className="object-contain" />
            <div className='flex flex-col gap-[8px]'>
                <h3 className='font-bold text-[24px]'>{title}</h3>
                <p className='font-regular text-[14px] leading-5'>{description}</p>
            </div>
            <ul className='list-disc ml-4 font-regular text-[14px] leading-5'>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </motion.div>
    )
}

const Offer = () => {
    const ref = useRef(null)
    return (
        <section id='services' className='diagonal mt-[80px] py-12'>
            <div ref={ref} className=' w-full px-[24px] max-w-[944px] mx-auto'>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                            type: "tween",
                            duration: 0.5
                        }
                    }}
                    className='font-extraBoldWide text-center text-[24px] lg:text-[32px] leading-[120%]'>WHAT WE OFFER</motion.h1>
                <section className='scrollbar-hide flex items-start flex-wrap justify-center md:grid md:grid-cols-12 gap-[16px] mt-[40px]  '>
                    <Card
                        title='Development'
                        description='With a team of experienced fullstack developers, we have the skills and expertise to deliver high-quality solutions that meet your unique needs.'
                        list={
                            [
                                'Fullstack Development',
                                'SEO Friendly',
                                'Custom Code',
                                "Web Maintenance",
                                "Ecommerce Development",
                                'Latest Technologies'
                            ]
                        }
                        image='/assets/development.png'
                        color="bg-light_blue"
                        styles='order-1 sm:order-0'
                    />

                    <Card
                        shadow={true}
                        title='Visual Design'
                        description='Our design team has a keen eye for aesthetics and a deep understanding of how to effectively communicate through visual media. '
                        list={
                            [
                                "Graphics Design",
                                "Responsive Web Design",
                                "Illustration",
                                "Digital Products",
                                "Social Media Design"
                            ]
                        }
                        image='/assets/vd.png'
                        color="bg-light_orange"
                        styles='order-0 sm:order-1'
                    />

                    <Card
                        title='Digital Marketing'
                        description='Our software agency helps businesses and organizations reach and engage their audience through targeted and effective digital marketing strategies. '
                        list={
                            [
                                "SEO",
                                "Copy Writing",
                                "Social Media Marketing",
                            ]
                        }
                        image='/assets/marketing.png'
                        color="bg-light_red"
                        styles='order-2 sm:order-2'
                    />
                </section>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{
                        opacity: 1, y: 0,
                        transition: {
                            type: "tween",
                            duration: 0.5
                        }
                    }}
                    className='flex justify-center mt-[16px]'>
                    <a href="mailto:contact@digitallyserved.com">

                        <MotionButton
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1, y: 0,
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                }
                            }}

                            text='Start New Project' />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Offer