import React from "react";
import Link from "next/link";
import Image from "next/image";
import { captureImageGuide } from "../../constants";
import { correct, correcticon, incorrect, incorrecticon } from "../../assets";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Photo() {
  return (
    <div className="min-h-screen w-full flex justify-start items-center gap-4 px-4 md:px-32 ">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-bold text-Text-Black font-inter">
          Take a photo
        </h2>

        <div className="font-poppins shadow-md bg-lightBg rounded-xl p-6 w-full flex flex-col justify-start items-start mt-6">
          <p className="text-black font-bold">
            Capture a Perfect Photo in 3 Simple Steps:
          </p>
          {captureImageGuide.map((step, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-black font-semibold">{step.step}</h3>
              <p className="text-black">
                <span className="mr-2">•</span>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-64 mx-12 mt-6 flex flex-row justify-center items-center gap-12 sm:hidden">
          <div className="flex flex-col items-center">
            <Image src={correct} alt="correct" />
            <Image src={correcticon} alt="correcticon" />
            <div className="font-poppins text-sm md:text-xl">
              Correct Upload
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={incorrect} alt="incorrect" />
            <Image src={incorrecticon} alt="incorrecticon" />
            <div className="font-poppins text-sm md:text-xl">
              Incorrect Upload
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/user">
            <button className="px-4 sm:px-6 py-3 mt-6 font-poppins bg-blue shadow-md text-white hover:text-black rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
              Submit your KYC
            </button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 flex flex-row justify-end items-center gap-12 max-sm:hidden">
        <div className="flex flex-col items-center">
          <Image src={correct} alt="correct" />
          <Image src={correcticon} alt="correcticon" />
          <div className="font-poppins">Correct Upload</div>
        </div>

        <div className="flex flex-col items-center">
          <Image src={incorrect} alt="incorrect" />
          <Image src={incorrecticon} alt="incorrecticon" />
          <div className="font-poppins">Incorrect Upload</div>
        </div>
      </div>
    </div>
  );
}
