import React from "react";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import { CiCirclePlus } from "react-icons/ci";
import SidebarE201CoControlAndMonitor from "../../Components/Sidebar/SidebarE201CoControlAndMonitor";

const SPlantE201CoControlAndMonitor = () => {
  
  return (
    <div>
        <NavbarMain/>
        <SidebarE201CoControlAndMonitor/>
    <div className="relative bg-lavenderblush w-full h-[1060px] overflow-hidden text-left text-5xl text-white font-poppins">
      <div className="absolute top-[98px] left-[388px] rounded-31xl bg-white shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[1862px] h-[998px] overflow-hidden text-center">
        
      
        <div className="absolute top-[120px] left-[calc(35%_-_612px)] rounded-6xl bg-darkcyan-200 box-border w-[1765px] h-[763px] border-[4px] border-solid border-steelblue bg-green-100" />
        <div className="absolute top-0 left-0 m-4 cursor-pointer ml-[1780px]">
          <CiCirclePlus className="text-slate-950 font-bold text-[50px]"/>
        </div>
        <div className="absolute top-[359px] left-[82px] w-[1162px] h-[280px]">
        
          <div className="absolute top-[0px] left-[50px] rounded-6xl bg-cornflowerblue w-[350px] h-[280px] overflow-hidden rounded-2xl bg-blue-800">
            <b className="absolute top-[calc(50%_-_90px)] left-[calc(55%_-_134px)]">
              <p className="m-0">S-PLANT-TI-2127</p>
              <p className="m-0">{`Temperature `}</p>
              <p className="m-0">{`Indicator Control and `}</p>
              <p className="m-0">{`Monitor, `}</p>
              <p className="m-0">Stage 1 Aftercooler</p>
            </b>
          </div>
          <div className="absolute top-[0px] left-[620px] rounded-6xl bg-cornflowerblue w-[350px] h-[280px] overflow-hidden rounded-2xl bg-blue-800">
            <b className="absolute top-[calc(50%_-_90px)] left-[41px] inline-block w-[269px] h-[180px]">
              <p className="m-0">S-PLANT-TW-2127</p>
              <p className="m-0">Thermowell;</p>
              <p className="m-0">{`Indicator Control and `}</p>
              <p className="m-0">{`Monitor, `}</p>
              <p className="m-0">{`Stage 1 Aftercooler `}</p>
            </b>
          </div>
          <div className="absolute top-[0px] left-[1200px] rounded-6xl bg-cornflowerblue w-[350px] h-[280px] overflow-hidden rounded-2xl bg-blue-800">
            <b className="absolute top-[calc(50%_-_90px)] left-[58px]">
              <p className="m-0">S-PLANT-VSHH-2126</p>
              <p className="m-0">{`Vibration Switch High `}</p>
              <p className="m-0">{`Indicator Control and `}</p>
              <p className="m-0">{`Monitor, `}</p>
              <p className="m-0">Stage 1 Aftercooler</p>
            </b>
          </div>
        </div>
        
        <b
          className="absolute top-[calc(50%_-_347px)] left-[calc(50%_-_144px)] text-[28px] text-black cursor-pointer"

        >
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            S-PLANT-E-201-CO
          </p>
          <p className="m-0">Control and Monitor</p>
        </b>
        
      </div>
      
      <div className="absolute top-[18px] left-[1599px] rounded-[15px] bg-white flex flex-row items-center justify-start py-[5px] px-5 gap-[4px]">
        
      </div>
      
    </div>
    </div>
  );
};

export default SPlantE201CoControlAndMonitor;
