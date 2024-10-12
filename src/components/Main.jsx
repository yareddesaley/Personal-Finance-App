import React, { useContext, useState } from "react";

import Transactions from "./Transactions";
import Pots from "./Pots";
import Budget from "./Budget";
import hamburger from "../assets/hamburger.png";
import home_icon from "../assets/home.png";
import budget_icon from "../assets/budget.png";
import transaction_icon from "../assets/transaction.png";
import { myContext } from "../App";

const Main = () => {
  const { show, setShow } = useContext(myContext);
  return (
    <div className="w-full lg:w-[75%] mt-10  pl-10  lg:h-[1080px] h-[1500] bg-gray-200 overflow-x-clip">
      {!show ? (
        <img
          src={hamburger}
          alt="hamburger"
          className="h-10 lg:hidden"
          onClick={() => setShow(!show)}
        />
      ) : (
        <div
          onClick={() => setShow(!show)}
          className="font-bold text-3xl lg:hidden"
        >
          X
        </div>
      )}
      {show ? (
        <div>
          <div className="bg-gray-400 w-[90%]">
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
        </div>
      ) : null}
      <div className="pt-10 flex flex-col gap-12">
        <span className="font-bold text-2xl">Overview</span>
        <div className="w-[100%] flex justify-start gap-5 flex-wrap relative">
          <div className="w-[90%] lg:w-[31%] bg-white p-5 rounded-xl hover:bg-gray-600 hover:text-white cursor-pointer">
            <p>Current Balance</p>
            <span className="font-bold text-2xl">$4836.00</span>
          </div>
          <div className="w-[90%] lg:w-[31%] bg-white p-5 rounded-xl hover:bg-gray-600 hover:text-white cursor-pointer">
            <p>Income</p>
            <span className="font-bold text-2xl">$3814.25</span>
          </div>
          <div className="w-[90%] lg:w-[31%] bg-white p-5 rounded-xl hover:bg-gray-600 hover:text-white cursor-pointer">
            <p>Expenses</p>
            <span className="font-bold text-2xl">$1750.50</span>
          </div>
          <div className="w-[90%]  lg:w-[58%] h-[10%] bg-white p-5 rounded-xl">
            <Pots />
          </div>
          <div className="w-[90%] lg:w-[38%] ">
            <Budget />
          </div>
          <div>
            <div className="p-5 rounded-xl bg-white lg:w-[58%] w-[90%] -left-1 absolute  top-80 mt-[125%] lg:mt-8">
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
