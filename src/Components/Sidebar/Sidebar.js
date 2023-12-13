import React from "react";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    }
    return (
    <div 
        className="absolute top-[calc(50%_-_538.5px)] left-[29px] rounded-31xl bg-white shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[340px] overflow-hidden text-black font-calibri h-[1050px] mt-4">

      <div className="absolute top-[18px] left-[calc(50%_-_109px)] text-[32px] font-semibold  text-[rgb(157,49,113)]">
          GVG - Plant
       </div>

      <div className="absolute top-[992px] left-[78px] text-zinc-900 text-[24px] cursor-pointer" onClick={handleLogout}>
        <IoIosLogOut style={{marginRight:'10px', marginBottom:'-3px'}}/>
        Logout
        </div>
       <div className="absolute top-[131px] left-[79px] text-zinc-900 text-[24px]"> 
       <FaHome style={{marginRight:'10px', marginBottom:'-3px'}}/>
       Dashboard
       </div>
        <div className="absolute top-[933px] left-[78px] text-zinc-900 text-[24px]">
            <IoMdSettings style={{marginRight:'10px', marginBottom:'-3px'}}/>
            Settings
        </div>
        <div className="absolute top-[191px] left-[79px] text-zinc-900 text-[24px]">
            <CgProfile style={{marginRight:'10px', marginBottom:'-3px'}}/>  
            User Page
        </div>
       
        <button className="absolute top-[35%] left-[30%] transform translate(-50%, -50%) rounded-31xl bg-rose-pink flex flex-row items-center justify-start py-2.5 px-5 gap-[9px] text-[18px] text-white font-poppins cursor-pointer text-center rounded"
         style={{ backgroundColor: "#a93279", border:'#a93279' }}
        >
            <CiImport/>
            Import
        </button>
        <button className="absolute top-[45%] left-[30%] transform translate(-50%, -50%) rounded-31xl bg-rose-pink flex flex-row items-center justify-start py-2.5 px-5 gap-[9px] text-center text-[18px] text-white font-poppins cursor-pointer rounded"
         style={{ backgroundColor: "#a93279", border:'#a93279' }}
        >
            <CiExport/>
           Export
        </button>
      </div>

    )
}

export default Sidebar;