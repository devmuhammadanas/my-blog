import Image from 'next/image'
import React from 'react'
import profileImage from '@/../public/About/profileImage.svg'

const About = () => {
    return (
        <div className='flex flex-wrap md:flex-nowrap justify-center items-center py-[100px] px-[20px] gap-[16px]'>
            <Image className='w-full md:max-w-1/2 h-auto w-auto' src={profileImage} alt='image' />
            <div className='w-full md:w-1/2 flex flex-col gap-[32px]'>
                <p className='text-[32px] leading-[40px] font-bold'>We finally moved past spreadsheets and guesswork.
                    Now we have real data to guide real decisions.</p>
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] leading-[20px] font-bold tracking-normal'>Elliot Williams</p>
                    <p className='text-[12px] leading-[20px] text-gray-400 tracking-normal'>
                        Head of Sustainability, Flux Materials</p>
                </div>
            </div>
        </div>
    )
}

export default About