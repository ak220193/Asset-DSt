import React from "react";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GiPathDistance } from "react-icons/gi";
import { IoIosPlay } from "react-icons/io";

const SidebarSplantFacilities = () => {
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
       <b className="absolute top-[92px] left-[calc(50%_-_18px)] text-[27px] [text-decoration:underline] font-times-new-roman ml-[-50px]">
        <GiPathDistance className="mr-2 mb-[-3px]"/>
          Path
        </b>

        <div className="absolute top-[146px] text-[25px] ml-2">
            <IoIosPlay className="mb-[-4px] mr-4"/>
            <span>East Assets</span>
            <div className="flex items-center ml-5 mt-[-38px]">
                <IoIosPlay className="mb-[-4px] mr-4 mt-[-65px]"/>
                <span className="text-[20px] mt-[-35px] ml-[-9px]">S-Assets</span>
                <div className="flex items-center ml-[-66px] text-[20px] mt-12">
                    <IoIosPlay className="mb-[-4px] mt-[35px]"/>
                    <span  className="mt-16 ml-2">S-Plant-S-Facilities</span>
                    <div className="flex items-center ml-[-86px] text-[20px] mt-12">
                        <IoIosPlay className="mb-[-4px] mt-[95px] ml-[-25px]"/>
                        <span className="mt-[119px] ml-2">S-Plant-SAT-S-Satellite</span>
                    </div>
                </div>
            </div>
        </div>

      <div className="absolute top-[992px] left-[78px] text-zinc-900 text-[24px] cursor-pointer" onClick={handleLogout}>
        <IoIosLogOut style={{marginRight:'10px', marginBottom:'-3px'}}/>
        Logout
        </div>
        <div className="absolute top-[933px] left-[78px] text-zinc-900 text-[24px]">
            <IoMdSettings style={{marginRight:'10px', marginBottom:'-3px'}}/>
            Settings
        </div>
       
        <button className="absolute top-[65%] left-[30%] transform translate(-50%, -50%) rounded-31xl bg-rose-pink flex flex-row items-center justify-start py-2.5 px-5 gap-[9px] text-[18px] text-white font-poppins cursor-pointer text-center rounded"
         style={{ backgroundColor: "#0d8041", border:'#0d8041' }}
        >
            <CiImport/>
            Import
        </button>
        <button className="absolute top-[75%] left-[30%] transform translate(-50%, -50%) rounded-31xl bg-rose-pink flex flex-row items-center justify-start py-2.5 px-5 gap-[9px] text-center text-[18px] text-white font-poppins cursor-pointer rounded"
         style={{ backgroundColor: "#58bf87", border:'#58bf87' }}
        >
            <CiExport/>
           Export
        </button>
      </div>

    )
}

export default SidebarSplantFacilities;
