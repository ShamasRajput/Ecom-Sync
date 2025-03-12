import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='pt-[80px] max-w-[848px] mx-auto px-[24px]'>
        <div className='flex items-center justify-between'>
            <h4 className='text-primary mr-2 font-boldWide text-[24px]'>WHAT OUR CLIENTS SAY</h4>
            <Image className='object-contain' src={"/assets/quotation_mark.png"} alt="What our clients say" width={44} height={44} />
        </div>
        <p className='font-medium text-[24px] md:text-[32px] my-[8px]'>“ It was great working with EcomSync. Overall, customer experience was smooth and the product met the requirements. Thanks. “</p>
        <p className='px-[32px] py-[12px] border-2 border-primary max-w-fit rounded-full'>UpscaleX Agencies</p>
    </div>
  )
}

export default Testimonial