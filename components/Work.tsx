"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'


import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useIsSmall } from '../hooks/utils'

type Props = {
    title: string,
    description: string,
    image: string,
    order: string[],
    tags: string[],
    number: number,
    link?: string
}


const Card = ({ title, description, image, link, order, tags, number }: Props) => {
    const isSmall = useIsSmall()
    const { scrollYProgress } = useScroll()
    const x = useTransform(scrollYProgress, [1, -0], [0, number])

    return (
        <motion.div style={{ x: isSmall ? "0" : x }} className='grid grid-cols-12 max-w-[1062px] mx-auto gap-[16px]'>
            <div
                className={`rounded-[30px] group  max-h-[436px] col-span-12 min-[900px]:col-span-7 ${order[0]} relative`}
            >
                {
                    link ? (
                        <a href={link} target="_blank" rel="noreferrer" >
                            <Image src={image} alt={title}
                                width={658}
                                height={436}
                                className={`rounded-[30px] ${order[1] === "order-2" ? "border-l-[3px] lg:border-l-[4px] border-b-[3px] lg:border-b-[4px] border-custom_black" : "border-r-[3px] lg:border-r-[4px] border-custom_black border-b-[3px] lg:border-b-[4px]"}`}
                            />
                        </a>
                    ) : (
                        <Image src={image} alt={title}
                            width={658}
                            height={436}
                            className={`rounded-[30px] ${order[1] === "order-2" ? "border-l-[3px] lg:border-l-[4px] border-b-[3px] lg:border-b-[4px] border-custom_black" : "border-r-[3px] lg:border-r-[4px] border-custom_black border-b-[3px] lg:border-b-[4px]"}`}
                        />
                    )
                }
                {/* <div
                    className={`rounded-full flex items-center justify-center  pointer-events-none group-hover:opacity-100 transition-all duration-200  group-hover:scale-100 group-hover:block w-28 h-28 bg-primary group-hover:pointer-events-auto hover:cursor-pointer absolute top-[50%] translate-y-[-65%] ${order[1] === "order-2" ? "right-[-56px]" : "left-[-56px]"}`}>

                    <Image
                        src={"/assets/arrow.png"}
                        width={64}
                        height={64}
                        className="object-contain aspect-auto"
                        alt="arrow"
                    />
                </div> */}
                {/* <div className={`hidden sm:block absolute bg-black z-[-1] w-full h-full rounded-[30px] ${order[1] === "order-2" ? "right-[6px] top-[6px]" : "left-[6px] top-[6px]"} ${order[1]}`}></div> */}
            </div>
            <div className={`col-span-12 min-[900px]:col-span-5  ${order[1] === "order-2" ? "min-[900px]:ml-[19px]" : "min-[900px]:mr-[19px]"} ${order[1]} items-end`}>
                <div className={`flex flex-col gap-[16px] max-w-fit ${order[1] === "order-2" ? "min-[900px]:mr-auto" : "min-[900px]:ml-auto"}`}>
                    {
                        link ? (
                            <a href={link} target="_blank" rel="noreferrer">
                                <h3 className='min-[900px]:max-w-[270px] font-medium text-[24px]'>{title}</h3>
                            </a>
                        ) : (
                            <h3 className='min-[900px]:max-w-[270px] font-medium text-[24px]'>{title}</h3>

                        )
                    }
                    <p className={`
                        font-regular text-[16px] leading-[130%] max-w-[500px] min-[900px]:max-w-[270px]
                    `}>{description}</p>
                    <div className='flex gap-[4px] flex-wrap'>
                        {
                            tags.map((tag, index) => {
                                return (
                                    <p key={index} className='px-[20px] max-w-fit py-[6px] text-[14px] rounded-full border-[2px] border-black'>{tag}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Work = () => {
    return (
        <div id='work' className='overflow-x-hidden pt-[80px] px-[24px]'>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1, y: 0,
                    transition: {
                        type: "tween",
                        duration: 0.5
                    }
                }}
                className='font-extraBoldWide text-center text-[24px] lg:text-[32px] leading-[120%]'>WORK WE HAVE DONE</motion.h1>
            <section className='mt-[40px] h-fit py-2   flex flex-col gap-[32px]'>
                <Card

                    number={-100}
                    title='Worldly Wanderer'
                    description='The landing page will serve as the main entry point for the company&apos;s website, and will be focused on converting visitors into leads or customers. The landing page features visually appealing and engaging design elements, as well as clear and concise copy that effectively communicates the company&apos;s value proposition and call-to-action.'
                    image='/assets/work/ww.png'
                    order={
                        ["order-1", "order-2"]
                    }
                    tags={
                        ["Figma"]
                    }
                />
                <Card

                    number={100}
                    title='Infinity Perfumery - Ecommerce Store'
                    description='Indulge in the luxurious world of premium fragrances with our client&apos;s e-commerce store. The website was built using WordPress, a popular and user-friendly content management system. We used Elementor, a drag-and-drop page builder plugin, to design and customize the website&apos;s layout and appearance. Overall, our goal was to deliver a professional and user-friendly website.'
                    image='/assets/work/InfinityP.png'
                    order={
                        ["order-1 min-[900px]:order-2", "order-2 min-[900px]:order-1"]
                    }
                    tags={
                        ["Woocommerce", "Elementor"]
                    }
                    link="https://infinityperfumery.com/"
                />

                <Card

                    number={-80}
                    title='FalconTraders - Ecommerce'
                    description='The website was built using WordPress, a popular and user-friendly content management system. We used Elementor, a drag-and-drop page builder plugin, to design and customize the website&apos;s layout and appearance. Overall, our goal was to deliver a professional and user-friendly website.'
                    image='/assets/work/falcon.png'
                    order={
                        ["order-1", "order-2"]
                    }
                    tags={
                        ["Woocommerce", "Elementor"]
                    }
                />

                <Card

                    number={100}
                    title='Blkburd - NFT Marketplace'
                    description='To build the front-end of this marketplace, we will used Next JS, a powerful framework for building server-rendered React applications, as well as Tailwind CSS. We also integrated Sanity, a headless content management system (CMS), to allow for easy management and updating of the marketplace&apos;s content.'
                    image='/assets/work/Blkburd.png'
                    order={
                        ["order-1 min-[900px]:order-2", "order-2 min-[900px]:order-1"]
                    }
                    tags={
                        ["Figma", "Next JS"]
                    }
                    link="https://blkbrd-phi.vercel.app/"
                />
            </section>
        </div>
    )
}

export default Work