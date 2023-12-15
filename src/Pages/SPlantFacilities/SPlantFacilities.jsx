import React from "react";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import SidebarSplantFacilities from "../../Components/Sidebar/SidebarSplantFacilities";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const SPlantFacilities = () => {
  

  return (
    <div>
        <NavbarMain/>
        <SidebarSplantFacilities/>
    <div className="relative bg-lavenderblush w-full h-[1070px] overflow-hidden text-left text-[16px] text-darkslategray font-poppins ">

      <div className="absolute top-[98px] left-[404px] rounded-31xl shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[1850px] h-[998px] overflow-hidden text-center text-3xl text-white bg-green-50">
      <div className="absolute top-0 left-0 m-4 cursor-pointer ml-[1780px]">
          <CiCirclePlus className="text-slate-950 font-bold text-[50px]"/>
        </div>
        <div>
            <div className="absolute top-[140px] left-[764px] text-[26px] font-semibold text-steelblue bg-green-200 w-[350px] rounded-2xl h-28 mt-5">
            <p className="m-0 text-black mt-4">S-Plant-SAT</p>
            <p className="m-0 text-black">S Satellite</p>
            </div>
        
            <div className="absolute top-[239px] left-[calc(45%_-_551px)] w-[1302px] flex flex-row flex-wrap items-start justify-center gap-[30px] bg-green-200 rounded-2xl">
                <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0 ">
                <div className="absolute top-[calc(50%_-_53.5px)] left-[calc(40%_-_81px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px] mt-3">
                <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
                <p className="m-0 text-white">BULID</p>
                <p className="m-0 text-white mb-3">Bulidings</p>
                </div>
            </div>
            <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_53.5px)] left-[calc(50%_-_98px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">CMS</p>
              <p className="m-0 text-white mb-3">Communications</p>
            </div>
          </div>
          <div
            className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0 cursor-pointer"
            //onClick={onFrameContainer6Click}
          >
            <Link to='/s-plant-sat-com-compression'>
            <div className="absolute top-[calc(50%_-_53.5px)] left-[calc(50%_-_81px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">COM</p>
              <p className="m-0 text-white mb-3">Compression</p>
            </div>
            </Link>
          </div>
          <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(50%_-_53.5px)] left-[calc(50%_-_81px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">DEH</p>
              <p className="m-0 text-white mb-3">Dehydration</p>
            </div>
          </div>
          <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(40%_-_53.5px)] left-[calc(50%_-_101px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">MOB</p>
              <p className="m-0 text-white mb-3">Mobile Equipment</p>
            </div>
          </div>
          <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(40%_-_53.5px)] left-[calc(50%_-_100px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">PWRG</p>
              <p className="m-0 text-white mb-3">Power Generation</p>
            </div>
          </div>
          <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(40%_-_53.5px)] left-[calc(50%_-_99px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">SAFE</p>
              <p className="m-0 text-white mb-3">Safety Equipment</p>
            </div>
          </div>
          <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(40%_-_53.5px)] left-[calc(50%_-_81px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">SEP</p>
              <p className="m-0 text-white mb-3">Separation</p>
            </div>
          </div>
          <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(35%_-_53.5px)] left-[calc(50%_-_81px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">SHU</p>
              <p className="m-0 text-white mb-3">Shutdown</p>
            </div>
          </div>
          <div className="relative rounded-6xl bg-cornflowerblue w-60 h-[215px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(35%_-_53.5px)] left-[calc(50%_-_86px)] font-light bg-blue-800 rounded-xl w-[200px] h-[100px] text-[20px]  mt-3">
              <p className="m-0 text-white mt-3">S-PLANT-SAT-</p>
              <p className="m-0 text-white">WAS</p>
              <p className="m-0 text-white mb-3">Waste Disposal</p>
            </div>
          </div>
        </div>
        
        <b
          className="absolute top-[calc(40%_-_337px)] left-[calc(50%_-_144px)] text-[28px] text-black text-left cursor-pointer"
          //onClick={onSPLANTClick}
        >
          S - PLANT - S Facilities
        </b>
   
      </div>
    
    </div>
    </div>
    </div>
  );
};

export default SPlantFacilities;
