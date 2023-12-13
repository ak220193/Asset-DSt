import React from "react";
import SidebarMain from "../../Components/Sidebar/SidebarMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import { CiCirclePlus } from "react-icons/ci";

const DashboardMain = () => {

  return (
    <div>
      <SidebarMain/>
      <NavbarMain/>
      <div className="absolute top-[98px] left-[404px] rounded-31xl bg-white shadow-[0px_0px_15px_2px_rgba(241,_180,_187,_0.8)] w-[1850px] h-[950px] overflow-hidden text-center text-white ">
        <div className="absolute top-0 left-0 m-4 cursor-pointer ml-[1780px]">
          <CiCirclePlus className="text-slate-950 font-bold text-[50px]"/>
        </div>
        <div className="absolute top-[44px] left-[1229px] w-6 h-6 overflow-hidden" />
        <div className="absolute h-[10.32%] w-[18.54%] top-[9.32%] bottom-[80.36%]  rounded-6xl bg-palevioletred overflow-hidden text-9xl"></div>
        <div>
          <b className="absolute top-[31px] left-[calc(50% - 73px)] text-[36px] text-black text-left mt-24 ml-[-30px]">
            Assets
          </b>
        </div>

        <div className="mt-10 p-8 bg-gray-200 rounded-md">
          <div className="flex flex-wrap justify-center mt-[250px]">
            <div className="flex mb-4 ">
              <div className="bg-blue-900 text-white px-4 py-2 mr-4 w-[240px] h-[140px] rounded text-[25px] flex items-center justify-center">
                East Assets
              </div>
            </div>
            <div className="flex mb-4 ml-8">
              <div className="bg-blue-900 text-white px-4 py-2 mr-4 w-[240px] h-[140px] rounded text-[25px] flex items-center justify-center">
                West Assets
              </div>
            </div>
            <div className="flex mb-4 ml-8">
              <div className="bg-blue-900 text-white px-4 py-2 mr-4 w-[240px] h-[140px] rounded text-[25px] flex items-center justify-center">
                North Assets
              </div>
            </div>
            <div className="flex ml-8">
              <div className="bg-blue-900 text-white px-4 py-2 w-[240px] h-[140px] rounded text-[25px] flex items-center justify-center">
                South Assets
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
