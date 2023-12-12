import { useCallback } from "react";


const New = () => {
  const onFrameContainerClick = useCallback(() => {
   
  }, []);

  const onFrameContainer5Click = useCallback(() => {

  }, []);

  const onAssetsTextClick = useCallback(() => {
  
  }, []);

  return (
    <div className="relative bg-lavenderblush w-full h-[1117px] overflow-hidden text-left text-9xl text-white font-poppins">
      <div className="absolute top-[98px] left-[404px] rounded-31xl bg-white shadow-[0px_0px_15px_2px_rgba(241,_180,_187,_0.8)] w-[1300px] h-[998px] overflow-hidden text-center">
        <img
          className="absolute top-[0px] left-[462px] w-[838px] h-[821.09px] object-cover opacity-[0.3]"
          alt=""
          src="/wave-illustration--image-png-1@2x.png"
        />
        <div className="absolute top-[128px] left-[66px] w-[1190px] h-[455px]">
          <div className="relative rounded-6xl bg-aliceblue box-border w-[1190px] h-[455px] border-[2px] border-solid border-mediumslateblue">
            <div className="absolute top-[128px] left-[66px] bg-white w-[1190px] h-[455px]" />
          </div>
          <div className="absolute top-[117px] left-[236px] w-[718px] h-72">
            <div
              className="absolute top-[0px] left-[19px] rounded-6xl bg-darkslateblue w-[290px] h-[124px] overflow-hidden hidden cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_47px)] font-semibold">
                <p className="m-0">{`East `}</p>
                <p className="m-0">Assets</p>
              </div>
            </div>
            <div className="absolute top-[0px] left-[409px] rounded-6xl bg-cornflowerblue w-[290px] h-[124px] overflow-hidden">
              <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_47px)] font-semibold">
                <p className="m-0">{`West `}</p>
                <p className="m-0">Assets</p>
              </div>
            </div>
            <div className="absolute top-[164px] left-[19px] rounded-6xl bg-cornflowerblue w-[290px] h-[124px] overflow-hidden">
              <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_47px)] font-semibold">
                <p className="m-0">North</p>
                <p className="m-0">Assets</p>
              </div>
            </div>
            <div className="absolute top-[164px] left-[409px] rounded-6xl bg-cornflowerblue w-[290px] h-[124px] overflow-hidden">
              <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_47px)] font-semibold">
                <p className="m-0">{`South `}</p>
                <p className="m-0">Assets</p>
              </div>
            </div>
            <div className="absolute top-[0px] left-[19px] w-[343px] h-[124px] hidden">
              <div className="absolute h-full w-[84.55%] top-[0%] right-[15.45%] bottom-[0%] left-[0%] rounded-6xl bg-cornflowerblue overflow-hidden">
                <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_47px)] font-semibold">
                  <p className="m-0">{`East `}</p>
                  <p className="m-0">Assets</p>
                </div>
              </div>
              <img
                className="absolute h-[25.81%] w-[9.33%] top-[37.1%] right-[3.21%] bottom-[37.1%] left-[87.46%] max-w-full overflow-hidden max-h-full opacity-[0]"
                alt=""
                src="/component-2.svg"
              />
            </div>
            <div
              className="absolute h-[43.06%] w-[40.39%] top-[0%] right-[56.96%] bottom-[56.94%] left-[2.65%] rounded-6xl bg-cornflowerblue overflow-hidden cursor-pointer"
              onClick={onFrameContainer5Click}
            >
              <div className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_47px)] font-semibold">
                <p className="m-0">{`East `}</p>
                <p className="m-0">Assets</p>
              </div>
            </div>
          </div>
          <b
            className="absolute top-[31px] left-[calc(50%_-_73px)] text-[36px] text-black text-left cursor-pointer"
            onClick={onAssetsTextClick}
          >
            Assets
          </b>
        </div>
        <img
          className="absolute top-[48px] left-[1227px] w-[29px] h-[29px] overflow-hidden"
          alt=""
          src="/mingcutefilterline.svg"
        />
      </div>
      <img
        className="absolute top-[263px] left-[1537px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/new.svg"
      />
      <div className="absolute top-[20px] left-[calc(50%_-_304px)] w-[608px] h-12 text-[16px] text-darkslategray font-nunito-sans">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[14px] bg-white shadow-[0px_6px_58px_rgba(196,_203,_214,_0.1)]" />
        <img
          className="absolute h-3/6 w-[3.95%] top-[25%] right-[92.93%] bottom-[25%] left-[3.13%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icngeneralsearch.svg"
        />
        <div className="absolute top-[calc(50%_-_11px)] left-[8.88%]">
          Search
        </div>
        <img
          className="absolute top-[9px] left-[559px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/letsiconsfilterbig.svg"
        />
      </div>
      <div className="absolute top-[18px] left-[1599px] rounded-[15px] bg-white flex flex-row items-center justify-start py-[5px] px-5 gap-[4px]">
        <img
          className="relative w-[43px] h-[43px] overflow-hidden shrink-0"
          alt=""
          src="/icbaselineaccountcircle.svg"
        />
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/uilsetting.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_-_538.5px)] left-[29px] rounded-31xl bg-white shadow-[4px_10px_15px_rgba(241,_180,_187,_0.8)] w-[340px] h-[1076px] overflow-hidden text-5xl text-black">
        <img
          className="absolute top-[653px] left-[0px] w-[340px] h-[423px] object-cover opacity-[0.5]"
          alt=""
          src="/abstract-colorful-vector-background-1@2x.png"
        />
        <div className="absolute top-[18px] left-[calc(50%_-_109px)] text-[32px] font-semibold [background:linear-gradient(91.6deg,_#ff0091_9.72%,_#e95793_45.72%,_#610c9f_93.29%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          GVG - Plant
        </div>
        <img
          className="absolute top-[67.11px] left-[calc(50%_-_57.89px)] w-[115.77px] h-[5.77px]"
          alt=""
          src="/line-4.svg"
        />
        <b className="absolute top-[92px] left-[calc(50%_-_18px)] text-[27px] [text-decoration:underline] font-times-new-roman">
          Path
        </b>
        <img
          className="absolute top-[94px] left-[111px] w-7 h-7 overflow-hidden"
          alt=""
          src="/gameiconspathdistance.svg"
        />
        <img
          className="absolute top-[148px] left-[14px] w-8 h-8 overflow-hidden"
          alt=""
          src="/evaarrowupfill.svg"
        />
        <div className="absolute top-[146px] left-[54px]">Assets</div>
        <div className="absolute top-[225px] left-[calc(50%_-_70px)] rounded-31xl bg-darkcyan flex flex-row items-center justify-start py-2.5 px-5 gap-[9px] text-center text-xl text-white">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/feimport.svg"
          />
          <div className="relative font-medium">Import</div>
        </div>
        <div className="absolute top-[304px] left-[calc(50%_-_75px)] rounded-31xl bg-mediumaquamarine flex flex-row items-center justify-start py-2.5 px-[23px] gap-[9px] text-center text-xl text-white">
          <img
            className="relative w-[34px] h-[34px] overflow-hidden shrink-0"
            alt=""
            src="/phexportbold.svg"
          />
          <div className="relative font-medium">Export</div>
        </div>
        <div className="absolute top-[992px] left-[78px] font-calibri">
          Logout
        </div>
        <div className="absolute top-[933px] left-[78px] font-calibri">
          Settings
        </div>
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
      </div>
    </div>
  );
};

export default New;
