import Header from '@/app/components/Header'
import React from 'react'

const AboutHero = () => {
    return (
        <div className='relative'>
            <Header className="absolute top-0 left-0 w-full z-50" />
            <div className="flex flex-wrap h-[800px]">
                <div className='w-full lg:w-1/2  bg-gradient-to-b from-[#A8D3FF] to-[#FFF4DF] flex justify-center items-center p-[40px]'>
                    <div className='w-[75%] shadow-lg rounded-2xl bg-white flex flex-col gap-3.5 p-[20px]'>
                        <p className='px-[8px] py-[4px] bg-amber-200 text-black rounded-full w-[90px] text-center cursor-pointer text-[12px] leading-[16px]'>
                            ForeCast
                        </p>
                        <p className='text-[18px] leading-[22px] font-semibold '>you're 16% off your 2027 emissions goal</p>
                        <p className='text-[10px] leading-[16px] text-gray-600'>Agust your Traget 16</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 bg-white gap-[32px] flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-[20px] w-[80%]'>
                        <p className='text-[22px] leading-[32px] text-gray-500 '>Our mission</p>
                        <h2 className='font-bold text-[clamp(1.75rem,3vw,4rem)] leading-[clamp(2rem,2.5vw,4.25rem)]'>Climate action starts with better information.
                            We help organizations turn complex data into measurable, meaningful change.</h2>
                        <div className=' mt-[30px] w-[164px] flex bg-[#000000] py-[12px] px-[20px] cursor-pointer'>
                            <p className='text-white text-[14px] leading-[18px] font-medium tracking-wide text-center'>Meet the team</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero