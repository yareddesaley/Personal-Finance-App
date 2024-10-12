import React from "react";
import { userData } from "../userData";

const Transactions = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-5 ">
          {" "}
          <p className="font-bold text-xl">Transactions</p>{" "}
          <span>View all</span>
        </div>
        {userData.map((user) => {
          return (
            <div key={user.id}>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src={user.profile}
                    alt="profile pic"
                    className="h-10 rounded-full"
                  />
                  <span className="font-bold">{user.name}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-bold">{user.transac}</div>
                  <span className="text-xs">{user.date}</span>
                </div>
              </div>
              <hr className="border-t-2 border-gray-200 w-full mb-5 mt-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
