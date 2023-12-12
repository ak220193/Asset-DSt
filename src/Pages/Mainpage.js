import { useCallback } from "react";

const Mainpage = () => {
  const onRecentActivitiesTextClick = useCallback(() => {
    // Please sync "4" to the project
  }, []);

  const onSPLANTSATCOMCompressionTextClick = useCallback(() => {
   
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    
  }, []);

  return (
    <div className="relative bg-lavenderblush w-full h-[1117px] overflow-hidden text-left text-5xl text-teal font-poppins">
      <img
        className="absolute top-[-730px] left-[0px] w-[1728px] h-[1117px] object-cover opacity-[0]"
        alt=""
        src="/pexels-photo-by-ken--tomita@2x.png"
      />
      <div className="absolute top-[calc(50%_-_1021.5px)] left-[390px] rounded-[20px] bg-white w-[946px] h-[582px] overflow-hidden opacity-[0] text-xl">
        <div className="absolute top-[243px] left-[611px] w-[274px] h-[34.99px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.01em] font-semibold inline-block w-[200px] h-7">
            Name or E-Mail
          </div>
          <img
            className="absolute top-[34.99px] left-[0px] w-[274px] h-0"
            alt=""
            src="/line-3.svg"
          />
        </div>
        <div className="absolute top-[307.99px] left-[611px] w-[274px] h-[34.99px]">
          <div className="absolute top-[0px] left-[1px] tracking-[0.01em] font-semibold inline-block w-[105px] h-7">
            Password
          </div>
          <img
            className="absolute top-[34.99px] left-[0px] w-[274px] h-0"
            alt=""
            src="/line-31.svg"
          />
          <img
            className="absolute top-[4.01px] left-[243px] w-6 h-6 overflow-hidden"
            alt=""
            src="/mdieyeoff.svg"
          />
        </div>
        <b className="absolute top-[152px] left-[642px] text-5xl [text-decoration:underline] text-mediumaquamarine">
          Login Your Profile
        </b>
        <div className="absolute top-[397.99px] left-[667px] w-[162px] h-[38px] text-lg text-darkslategray-200 font-calibri">
          <div className="absolute top-[30px] left-[0px] rounded-[50%] bg-gray [filter:blur(10px)] w-[162px] h-2" />
          <div className="absolute top-[0px] left-[1px] rounded-31xl bg-aquamarine w-[161px] h-8 opacity-[0.5] mix-blend-normal" />
          <div className="absolute top-[5px] left-[54px] inline-block w-[54px] h-[19px]">
            Sign up
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_207px)] left-[25px] w-[523px] h-[314px] overflow-hidden"
          alt=""
          src="/undraw-login-re-4vu2-1.svg"
        />
      </div>
      <div className="absolute top-[98px] left-[404px] rounded-31xl bg-white shadow-[0px_0px_15px_2px_rgba(241,_180,_187,_0.8)] w-[1300px] h-[998px] overflow-hidden text-center text-white">
        <img
          className="absolute top-[0px] left-[462px] w-[838px] h-[821.09px] object-cover opacity-[0.2]"
          alt=""
          src="/wave-illustration--image-png-1@2x.png"
        />
        <div className="absolute top-[44px] left-[1229px] w-6 h-6 overflow-hidden" />
        <div className="absolute h-[10.32%] w-[18.54%] top-[9.32%] right-[72.54%] bottom-[80.36%] left-[8.92%] rounded-6xl bg-palevioletred overflow-hidden text-9xl">
          <div className="absolute top-[calc(50%_-_20.5px)] left-[calc(50%_-_43.5px)] font-semibold">
            Plants
          </div>
        </div>
        <div
          className="absolute top-[274px] left-[47px] text-9xl font-semibold text-black cursor-pointer"
          onClick={onRecentActivitiesTextClick}
        >
          Recent Activities
        </div>
        <div
          className="absolute top-[348px] left-[166px] font-medium text-black inline-block w-[416px] cursor-pointer"
          onClick={onSPLANTSATCOMCompressionTextClick}
        >
          S-PLANT-SAT-COM Compression
        </div>
        <div className="absolute top-[413px] left-[166px] font-medium text-black inline-block w-[416px]">
          S-PLANT-SAT-COM Compression
        </div>
        <img
          className="absolute top-[351px] left-[86px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/basileditoutline.svg"
        />
        <img
          className="absolute top-[416px] left-[86px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/basileditoutline1.svg"
        />
        <div
          className="absolute top-[343px] left-[998px] rounded-6xl bg-lightpink flex flex-row items-center justify-center py-[5px] px-5 cursor-pointer"
          onClick={onFrameContainer2Click}
        >
          <div className="relative">Edit</div>
        </div>
        <div className="absolute top-[408px] left-[998px] rounded-6xl bg-lightpink flex flex-row items-center justify-center py-[5px] px-5">
          <div className="relative">Edit</div>
        </div>
        <img
          className="absolute top-[128px] left-[398px] w-[34px] h-[34px] overflow-hidden"
          alt=""
          src="/zondiconsaddoutline.svg"
        />
      </div>
      <div className="absolute top-[20px] left-[calc(50%_-_304px)] w-[608px] h-12 text-lg text-darkslategray-100 font-nunito-sans">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[14px] bg-white shadow-[0px_6px_58px_rgba(196,_203,_214,_0.1)]" />
        <img
          className="absolute top-[12px] left-[20px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconamoonsearch.svg"
        />
        <div className="absolute top-[calc(50%_-_13px)] left-[8.88%]">
          Search
        </div>
        <img
          className="absolute top-[9px] left-[559px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/letsiconsfilterbig.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_-_538.5px)] left-[29px] rounded-31xl bg-white shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[340px] h-[1076px] overflow-hidden text-black font-calibri">
        <img
          className="absolute top-[653px] left-[0px] w-[340px] h-[423px] object-cover opacity-[0.5]"
          alt=""
          src="/abstract-colorful-vector-background-2@2x.png"
        />
        <div className="absolute top-[18px] left-[calc(50%_-_109px)] text-[32px] font-semibold font-poppins [background:linear-gradient(91.6deg,_#ff0091_9.72%,_#e95793_45.72%,_#610c9f_93.29%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          GVG - Plant
        </div>
        <img
          className="absolute top-[71.11px] left-[calc(50%_-_57.89px)] w-[115.77px] h-[5.77px]"
          alt=""
          src="/line-4.svg"
        />
        <div className="absolute top-[992px] left-[78px]">Logout</div>
        <div className="absolute top-[131px] left-[79px]">Dashboard</div>
        <div className="absolute top-[933px] left-[78px]">Settings</div>
        <div className="absolute top-[191px] left-[79px]">User Page</div>
        <img
          className="absolute top-[127px] left-[38px] w-[33px] h-[33px] overflow-hidden"
          alt=""
          src="/typcnhome.svg"
        />
        <img
          className="absolute top-[930px] left-[38px] w-[33px] h-[33px] overflow-hidden"
          alt=""
          src="/fluentsettings24filled.svg"
        />
        <img
          className="absolute top-[990px] left-[38px] w-[33px] h-[33px] overflow-hidden"
          alt=""
          src="/heroiconsoutlinelogout.svg"
        />
        <img
          className="absolute top-[188px] left-[38px] w-[33px] h-[33px] overflow-hidden"
          alt=""
          src="/icbaselineaccountcircle.svg"
        />
        <div className="absolute top-[285px] left-[calc(50%_-_70px)] rounded-31xl bg-deeppink flex flex-row items-center justify-start py-2.5 px-5 gap-[9px] text-center text-xl text-white font-poppins">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/feimport.svg"
          />
          <div className="relative font-medium">Import</div>
        </div>
        <div className="absolute top-[364px] left-[calc(50%_-_75px)] rounded-31xl bg-palevioletred flex flex-row items-center justify-start py-2.5 px-[23px] gap-[9px] text-center text-xl text-white font-poppins">
          <img
            className="relative w-[34px] h-[34px] overflow-hidden shrink-0"
            alt=""
            src="/phexportbold.svg"
          />
          <div className="relative font-medium">Export</div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
