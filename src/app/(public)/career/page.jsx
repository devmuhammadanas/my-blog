import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const Career = () => {
  const cardData = [
    {
      heading: "UX Designer",
      location: "Contract San Francisco, CA",
      description: "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
      button: "View role",
      backGround: "bg-white"
    },
    {
      heading: "Data Scientist",
      location: "Full-time Denver, CO",
      description: "Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams.",
      button: "View role",
      backGround: "bg-white"
    },
    {
      heading: "Product Manager",
      location: "Part-time Seattle, WA",
      description: "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
      button: "View role",
      backGround: "bg-white"
    },
    {
      heading: "Product Manager",
      location: "Part-time Seattle, WA",
      description: "Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
      button: "View role",
      cardBorder: "border-dashed"
    },
  ]
  return (
    <div className='relative flex flex-col items-center'>
      <div className='w-full flex flex-col gap-[80px] bg-gradient-to-b from-[#A8D3FF] to-[#FFF4DF]'>
        <Header />
        <h2 className='text-center text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[clamp(2rem,6vw,6.25rem)]'>
          Careers at<br /><b>Aetherfield</b></h2>
        <div className='flex p-[20px] m-auto w-full lg:w-2/3 flex-col gap-[15px] mb-[100px]'>

          {
            cardData.map((e, i) => {
              return (
                <div key={i} className={`p-[40px] border rounded-2xl ${e.backGround} ${e.cardBorder}`}>
                  <div className='flex flex-wrap justify-between gap-[30px]'>
                    <div className='flex flex-col gap-[20px]'>
                      <div className="flex flex-col gap-[10px]">
                        <p className='text-[22px] leading-[28px] font-semibold text-black'>{e.heading}</p>
                        <p className='text-[12px leading-[16px] tracking-[2px] text-gray-500'>{e.location}</p>
                      </div>
                      <p className='text-[16px] leading-[20px] text-black'>{e.description}</p>
                    </div>
                    <div className='w-[167px] h-[40px] bg-black py-[10px] px-[12px]'>
                      <p className='text-[14px] leading-[18px] text-white text-center'>{e.button}</p>
                    </div>

                  </div>
                </div>
              )
            })
          }


        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Career