'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [showManu, setShowManu] = useState(false)

    return (
        <header>
            <nav className='py-[20px] px-[20px] flex justify-between'>
                <p className='text-[20px] leading-[18px] font-extrabold text-shadow-lg'>Aetherfield</p>
                <ul className='hidden md:flex flex gap-[20px] text-[#000000] font-medium'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/career">Career</Link></li>
                    <li><Link href="/journey">Journey</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setShowManu(!showManu)}
                    aria-label="Toggle menu"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3 6h18M3 12h18M3 18h18"
                            stroke="#111"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </nav>

            {
                showManu &&
                <div className="md:hidden absolute top-[70.58px] w-full shadow-lg px-6 py-6">
                    <ul className="flex flex-col gap-5 text-[#000000] font-medium">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Integrations</li>
                        <li className="cursor-pointer">Contact Us</li>
                    </ul>
                </div>

            }

        </header>
    )
}

export default Header