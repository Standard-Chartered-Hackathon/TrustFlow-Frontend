import React from "react";
import { ip } from "@/assets/Logo.svg";
import Link from "next/link";

export default function Feature() {
  return (
    <div className="h-screen w-full flex flex-row justify-around items-center gap-4">
      <section className="w-3/5 flex flex-col justify-start items-start gap-4">
        <h2 className="text-7xl tracking-wide font-semibold text-Text-Black max-md:text-5xl">
          How?
        </h2>
        <h2 className="text-7xl tracking-wide font-semibold text-Text-Black max-md:text-4xl">
          Live Photograph  
        </h2>

        <div className="text-[#979daa] shadow-md border border-Text-Grey-Light rounded-xl p-6 w-full flex flex-col justify-start items-start mt-10">
          <p className="text-black tracking-[-0.10px]">
            Quick Face Verification Guide in 4 Steps
          </p>
          <p className=" tracking-[-0.10px]">Snap &amp; Align:</p>
          <p className=" tracking-[-0.10px]">
            Click a live photo aligning your face in the frame. Ensure good
            lighting for accuracy.
            
          </p>

          <p className="tracking-[-0.10px]">Quick Review:</p>

          <p className=" tracking-[-0.10px]">
            Review the photo and retake if needed for a clear shot.
          </p>

          <p className="tracking-[-0.10px]">Let Tech Work:</p>

          <p className="tracking-[-0.10px]">
            Our tech analyzes facial features. Smile you&#39;re almost there!
          </p>

          <p className="tracking-[-0.10px]">Access Granted:</p>

          <p className=" tracking-[-0.10px]">
            Immediate feedback! Enjoy seamless access upon successful face
            verification. Ready to dive
          </p>
        </div>

        <div className="max-lg:w-full flex text-semi-bold text-xl lg:gap-10 mt-10 md:flex-row flex-col ">
          <Link href="/" className="w-full max-sm:justify-center flex">
            <button className="text-white bg-blue tracking-wide h-14 w-72 md:w-52 font-normal rounded-md ">
              Continue
            </button>
         
          </Link>
        </div>
      </section>

      <section className="w-2/5 flex flex-row justify-center items-center gap-12">
        <div>
          <img className="" alt="Iphone pro black" src={ip} />
          <div className="">Correct Upload</div>
        </div>

        <div>
          <img className="" alt="Iphone pro black" src={ip} />
          <div className="">Correct Upload</div>
        </div>
      </section>
    </div>
  );
}
