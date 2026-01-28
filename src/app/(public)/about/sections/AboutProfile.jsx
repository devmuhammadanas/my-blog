import Image from 'next/image'
import React from 'react'
import profileImage from '@/../public/About Page/profileImages/profileImage.svg'

const AboutProfile = () => {
    return (
        <div className='flex flex-wrap md:flex-nowrap justify-center items-center py-[100px] px-[20px] gap-[16px]'>
            <Image className='w-full md:max-w-1/2 h-auto w-auto' src={profileImage} alt='image' />
            <div className='w-full md:p-[100px] md:w-1/2 flex flex-col gap-[32px]'>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-gray-500 text-[16px] leading-[20px]'>Founder’s story</p>
                    <p className='text-[32px] leading-[40px] font-bold'>Eunji Park</p>
                </div>
                <p className='text-[16px] leading-[20px]'>Eunji founded Aetherfield with one goal:
                    to help companies take climate action without waiting for a perfect plan.
                    With a background in environmental systems and software design, she’s
                    spent the past decade building tools that turn impact goals into real-world outcomes.
                    \She still insists on biking to every investor meeting.</p>
            </div>
        </div>
    )
}

export default AboutProfile