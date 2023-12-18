import React, {useState} from "react";

import NavbarMain from "../../Components/Navbar/NavbarMain";
import { Link } from "react-router-dom";
import SidebarEast from "../../Components/Sidebar/SidebarEast";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";


const EastAssets = () => {
  const [showSRegion, setShowSRegion] = useState(false);
  const [sRegionColor, setSRegionColor] = useState("bg-white");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handlePlusClick = () => {
    setShowDropdown(!showDropdown);
  };

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
        <div className="absolute top-[68px] left-[404px] rounded-31xl bg-white shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[100%] h-[998px] overflow-hidden text-7xl">
        {/* <div className="absolute top-0 left-0 m-4 cursor-pointer ml-[1780px]">
          <CiCirclePlus className="text-slate-950 font-bold text-[50px]"/>
        </div> */}
        <div className="absolute top-0 left-0 m-4 cursor-pointer">
          <Link to='/dashboardMain'><FaArrowLeft className="text-slate-500 font-lighter text-[30px]"/></Link>
        </div>
          <div className="absolute top-[118px] left-[39px] w-[1225px] h-[851px]">
            <b className="absolute top-[4%] left-[51.8%] text-9xl cursor-pointer text-[30px]">
                East Assets
            </b>
            <Link>
              <div className="absolute h-[6.46%] w-[11.76%] top-[17.74%] right-[67.1%] bottom-[75.79%] left-[21.14%] rounded-6xl flex flex-row items-center justify-center py-2 px-[15px] box-border">
                <div className="relative text-[23px]">A Region</div>
              </div>
            </Link>
            <Link>
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
              <div className="absolute h-[72.11%] w-[78.61%] top-[30.67%] right-[21.39%] bottom-[12.22%] left-[25%] flex flex-row flex-wrap items-center justify-center gap-[138px] text-center text-9xl text-white  bg-green-200 rounded-2xl">
                
                
                <div className="absolute cursor-pointer mt-[-510px] ml-[880px]">
                  <CiCirclePlus className="text-slate-500 font-bold text-[30px]"/>
                </div>
                <div className="relative rounded-6xl bg-cornflowerblue w-[240px] h-[94px] overflow-hidden shrink-0 rounded-2xl bg-blue-800">
                
                  <div className="absolute top-[calc(40%_-_32px)] left-[calc(50%_-_120px)] font-semibold w-[250px] text-[20px]">
                  <div className="absolute text-blue-800  cursor-pointer" onClick={handlePlusClick}>
                    <BsThreeDots className="font-lighter text-[30px] ml-1 hover:text-green-50"/>
                  </div>
                  <div className={`dropdown ${showDropdown ? 'visible' : 'hidden'}`} >
                    <p className="m-0 text-white whitespace-nowrap mt-3 cursor-pointer" onClick={() => setShowModal(true)}><MdDeleteOutline/></p>

                    {showModal ? (
                      <>
                      <div className="bg-slate-900">
                        <div
                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          <div className="relative my-6 mx-auto w-[520px]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                           
                              <div className="flex items-start justify-between p-5 ">
                                <h3 className="text-3xl font-semibold">
                                  Delete 
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                             
                              <div className="relative p-6 flex-auto">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                 Are you sure you want to delete?
                                </p>
                              </div>
              
                              <div className="flex items-center justify-end p-6">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-10" 
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  No
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Yes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>
                      </>
                    ) : null}


                    <p className="m-0 text-white whitespace-nowrap"><CiEdit/></p>
                    <p className="m-0 text-white whitespace-nowrap"><CiRead/></p>
                    <p className="m-0 text-white whitespace-nowrap mb-3"><IoIosAddCircle/></p>
                  </div>
                   
                    <p className="m-0 text-white whitespace-nowrap mt-3">{`S - ADMIN`}</p>
                    <p className="m-0 text-white  whitespace-nowrap mb-3">{`S - Adminstration`}</p>
                 
                  </div>
                </div>

                <div className="relative rounded-6xl bg-cornflowerblue w-[290px] h-[84px] overflow-hidden shrink-0 rounded-2xl bg-blue-800">
                  <div className="absolute top-[calc(50%_-_32px)] left-[calc(35%_-_75px)] font-semibold  w-[250px] text-[20px]">
                  <div >
                    <p className="m-0 text-white  whitespace-nowrap mt-3">{`S - FIELD`}</p>
                    <p className="m-0 text-white whitespace-nowrap mb-3">{`S Fields`}</p>
                  </div>
                  </div>
                </div>
                
                <div className="relative rounded-6xl bg-cornflowerblue w-[240px] h-[84px] overflow-hidden shrink-0  rounded-2xl bg-blue-800">
                  <div className="absolute top-[calc(30%_-_22px)] left-[calc(38%_-_98px)] font-semibold  w-[250px] text-[20px]">
                  <div>
                    <p className="m-0 text-white  whitespace-nowrap mt-3">{`S - GEN`}</p>
                    <p className="m-0 text-white  whitespace-nowrap mb-3">{`S General`}</p>
                  </div>
                  </div>
                </div>
                <div className="relative rounded-6xl bg-cornflowerblue w-[290px] h-[84px] overflow-hidden shrink-0  rounded-2xl bg-blue-800">
                  <div className="absolute top-[calc(30%_-_22px)] left-[calc(35%_-_86px)] font-semibold  w-[250px]  text-[20px]">
                    <div>
                    <p className="m-0 text-white  whitespace-nowrap mt-3">{`S - PIP`}</p>
                    <p className="m-0 text-white whitespace-nowrap mb-3">{`S Pipelines`}</p>    
                  </div>
                  </div>
                </div>
                <div
                  className="relative rounded-6xl bg-cornflowerblue w-[290px] h-[84px] overflow-hidden shrink-0 cursor-pointer  rounded-2xl bg-blue-800"
                >
                  <div className="absolute top-[calc(60%_-_52px)] left-[calc(40%_-_84px)] font-semibold  w-[250px] text-[20px]">
                  <Link to="/s-plant-facilities-assets">
                  <div>
                    <p className="m-0 text-white  whitespace-nowrap mt-3">{`S - PLANT`}</p>
                    <p className="m-0 text-white whitespace-nowrap mb-3">{`S Facilities`}</p> 
                </div>
                </Link>
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
