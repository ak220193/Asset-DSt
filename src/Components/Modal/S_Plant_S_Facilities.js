import React, {useState} from "react";

const S_Plant_S_Facilities = () => {
    // const [showEditModal, setShowEditModal] = useState(false);
    // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);


  return (
    <div>
        {showAddModal ? (
                      <>
                      <div className="bg-slate-900">
                        <div
                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          <div className="relative my-6 mx-auto w-[800px]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                           
                              <div className="flex items-start justify-between p-5 ">
                                <h3 className="text-3xl font-semibold">
                                  Create 
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowAddModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                               <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-[-700px]">
                                  Location:
                                </label>
                                <input
                                  type="text"
                                  id="location"
                                  name="location"
                                  //value={location}
                                  //onChange={(e) => setName(e.target.value)}
                                  className="mt-1 ml-[-50px] p-2 border border-gray-300 rounded-md w-[700px]"
                                />
                              </div>
                              <div className="mb-4 mt-5">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-[-690px]">
                                  Description:
                                </label>
                                <input
                                  type="text"
                                  id="description"
                                  name="description"
                                  //value={description}
                                  //onChange={(e) => setName(e.target.value)}
                                  className="mt-1 ml-[-50px] p-2 border border-gray-300 rounded-md w-[700px]"
                                />
                              </div>
                              <div className="mb-4 mt-5">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-[-715px]">
                                  Parent:
                                </label>
                                <input
                                  type="text"
                                  id="parent"
                                  name="parent"
                                  //value={parent}
                                  //onChange={(e) => setName(e.target.value)}
                                  className="mt-1 ml-[-50px] p-2 border border-gray-300 rounded-md w-[700px]"
                                />
                              </div>
                              <div className="mb-4 mt-5">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-[-715px]">
                                  System:
                                </label>
                                <input
                                  type="text"
                                  id="system"
                                  name="system"
                                  //value={system}
                                  //onChange={(e) => setName(e.target.value)}
                                  className="mt-1 ml-[-50px] p-2 border border-gray-300 rounded-md w-[700px]"
                                />
                              </div>
                              <div className="mb-4 mt-5">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-[-715px]">
                                  Level:
                                </label>
                                <input
                                  type="text"
                                  id="level"
                                  name="level"
                                  //value={level}
                                  //onChange={(e) => setName(e.target.value)}
                                  className="mt-1 ml-[-50px] p-2 border border-gray-300 rounded-md w-[700px]"
                                />
                              </div>
              
                              <div className="flex items-center justify-end p-6">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-10" 
                                  type="button"
                                  onClick={() => setShowAddModal(false)}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowAddModal(false)}
                                >
                                  Create
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </div>
                      </>
                    ) : null}
    </div>
  )
}

export default  S_Plant_S_Facilities;