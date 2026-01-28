import React from 'react'

const AboutRead = () => {
    return (
        <div className='flex flex-col items-center justify-center py-[100px] px-[20px] gap-[40px]'>
            <h2 className='font-semibold text-[clamp(1rem,3vw,2.5rem)] leading-[clamp(1rem,3vw,2.375rem)] text-center'>
                Ready to operationalize your sustainability goals?
            </h2>
            <div className='flex bg-[#000000] py-[12px] px-[20px] cursor-pointer'>
                <p className='text-white text-[14px] leading-[18px] font-medium tracking-wide text-center'>Explore the platform</p>
            </div>
        </div>
    )
}

export default AboutRead