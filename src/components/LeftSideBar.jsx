import React from "react";
import home_icon from "../assets/home.png";
import budget_icon from "../assets/budget.png";
import transaction_icon from "../assets/transaction.png";

const LeftSideBar = () => {
  return (
    <div className="bg-gray-400 w-[90%] lg:w-[20%] lg:h-[1080px] lg:mt-10 lg:ml-10 hidden lg:flex">
      <div className="flex flex-col justify-start gap-8 text-gray-900 font-extrabold pt-10">
        <h1 className="font-bold text-xl pl-8">finance</h1>
        <div className="flex flex-col  ">
          <div className="flex gap-3  h-14 items-center pl-8 mr-3 pr-28   hover:rounded-r-xl hover:bg-white  hover:text-black hover:cursor-pointer ">
            <img src={home_icon} alt="home-icon" className="h-8" />
            <span>Overview</span>
          </div>
          <div className="flex gap-3  h-14 items-center pl-8 mr-3  hover:rounded-r-xl hover:bg-white  hover:text-black hover:cursor-pointer">
            <img
              src={transaction_icon}
              alt="transaction-icon"
              className="h-8"
            />
            <span>Transaction</span>
          </div>
          <div className="flex gap-3  h-14 items-center pl-8 mr-3    hover:rounded-r-xl hover:bg-white  hover:text-black hover:cursor-pointer">
            <img src={budget_icon} alt="budget-icon" className="h-8" />
            <span>Budgets</span>
          </div>
          <div className="flex gap-3  h-14 items-center pl-8 mr-3    hover:rounded-r-xl hover:bg-white  hover:text-black hover:cursor-pointer">
            <img src={budget_icon} alt="budget-icon" className="h-8" />
            <span>Pots</span>
          </div>
          <div className="flex gap-3  h-14 items-center pl-8 mr-3 pr-8   hover:rounded-r-xl hover:bg-white  hover:text-black hover:cursor-pointer">
            <img src={budget_icon} alt="budget-icon" className="h-8" />
            <span>Recurring Files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
