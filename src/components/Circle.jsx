import React from "react";

const Circle = () => {
  return (
    <div className="relative w-48 h-48 items-center flex  justify-center ">
      {/* <div className="w-48 h-48 rounded-full border-2 absolute  "></div>
    <div className="w-36 h-36 rounded-full border-2 absolute "></div>
    <div className="w-28 h-28 rounded-full border-2 absolute "></div> */}
      <div className="w-48 h-48 rounded-full border-2 absolute ">
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(342deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(420deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(470deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-red-500"
          style={{
            transform: "rotate(550deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-gray-500"
          style={{
            transform: "rotate(270deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-green-500"
          style={{
            transform: "rotate(610deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
      </div>
      <div className="w-44 h-44 rounded-full border-2 absolute ">
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(342deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(420deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(470deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-red-500"
          style={{
            transform: "rotate(550deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-gray-500"
          style={{
            transform: "rotate(270deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-green-500"
          style={{
            transform: "rotate(610deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
      </div>
      <div className="w-40 h-40 rounded-full border-2 absolute ">
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(342deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(420deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-yellow-500"
          style={{
            transform: "rotate(470deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-red-500"
          style={{
            transform: "rotate(550deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-gray-500"
          style={{
            transform: "rotate(270deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full border-8 border-green-500"
          style={{
            transform: "rotate(610deg)", // 70% + 15% + 10% + 5% = 342 degrees
            clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
          }}
        ></div>
      </div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className=" flex flex-col items-center">
          <span className="text-2xl font-bold">$338</span>{" "}
          <p className="text-xs text-gray-600">of $975 limit</p>
        </span>
      </div>
    </div>
  );
};

export default Circle;
