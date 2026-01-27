import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import footerimage from '@/../public/Footer/Footerimage.svg'
import footerlogo from '@/../public/Footer/footerlogo.svg'

const Footer = () => {
    return (
        <div className='bg-yellow-300 py-[10px] px-[20px] gap-[20px] flex flex-col'>

            <div className='flex flex-wrap justify-center gap-[20px] md:justify-between'>
                <ul className='flex gap-[20px] text-[#000000] font-medium'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/career">Career</Link></li>
                    <li><Link href="/journey">Journey</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <p className='text-[16px] leading-[22px]'>© {new Date().getFullYear()}  ·  All rights reserved</p>
            </div>

            <Image src={footerimage} alt='footerimage' />
            <Image className='w-auto h-auto'  src={footerlogo} alt='footerlogo' />
            
        </div>
    )
}

export default Footer