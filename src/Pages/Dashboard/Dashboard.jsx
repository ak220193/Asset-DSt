import React from "react";

const Dashboard = () => {
  // const onRecentActivitiesTextClick = useCallback(() => {
  //   // Please sync "4" to the project
  // }, []);

  // const onSPLANTSATCOMCompressionTextClick = useCallback(() => {
  //   // Please sync "7" to the project
  // }, []);

  // const onFrameContainer2Click = useCallback(() => {
  //   // Please sync "7" to the project
  // }, []);

  return (

      <div className="absolute top-[98px] left-[404px] rounded-31xl bg-white shadow-[0px_0px_15px_2px_rgba(241,_180,_187,_0.8)] w-[1850px] h-[950px] overflow-hidden text-center text-white">
        <div className="absolute top-[44px] left-[1229px] w-6 h-6 overflow-hidden" />
        <div className="absolute h-[10.32%] w-[18.54%] top-[9.32%] right-[72.54%] bottom-[80.36%] left-[8.92%] rounded-6xl bg-palevioletred overflow-hidden text-9xl">
          <div className="absolute top-[calc(50%_-_20.5px)] left-[calc(50%_-_43.5px)] font-semibold text-slate-950">
            Plants
          </div>
        </div>
        <div
          className="absolute top-[274px] left-[47px] text-9xl font-semibold text-black cursor-pointer"
          //onClick={onRecentActivitiesTextClick}
        >
          Recent Activities
        </div>
        <div
          className="absolute top-[348px] left-[166px] font-medium text-black inline-block w-[416px] cursor-pointer"
          //onClick={onSPLANTSATCOMCompressionTextClick}
        >
          S-PLANT-SAT-COM Compression
        </div>
        <div className="absolute top-[413px] left-[166px] font-medium text-black inline-block w-[416px]">
          S-PLANT-SAT-COM Compression
        </div>
        <div
          className="absolute top-[343px] left-[998px] rounded-6xl bg-lightpink flex flex-row items-center justify-center py-[5px] px-5 cursor-pointer"
          //onClick={onFrameContainer2Click}
        >
          <div className="relative">Edit</div>
        </div>
        <div className="absolute top-[408px] left-[998px] rounded-6xl bg-lightpink flex flex-row items-center justify-center py-[5px] px-5">
          <div className="relative">Edit</div>
        </div>
      </div>
    
  );
};

export default Dashboard;
