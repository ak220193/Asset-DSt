import React, {useState} from "react";

import NavbarMain from "../../Components/Navbar/NavbarMain";
import { Link } from "react-router-dom";
import SidebarEast from "../../Components/Sidebar/SidebarEast";
import { CiCirclePlus } from "react-icons/ci";

const EastAssets = () => {
  const [showSRegion, setShowSRegion] = useState(false);
  const [sRegionColor, setSRegionColor] = useState("bg-white");

  const handleSRegionClick = () => {
    setShowSRegion(!showSRegion);
    setSRegionColor((prevColor) =>
      prevColor === "bg-white" ? "bg-green-200 rounded-2xl" : "bg-white"
    );
  };

  return (
    <div className="w-full">
      <SidebarEast/>
      <NavbarMain/>
      <div className="absolute bg-mistyrose w-full h-[1070px] overflow-hidden text-left text-[16px] text-black  left-0">
        <div className="absolute top-[68px] left-[404px] rounded-31xl bg-white shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[1870px] h-[998px] overflow-hidden text-7xl">
        <div className="absolute top-0 left-0 m-4 cursor-pointer ml-[1780px]">
          <CiCirclePlus className="text-slate-950 font-bold text-[50px]"/>
        </div>
          <div className="absolute top-[118px] left-[39px] w-[1225px] h-[851px]">
            <b className="absolute top-[4%] left-[51.8%] text-9xl cursor-pointer text-[30px]">
                East Assets
            </b>
            <Link to="/east-assets/a-region">
              <div className="absolute h-[6.46%] w-[11.76%] top-[17.74%] right-[67.1%] bottom-[75.79%] left-[21.14%] rounded-6xl flex flex-row items-center justify-center py-2 px-[15px] box-border">
                <div className="relative text-[23px]">A Region</div>
              </div>
            </Link>
            <Link to="/east-assets/e-region">
              <div className="absolute h-[6.46%] w-[11.43%] top-[17.74%] right-[43.76%] bottom-[75.79%] left-[54.82%] rounded-6xl flex flex-row items-center justify-center py-2 px-[15px] box-border">
                <div className="relative text-[23px]">E Region</div>
              </div>
            </Link>
            
            <div
              onClick={handleSRegionClick}
              className={`absolute h-[6.46%] w-[11.43%] top-[17.74%] right-[43.76%] bottom-[75.79%] left-[94.82%] rounded-6xl flex flex-row items-center justify-center py-2 px-[15px] box-border cursor-pointer text-black  ${sRegionColor}`}
            >
              <div className="relative text-[23px]">S Region</div>
            </div>
            {showSRegion && (
              <div className="absolute h-[60.11%] w-[78.61%] top-[34.67%] right-[21.39%] bottom-[12.22%] left-[25%] flex flex-row flex-wrap items-center justify-center gap-[138px] text-center text-9xl text-white  bg-green-200 rounded-2xl">
                <div className="relative rounded-6xl bg-cornflowerblue w-[240px] h-[84px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(40%_-_32px)] left-[calc(50%_-_120px)] font-semibold w-[250px] mt-5 text-[20px]">
                    <div className="bg-blue-400 rounded-2xl">
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap">{`S - ADMIN`}</p>
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap mt-3">{`S - Adminstration`}</p>
                  </div>
                  </div>
                </div>

                <div className="relative rounded-6xl bg-cornflowerblue w-[290px] h-[84px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_75px)] font-semibold  w-[250px] mt-4 text-[20px]">
                  <div className="bg-blue-400">
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap">{`S - FIELD`}</p>
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap mt-3">{`S Fields`}</p>
                  </div>
                  </div>
                </div>
                
                <div className="relative rounded-6xl bg-cornflowerblue w-[240px] h-[84px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(30%_-_22px)] left-[calc(50%_-_98px)] font-semibold  w-[250px] mt-5 text-[20px]">
                  <div className="bg-blue-400">
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap">{`S - GEN`}</p>
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap mt-3">{`S General`}</p>
                  </div>
                  </div>
                </div>
                <div className="relative rounded-6xl bg-cornflowerblue w-[290px] h-[84px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(30%_-_22px)] left-[calc(50%_-_86px)] font-semibold  w-[250px] mt-5 text-[20px]">
                    <div className="bg-blue-400">
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap">{`S - PIP`}</p>
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap mt-3">{`S Pipelines`}</p>    
                  </div>
                  </div>
                </div>
                <div
                  className="relative rounded-6xl bg-cornflowerblue w-[290px] h-[84px] overflow-hidden shrink-0 cursor-pointer"
                >
                  <div className="absolute top-[calc(60%_-_52px)] left-[calc(40%_-_84px)] font-semibold  w-[250px] text-[20px]">
                  <div className="bg-blue-400">
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap">{`S - PLANT`}</p>
                    <p className="m-0 text-white bg-blue-400 whitespace-nowrap mt-3">{`S Facilities`}</p> 
                </div>
                </div>
              </div>
        
              </div>
            )}
            </div>
        </div>
        <div className="absolute top-[654px] left-[393px] w-[100px] h-[100px] overflow-hidden" />
      </div>
    </div>
  );
};

export default EastAssets;
