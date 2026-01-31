import React from 'react'
import { LayoutDashboard } from "lucide-react";
import { ChartBarStacked, Rss, StickyNote, LogOut } from "lucide-react";
import { House } from 'lucide-react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between w-1/6 bg-white">
        <p className="text-xl mt-3.5 text-center font-bold text-shadow-lg">
          Dashboard
        </p>

        <ul className="p-3 flex flex-col gap-3.5">

          <li className="bg-[#F04855] rounded-full px-4.5 py-2.5">
            <Link className="flex font-[Mulish] items-center text-white text-[14px] font-semibold gap-2.5" href="/dashboard">
              <LayoutDashboard /> Dashboard
            </Link>
          </li>

          <li className="bg-[#F04855] rounded-full px-4.5 py-2.5">
            <Link className="flex font-[Mulish] items-center text-white text-[14px] font-semibold gap-2.5" href="/dashboard/addpost">
              <StickyNote /> Add Posts
            </Link>
          </li>

          <li className="bg-[#F04855] rounded-full px-4.5 py-2.5">
            <Link className="flex font-[Mulish] items-center text-white text-[14px] font-semibold gap-2.5" href="/dashboard/addcategories">
              <ChartBarStacked />Add Categories
            </Link>
          </li>

          <li className="bg-[#F04855] rounded-full px-4.5 py-2.5">
            <Link className="flex font-[Mulish] items-center text-white text-[14px] font-semibold gap-2.5" href="/blog">
              <Rss /> Blogs
            </Link>
          </li>

          <li className="bg-[#F04855] rounded-full px-4.5 py-2.5">
            <Link className="flex font-[Mulish] items-center text-white text-[14px] font-semibold gap-2.5" href="/">
              <House /> Home
            </Link>
          </li>
        </ul>
        <div className="border-t-gray-900 shadow-2xl p-3 flex gap-3.5 ">
          <LogOut className="text-gray-600" />
          <p className="text-gray-600">Logout</p>
        </div>
      </div>
  )
}

export default SideBar