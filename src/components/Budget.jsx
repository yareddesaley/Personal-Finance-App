import React from "react";
import Circle from "./Circle";
const Budget = () => {
  return (
    <div className="">
      <div className="bg-white mb-10 lg:mb-0  p-5 md:mr-0 rounded-xl mt-[680px]  md:mt-0 ">
        <div className="flex justify-between mb-5">
          {" "}
          <p className="font-bold text-xl">Budgets</p>{" "}
          <span className="text-gray-600">See Details</span>
        </div>
        <div className="flex flex-col gap-5  mr-5 lg:mr-0 items-center lg:flex-row lg:justify-between ">
          <Circle />
          <div className="flex flex-row lg:flex-col gap-1 ml-3 lg:ml-0 lg:gap-5">
            <div className="flex gap-2">
              <div className="w-1 h-14 lg:h-10 bg-gray-600"></div>
              <div>
                <p className="text-gray-600">Entertainent</p>
                <span>$50</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1 h-14 lg:h-10 bg-yellow-500"></div>
              <div>
                <p className="text-gray-600">Bills</p>
                <span>$750</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1 h-14 lg:h-10 bg-red-600"></div>
              <div>
                <p className="text-gray-600">Dinning Out</p>
                <span>$75</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1 h-14 lg:h-10 bg-green-600"></div>
              <div>
                <p className="text-gray-600">Personal Care</p>
                <span>$100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-8 bg-white rounded-xl absolute top-[450px] mt-[1400px] w-[90%]  lg:w-[38%]">
        <div className="flex justify-between  p-5 ">
          {" "}
          <p className="font-bold text-xl">Recurring Bills</p>
          <span className="text-gray-600">See Details</span>
        </div>
        <div className="bg-purple-200  flex justify-between px-5 py-3 border-l-green-800 border-l-4 mb-3 mx-5">
          <span className="text-gray-600">Paid Bills</span>
          <span className="font-bold">$190</span>
        </div>
        <div className="bg-purple-200  flex justify-between px-5 py-3 border-l-yellow-500 border-l-4 mb-3 mx-5">
          <span className="text-gray-600">Total Upcomming</span>
          <span className="font-bold">$190</span>
        </div>
        <div className="bg-purple-200  flex justify-between px-5 py-3 border-l-green-800 border-l-4 mb-3 mx-5">
          <span className="text-gray-600">Dua Scan</span>
          <span className="font-bold">$190</span>
        </div>
      </div>
    </div>
  );
};

export default Budget;
