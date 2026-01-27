import { Globe, Leaf, BarChart } from "lucide-react";
import React from 'react'

const Clarity = () => {
    const cardData = [
        {
            icon: Globe,
            heading: "Clarity drives action",
            text: "We believe better decisions start with better data—measured, visible, and trusted.",
        },
        {
            icon: Leaf,
            heading: "Sustainability matters",
            text: "We build tools that help teams connect the dots between operations, impact, and accountability.",
        },
        {
            icon: BarChart,
            heading: "Insights that scale",
            text: "We support real-world momentum—helping organizations move from ambition to measurable change.",
        },
    ];
    return (
        <div className='bg-gradient-to-l from-[rgba(199,206,209,1)] to-[rgba(237,221,83,1)] flex flex-col justify-center py-[100px] px-[20px] gap-[40px]'>
            <h2 className='font-semibold text-[clamp(1.5rem,6vw,3.5rem)] leading-[clamp(1.75rem,7vw,4.375rem)] text-center'>
                Built for clarity<br /> Designed for action
            </h2>
            <div className='flex border-2 flex-wrap justify-center lg:flex-nowrap gap-[16px]'>

                {
                    cardData.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="rounded-2xl w-full lg:w-1/3 gap-[16px] p-[40px] bg-white flex flex-col"
                            >
                                <item.icon size={32} />
                                <div className="flex flex-col gap-[6px]">
                                    <p className="text-[16px] leading-[24px] font-bold">
                                        {item.heading}
                                    </p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Clarity