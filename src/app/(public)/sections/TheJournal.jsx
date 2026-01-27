import React from 'react'
import blogImage from '@/../public/thejournal/blogImage.svg'
import blogImage1 from '@/../public/thejournal/blogImage1.svg'
import blogImage2 from '@/../public/thejournal/blogImage2.svg'
import Image from 'next/image'


const TheJournal = () => {
    const postcard = [
        {
            image: blogImage,
            heading: 'How to Build a Climate-Ready Data Stack',
            text: 'Insights 4 min'
        },
        {
            image: blogImage1,
            heading: 'Sustainability Isn’t a Side Project: Making Impact Operational',
            text: 'Insights 7 min'
        },
        {
            image: blogImage2,
            heading: 'Inside the Aetherfield Model: How We Turn Data Into Action',
            text: 'Insights 8 min'
        },
    ]
    return (
        <div className='flex flex-col items-center justify-center py-[100px] px-[20px] gap-[40px]'>
            <h2 className='font-semibold text-[clamp(1.5rem,4vw,3.5rem)] leading-[clamp(1.75rem,5vw,4.375rem)] text-center'>
                From the journal
            </h2>

            <div className='md:w-[60%] flex flex-col gap-[24px]'>
                <hr className='text-gray-400' />
                {
                    postcard.map((e, i) => {
                        return (
                            <div key={i}>
                                <div className='flex py-[26px] gap-[10px]'>
                                    <Image src={e.image} width={200} height={100} alt='image' />
                                    <div className='flex flex-col gap-[8px]'>
                                        <p className='text-black text-[16px] leading-[20px] font-bold'>{e.heading}</p>
                                        <p className='text-[12px] leading-[16px] text-gray-400'>{e.text}</p>
                                    </div>
                                </div>
                                <hr className='text-gray-400' />
                            </div>

                        )
                    })

                }


            </div>
            <div className='flex bg-[#000000] py-[12px] px-[20px] cursor-pointer'>
                <p className='text-white text-[14px] leading-[18px] font-medium tracking-wide text-center'>View all articles</p>
            </div>
        </div>

    )
}

export default TheJournal