import React from "react";
import { FaCog, FaUser } from "react-icons/fa";

const NavbarMain = () => {
    return (
        <div className="absolute top-[20px] w-[1208px] h-12 text-lg text-darkslategray-100 font-nunito-sans ml-[1000px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[14px] bg-white shadow-[0px_6px_58px_rgba(196,_203,_214,_0.1)]" />
            
            <input
                type="text"
                placeholder="Search"
                className="absolute top-[calc(50% - 13px)] left-[8.88%] px-2 h-8 rounded border-none outline-none bg-slate-200 w-[360px]"
                
            />
            
            <div className="absolute top-[calc(50% - 13px)] right-[8.88%] cursor-pointer">
                <FaCog size={20} />
            </div>
            <div className="absolute top-[calc(50% - 13px)] right-[4%] cursor-pointer">
                <FaUser size={20} />
            </div>
        </div>
    );
};

export default NavbarMain;
