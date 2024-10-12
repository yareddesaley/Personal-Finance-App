import React from "react";
import payment_gateway_icon from "../assets/payment-gateway.png";
import right_arrow from "../assets/right-arrow.png";
const Pots = () => {
  return (
    <div>
      <div className=" bg-white rounded-xl">
        <div className="flex justify-between mb-5">
          {" "}
          <p className="font-bold text-xl">Pots</p>{" "}
          <div className="">
            <span className="text-gray-600">See Details</span>
            {/* <img src={right_arrow} alt="right-arrow" className="w-4 h-4" /> */}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[50%] md:w-[40%] p-5 rounded-xl bg-purple-100 flex gap-6 items-center ">
            <img
              src={payment_gateway_icon}
              alt="payment gteway icon"
              className="h-10 hidden md:flex"
            />
            <div>
              {" "}
              <p className="text-gray-600">Total Saved</p>
              <span className="font-bold text-2xl">$850.00</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-green-900"></div>
                <div>
                  <p className="text-gray-600">Savings</p>
                  <span className="font-bold">$159</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-gray-800"></div>
                <div>
                  <p className="text-gray-600">Concert Ticket</p>
                  <span className="font-bold">$110</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-green-400"></div>
                <div>
                  <p className="text-gray-600">Gift</p>
                  <span className="font-bold">$40</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-orange-300"></div>
                <div>
                  <p className="text-gray-600">New laptop</p>
                  <span className="font-bold">$10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Pots;
