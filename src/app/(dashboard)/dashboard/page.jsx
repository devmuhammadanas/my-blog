'use client'
import { BlogpostsCard } from "@/app/components/dashboardCards/cards";
import LineGraph from "@/app/components/dashboardCards/Chart";
import SideBar from "@/app/components/SideBar";
import { Search } from "lucide-react";
import { UserRoundPen } from "lucide-react";
import { useAuthContext } from "../../../../useContext/AuthContext";
import { UseDiviceCard } from "@/app/components/dashboardCards/UseDiviceCard";
import ShowValueCards from "@/app/components/dashboardCards/ShowValueCards";

const Dashboard = () => {
  const {user} = useAuthContext()

 const profileName = user?.fullName

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
                  <p>{profileName}</p>
            <UserRoundPen />
          </div>
        </div>

        <div className="w-full">
          <ShowValueCards />
          </div>        
        <div className="w-full">
          <LineGraph />
        </div>

        <div className="flex p-2.5 gap-5">
          <BlogpostsCard className='w-2/3'/>
          <UseDiviceCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


