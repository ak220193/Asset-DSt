import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

const Dashboard = () => {

  return (

      <div className="absolute top-[98px] left-[404px] rounded-31xl bg-white shadow-[0px_0px_15px_2px_rgba(241,_180,_187,_0.8)] w-[1850px] h-[950px] overflow-hidden text-center text-white">
        <div className="absolute top-[44px] left-[1229px] w-6 h-6 overflow-hidden" />
        <div className="absolute h-[10.32%] w-[18.54%] top-[9.32%] bottom-[80.36%]  rounded-6xl bg-palevioletred overflow-hidden text-9xl">
          <button className="relative w-40 h-16 text-slate-200 rounded text-5xl flex items-center justify-center ml-10"
          style={{ backgroundColor: "#a93279" , border:'#a93279'}}
          >
            Plants
            <CiCirclePlus  className="relative inline-block text-3xl ml-2 text-white"/> 
          </button>
        </div>
        <div
          className="absolute top-[274px] left-[47px] text-9xl font-semibold text-black cursor-pointer text-[25px]"
          //onClick={onRecentActivitiesTextClick}
        >
          Recent Activities
        </div>
        <div
          className="absolute top-[348px] left-[166px] font-medium text-black inline-block w-[416px] cursor-pointer  text-[24px]"
          //onClick={onSPLANTSATCOMCompressionTextClick}
        >
          <FaRegEdit className="mr-8 mb-[-2px]" />
          S-PLANT-SAT-COM Compression
        </div>
        <div className="absolute top-[413px] left-[166px] font-medium text-black inline-block w-[416px] text-[24px]">
        <FaRegEdit className="mr-8 mb-[-2px]" />
          S-PLANT-SAT-COM Compression
        </div>
        <div
          className="absolute top-[343px] left-[998px] rounded-6xl bg-lightpink flex flex-row items-center justify-center py-[5px] px-5 cursor-pointer"
          //onClick={onFrameContainer2Click}
        >
          <button className="relative w-40 h-10 text-white text-[20px] rounded ml-32"  style={{ backgroundColor: "#bc7986", border:'#bc7986' }}>Edit</button>
        </div>
        <div className="absolute top-[408px] left-[998px] rounded-6xl bg-lightpink flex flex-row items-center justify-center py-[5px] px-5">
        <button className="relative w-40 h-10 text-white text-[20px] rounded ml-32"  style={{ backgroundColor: "#bc7986", border:'#bc7986' }}>Edit</button>
        </div>
      </div>
    
  );
};

export default Dashboard;
