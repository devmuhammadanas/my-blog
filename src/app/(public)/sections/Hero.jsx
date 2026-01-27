import Header from '@/app/components/Header'
import React from 'react'
import heroImage from '@/../public/Hero Images/Heroimage.svg'
import heroImage1 from '@/../public/Hero Images/Heroimage-1.svg'
import heroImage2 from '@/../public/Hero Images/Heroimage-2.svg'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='relative flex flex-col items-center flex-wrap h-[642px] md:h-[919px] lg:h-[1074px]'>
            <div className='h-[593px] md:h-[759px] lg:h-[808.35px] w-full flex flex-col gap-[80px] bg-gradient-to-r from-[#A8D3FF] to-[#FFF4DF]'>
                <Header />
                <div className='flex flex-col flex-wrap items-center gap-[24px] p-[12px] md:gap-[16px] mx-auto'>
                    <h2 className='text-center text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[clamp(2rem,6vw,6.25rem)]'>
                        Sustainability insights,<br /><b>built for business</b></h2>
                    <p className='text-center text-[clamp(0.75rem,1.5vw,1rem)] leading-[clamp(1rem,2.5vw,1.75rem)] font-normaltext-[#000000]'>Track impact, reduce emissions, and accelerate progress—with clarity and confidence.</p>

                    <div className='flex justify-center flex-wrap gap-[16px]  '>
                        <div className='flex bg-[#000000] py-[12px] px-[20px] cursor-pointer'>
                            <p className='text-white text-[14px] leading-[18px] font-medium tracking-wide text-center'>Request a demo</p>
                        </div>
                        <div className='flex bg-[#000000] py-[12px] px-[20px] cursor-pointer'>
                            <p className='text-white text-[14px] leading-[18px] font-medium tracking-wide text-center'>Explore the platform</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 align-middle mx-[40px]'>

                <Image className='lg:flex w-full h-auto'  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw,50vw" src={heroImage} alt='IMAGE' />
            </div>

        </div>
    )
}

export default Hero