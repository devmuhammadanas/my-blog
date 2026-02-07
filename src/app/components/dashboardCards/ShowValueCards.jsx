'use clinet'

import { UserPlus, StickyNote, Heart, Eye } from "lucide-react";
import { useAuthContext } from "../../../../useContext/AuthContext";
const ShowValueCards = () => {

  const {postsData} = useAuthContext()

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
      heading: postsData.length,
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

    return(
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
    )
}

export default ShowValueCards