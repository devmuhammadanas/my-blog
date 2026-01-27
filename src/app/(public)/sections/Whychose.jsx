import React from 'react'
import whychose from '@/../public/whyChose/whychose.svg'
import Image from 'next/image'

const Whychose = () => {
    return (
        <div className='flex justify-center items-center py-[100px] px-[20px]'>
            <div className='w-[75%] flex flex-wrap lg:flex-nowrap items-center rounded-2xl bg-sky-200 p-[20px] gap-[30px]'>
                <Image className='h-auto w-auto' src={whychose} alt='image' />
                <div className='flex flex-col gap-[32px]'>
                    <div className='flex flex-col gap-[16px]'>
                        <p className='text-[20px] leading-[28px] font-bold'>
                            Why Acme Inc chose Aetherfield
                        </p>
                        <p className='text-[16px] leading-[20px] tracking-normal font-medium'>
                            With fragmented data and growing reporting pressure,
                            Acme turned to Aetherfield to streamline their ESG workflows.
                            The result? Faster decisions, fewer spreadsheets, and 34% more coverage.
                        </p>
                    </div>

                    <div className='flex bg-[#000000] w-[150px] py-[12px] px-[20px] cursor-pointer'>
                        <p className='text-white text-[14px] leading-[18px] font-medium tracking-wide text-center'>Read case study</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whychose