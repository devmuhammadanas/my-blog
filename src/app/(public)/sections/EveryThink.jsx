import React from 'react'
import everythink from '@/../public/Everethink Image/everythink.svg'
import Image from 'next/image'


const EveryThink = () => {

    const listdata = [
        {
            heading: 'Track',
            no: '001',
            text: 'Emissions, energy, and waste across your value chain',
        },
        {
            heading: 'Model',
            no: '002',
            text: 'Emissions, energy, and waste across your value chain',
        },
        {
            heading: 'Report',
            no: '003',
            text: 'Emissions, energy, and waste across your value chain',
        },
        {
            heading: 'Act',
            no: '004',
            text: 'Emissions, energy, and waste across your value chain',
        }
    ]

    return (
        <div className='flex flex-col justify-center py-[100px] px-[20px] gap-[40px]'>
            <h2 className='font-semibold text-[clamp(1.5rem,4vw,3.5rem)] leading-[clamp(1.75rem,5vw,4.375rem)] text-center'>
                Everything you need to measure,<br /> model, and act on sustainability
            </h2>
            <div className='flex justify-center flex-wrap gap-[40px]'>
                <div>
                    <Image src={everythink} alt='image' />
                </div>
                <div className='flex flex-col justify-between grow-[1]'>
                    <hr className='text-gray-300' />
                    {
                        listdata.map((e, i) => {
                            return (
                                <div key={i} className='flex flex-col gap-[16px] p-[12px]'>
                                    <div className='flex justify-between'>
                                        <p className='text-[16px] font-semibold leading-[22px] text-black'>{e.heading}</p>
                                        <p className='text-[12px] leading-[16px] text-gray-500'>{e.no}</p>
                                    </div>
                                    <p>{e.text}</p>
                                    <hr className='text-gray-300' />
                                </div>
                            )
                        })
                    }

                    <div className='flex w-[181px] bg-[#000000] py-[12px] px-[20px] cursor-pointer'>
                        <p className='text-white text-[14px] leading-[18px] font-medium tracking-wide text-center'>Explore features</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EveryThink