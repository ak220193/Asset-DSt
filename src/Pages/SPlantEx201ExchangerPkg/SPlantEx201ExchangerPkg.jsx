import React from "react";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import SidebarSplantExchangerPkg from "../../Components/Sidebar/SidebarSPlantExchangerPkg";
import { Link } from "react-router-dom";

const SplantEx201ExchangePkg = () => {

  return (
    <div>
        <NavbarMain/>
        <SidebarSplantExchangerPkg/>
    <div className="relative bg-lavenderblush w-full h-[1060px] overflow-hidden text-left text-9xl text-black font-poppins">
      <div className="absolute top-[98px] left-[388px] rounded-31xl bg-white shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[1852px] h-[961px] overflow-hidden text-center">
        <div className="absolute top-[120px] left-6 rounded-6xl bg-darkcyan-200 box-border w-[1805px] h-[863px] border-[4px] border-solid border-steelblue bg-green-100" />
        <b
          className="absolute top-[calc(50%_-_347px)] left-[calc(55%_-_143px)] cursor-pointer text-[25px]"

        >
          <p className="[margin-block-start:0] [margin-block-end:5px]">
            S-PLANT-EX-201
          </p>
          <p className="m-0">Exchanger Package</p>
        </b>

        <div className="absolute top-[250px] left-[329px] w-[1364px] h-[690px] overflow-y-auto flex flex-row flex-wrap items-start justify-center py-[5px] px-0 box-border gap-[80px] text-white font-caladea">
          <div className="relative rounded-6xl bg-deepskyblue w-[379px] h-[339px] overflow-hidden shrink-0 rounded-2xl bg-blue-800">
            <b className="absolute top-[calc(50%_-_53.5px)] left-[calc(60%_-_143.5px)] rounded-2xl text-[20px]">
              <p className="[margin-block-start:0] [margin-block-end:5px] text-white">
                S-PLANT-E-001
              </p>
              <p className="[margin-block-start:0] [margin-block-end:5px] text-white">{`Engine Jacket and `}</p>
              <p className="m-0 text-white">Auxillary Water Cooler</p>
            </b>
          </div>
          <div className="relative rounded-6xl bg-deepskyblue w-[379px] h-[339px] overflow-hidden shrink-0 rounded-2xl bg-blue-800">
            <b className="absolute top-[37px] left-[113px] text-[20px]">
              <p className="[margin-block-start:0] [margin-block-end:5px] text-white">
                S-PLANT-E-201
              </p>
              <p className="m-0 text-white">Stage 1 Aftercooler</p>
            </b>
            <Link to='/s-plant-E201-CocontrolAndMonitor'>
            <div
              className="absolute top-[155px] left-[calc(50%_-_144.5px)] rounded-6xl bg-cornflowerblue w-[290px] h-[151px] overflow-hidden cursor-pointer rounded-2xl bg-blue-300"
            >
              <b className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_87px)] text-[20px]">
                <p className="[margin-block-start:0] [margin-block-end:5px] text-black">
                  S-PLANT-E-201-CO
                </p>
                <p className="m-0 text-black">Control and Monitor</p>
              </b>
            </div>
            </Link>
          </div>
          <div className="relative rounded-6xl bg-deepskyblue w-[379px] h-[339px] overflow-hidden shrink-0 rounded-2xl bg-blue-800 text-[20px]">
            <b className="absolute top-[37px] left-[102px]">
              <p className="[margin-block-start:0] [margin-block-end:5px] text-white">
                S-PLANT-E-202
              </p>
              <p className="m-0 text-white">Stage 2 Aftercooler</p>
            </b>
            <div className="absolute top-[155px] left-[calc(50%_-_144.5px)] rounded-6xl bg-cornflowerblue w-[290px] h-[151px] overflow-hidden bg-blue-300 rounded-2xl">
              <b className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_97px)]">
                <p className="[margin-block-start:0] [margin-block-end:5px] text-black">
                  S-PLANT-E-202-CO
                </p>
                <p className="m-0 text-black">Control and Monitor</p>
              </b>
            </div>
          </div>
          <div className="relative rounded-6xl bg-deepskyblue w-[379px] h-[339px] overflow-hidden shrink-0 rounded-2xl bg-blue-800 text-[20px]">
            <b className="absolute top-[37px] left-[102px]">
              <p className="[margin-block-start:0] [margin-block-end:5px] text-white">
                S-PLANT-E-203
              </p>
              <p className="m-0 text-white">Stage 3 Aftercooler</p>
            </b>
            <div className="absolute top-[155px] left-[calc(50%_-_144.5px)] rounded-6xl bg-cornflowerblue w-[290px] h-[151px] overflow-hidden bg-blue-300 rounded-2xl">
              <b className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_97px)]">
                <p className="[margin-block-start:0] [margin-block-end:5px] text-black">
                  S-PLANT-E-203-CO
                </p>
                <p className="m-0 text-black">Control and Monitor</p>
              </b>
            </div>
          </div>
          <div className="relative rounded-6xl bg-deepskyblue w-[379px] h-[339px] overflow-hidden shrink-0 bg-blue-800 rounded-2xl text-[20px]">
            <b className="absolute top-[37px] left-[112px]">
              <p className="[margin-block-start:0] [margin-block-end:5px] text-white">
                S-PLANT-E-204
              </p>
              <p className="m-0 text-white">Stage 4 Aftercooler</p>
            </b>
            <div className="absolute top-[155px] left-[calc(50%_-_144.5px)] rounded-6xl bg-cornflowerblue w-[290px] h-[151px] overflow-hidden bg-blue-300 rounded-2xl">
              <b className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_97px)]">
                <p className="[margin-block-start:0] [margin-block-end:5px] text-black">
                  S-PLANT-E-204-CO
                </p>
                <p className="m-0 text-black">Control and Monitor</p>
              </b>
            </div>
          </div>
        </div>

      </div>
      
      <div className="absolute top-[18px] left-[1599px] rounded-[15px] bg-white flex flex-row items-center justify-start py-[5px] px-5 gap-[4px]">

      </div>
      
    </div>
    </div>
  );
};

export default SplantEx201ExchangePkg;
