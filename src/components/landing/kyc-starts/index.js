import React from "react";
import Link from "next/link";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { landingData } from "../../../../public/const/constants";

export default function KYCStarts() {
  return (
    <div className="flex min-h-screen w-full items-center sm:items-start sm:pt-[6rem] sm:justify-between max-sm:flex-col justify-start font-medium lg:px-[8rem] sm:px-[4rem]">
      <div className="flex justify-center items-start flex-col lg:w-3/5 sm:w-2/3 z-10">
        <h2 className="text-9xl tracking-wider font-semibold lineUp text-Text-Black max-md:">
          KYC
        </h2>
        <h2 className="text-7xl tracking-wider font-semibold lineUp text-Text-Black max-md:text-5xl">
          starts here.
        </h2>
        <p className="text-justify font-normal text-Text-Grey-Light mt-[1rem] text-2xl">
          Complete .
        </p>
        <div className="flex justify-center items-center z-10 sm:hidden w-full mt-4">
          <img
            src="https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg"
            height={50}
            width={50}
            className=" text-white bg-white"
            alt="Logo"
          />
        </div>
        <div className="grid sm:grid-cols-2 mt-[1.5rem] ">
          {landingData.map((item, index) => (
            <li key={index} className="flex justify-start items-center gap-2">
              {item}
              {/* <IoIosCheckmarkCircleOutline size={30} /> */}
            </li>
          ))}
        </div>
        <div className="max-lg:w-full flex text-semi-bold text-xl lg:gap-10 mt-10 md:flex-row flex-col ">
          <Link href="/" className="w-full max-sm:justify-center flex">
            <button className="text-white bg-blue tracking-wide h-14 w-72 md:w-52 font-normal rounded-md ">
              Online KYC
            </button>
          </Link>
          <Link href="/" className="w-full max-sm:justify-center flex">
            <button className="text-blue tracking-wide h-14 w-72 md:w-52 font-normal rounded-md ">
              Compare Cards
              {/* <FaArrowRightLong size={30} className="ml-2" /> */}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center  lg:w-2/5 sm:w-1/3 max-sm:h-[25vh] z-10 max-sm:hidden">
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
