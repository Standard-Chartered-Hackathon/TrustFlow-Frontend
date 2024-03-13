import React from "react";
import Link from "next/link";

import { jsonData } from "../../../../public/const/constants";

export default function OneApp() {
  return (
    <div className="flex min-h-screen w-full items-center md:items-start md:pt-[2rem] md:justify-between max-md:flex-col justify-start font-medium lg:px-[8rem] md:px-[4rem]">
      <div className="flex justify-center items-start flex-col lg:w-3/5 sm:w-full z-10">
        <h2 className="text-7xl tracking-wide font-semibold text-Text-Black max-md:text-5xl">
          One app.
        </h2>
        <h2 className="text-7xl tracking-wide font-semibold text-Text-Black max-md:text-4xl">
          One banking.
        </h2>

        <div className="flex justify-center items-center z-10 md:hidden w-full mt-8">
          <img
            src="https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg"
            height={50}
            width={50}
            className=" text-white bg-white"
            alt="Logo"
          />
        </div>
        <div className="grid sm:grid-cols-2 mt-10 gap-4 sm:gap-8 justify-center w-full items-center">
          {jsonData.map((item, index) => (
            <div
              key={index}
              className=" flex h-48 text-justify flex-col items-start justify-start gap-2 border-2 border-Text-Grey-Light rounded-lg p-4"
            >
              <span>{item.icon}</span>
              <div className="">
                <h3 className="text-xl tracking-wide font-semibold ">
                  {item.title}
                </h3>
                <h3 className="text-xl tracking-wide font-semibold ">
                  {item.subtitle}
                </h3>
              </div>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center flex-col items-center lg:w-1/3 max-sm:h-[25vh] z-10 max-lg:hidden">
        <img
          src="https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg"
          height={200}
          width={200}
          className="mb-6 text-white bg-white"
          alt="Logo"
        />
      </div>
    </div>
  );
}
