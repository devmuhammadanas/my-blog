import SideBar from "@/app/components/SideBar";
import { UserPlus, StickyNote, Heart, Eye } from "lucide-react";
import { UserRoundPen } from "lucide-react";
import { Search } from "lucide-react";
import React from "react";

const AddPost = () => {
  const userInfo = [
    {
      icon: UserPlus,
      heading: 18.356,
      text: "Followers",
      bgcolor: "bg-red-100",
      textcolor: "text-red-400",
    },
    {
      icon: StickyNote,
      heading: 18.356,
      text: "Posts",
      bgcolor: "bg-green-100",
      textcolor: "text-green-400",
    },
    {
      icon: Heart,
      heading: 18.356,
      text: "Like",
      bgcolor: "bg-blue-100",
      textcolor: "text-blue-400",
    },
    {
      icon: Eye,
      heading: 18.356,
      text: "Views",
      bgcolor: "bg-orange-100",
      textcolor: "text-orange-400",
    },
  ];
  return (
    <div className="flex w-full h-screen bg-[#F2F2F2]">
      <SideBar />
      <div className="flex flex-col overflow-y-auto p-1.5 grow-1">


        <div className="flex justify-between shadow-2xl bg-white py-2.5 px-3.5">
          <div className="bg-gray-100 gap-1.5 w-1/3 flex items-center py-2 px-3 text-xs rounded-full">
            <Search className="text-gray-400 h-[12px] w-[12px]" />
            <input
              className="outline-0 text-gray-400"
              placeholder="Search.."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2.5">
            <p>Dev Anas</p>
            <UserRoundPen />
          </div>
        </div>
         
         <div className="flex p-4 gap-4.5">
          {userInfo.map((e, i) => {
            let Icon = e.icon;
            return (
              <div
                key={i}
                className="flex flex-col justify-center items-center bg-white shadow-2xl py-2.5 w-1/4 rounded-2xl flex flex-col gap-2.5"
              >
                <Icon
                  className={`${e.bgcolor} ${e.textcolor} h-[32px] w-[32px] p-1.5 rounded-xl`}
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold text-xl tracking-[1px]">
                    {e.heading}
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    {e.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
    </div>
  );
};

export default AddPost;
