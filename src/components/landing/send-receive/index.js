import React from "react";
import {
  landingData,
  money,
  sendReceive,
} from "../../../../public/const/constants";
import Link from "next/link";

export default function SendReceive() {
  return (
    <div
      className="flex min-h-[60vh] bg-blueBg w-full items-center justify-center font-medium lg:px-[8rem] md:px-[4rem] p-2"
      // style={{
      //   backgroundImage: "linear-gradient(to left, #DEE4F5, #EFF7FF",
      // }}
    >
      <div className="flex lg:justify-center justify-center items-center lg:items-start flex-col lg:w-3/5 z-10">
        <h2 className="text-5xl tracking-wider font-semibold lineUp text-Text-Black max-md:text-3xl">
          Send & receive
        </h2>
        <h2 className="text-5xl tracking-wider font-semibold lineUp text-Text-Black max-md:text-3xl">
          money instantly
        </h2>
        <p className="text-justify font-normal text-Text-Grey-Light mt-[1.5rem] text-sm sm:w-2/3">
          lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>

        <div className="grid grid-cols-1 gap-1 mt-[2rem] ">
          {money.map((item, index) => (
            <li key={index} className="flex justify-start items-center gap-2">
              {item}
              {/* <IoIosCheckmarkCircleOutline size={30} /> */}
            </li>
          ))}
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-1 mt-[1.5rem] lg:w-2/5 sm:w-1/3 gap-5 ">
        {sendReceive.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-72 bg-white p-2"
          >
            <div className="flex justify-center items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
            <div>{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
