import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Feature() {
  return (
    <div className="h-screen w-full flex flex-row justify-start items-center gap-4">
      <section className="w-1/2 flex flex-col justify-start items-start gap-4">
        <h2 className="text-4xl md:text-5xl font-bold text-Text-Black font-inter">
          How?
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-Text-Black font-inter">
          Live Photograph
        </h2>

        <div className="font-poppins shadow-md border border-Text-Grey-Light rounded-xl p-6 w-full flex flex-col justify-start items-start mt-10">
          <p className="text-black font-bold">
            Quick Face Verification Guide in 4 Steps
          </p>
        </div>

        <Link href="/user">
          <button className="px-4 sm:px-6 py-3 font-poppins bg-blue shadow-md text-white hover:text-black rounded-lg focus:outline-none focus:ring focus:ring-blue-300">
            Continue
          </button>
        </Link>
      </section>

      {/* <section className="w-2/5 flex flex-row justify-center items-center gap-12">
        <div>
          <img className="" alt="Iphone pro black" src={ip} />
          <div className="">Correct Upload</div>
        </div>

        <div>
          <img className="" alt="Iphone pro black" src={ip} />
          <div className="">Correct Upload</div>
        </div>
      </section> */}
    </div>
  );
}
