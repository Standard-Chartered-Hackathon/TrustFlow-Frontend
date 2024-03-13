import Link from "next/link";
import Image from "next/image";
import { logo } from "../assets";

export default function Login() {
  return (
    <>
      <div className="hidden md:flex flex-row h-screen">
        <div
          className="flex flex-col h-screen w-3/5 justify-center items-center relative"
          style={{
            backgroundImage: `linear-gradient(180deg, #0575E6, #02298A)`,
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-[266px] h-[72.14px] object-contain mix-blend-multiply"
          />
          <h1 className="font-bold text-white text-7xl tracking-wide mt-2">
            Trustflow
          </h1>

          <p className="text-white font-semibold mt-4">
            The most trusting and potential bank to put money and trust.
          </p>
        </div>

        <div className="flex flex-col w-full p-6 lg:max-w-xl justify-center items-center">
          <Image
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <h1 className="text-3xl font-bold text-center mt-4">Hello Again!</h1>
          <h2 className="text-xl font-semibold text-center mt-2">
            Welcome back
          </h2>
          <form className="mt-6">
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-semibold">
                Account number
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-full shadow-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                style={{ minWidth: "300px" }}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-full shadow-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                style={{ minWidth: "300px" }}
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
              <button className="w-full max-w-[300px] px-4 py-4 tracking-wide text-white bg-blue rounded-full focus:outline-none">
                Login
              </button>
              <Link href="/" className="text-xs mt-2 hover:underline">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden max-md:flex flex-col h-screen">
        <div
          className="flex flex-col h-screen justify-center items-center relative"
          style={{
            backgroundImage: `linear-gradient(180deg, #0575E6, #02298A)`,
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-[266px] h-[72.14px] object-contain mix-blend-multiply"
          />
          <div className="flex flex-col w-full p-6 lg:max-w-xl justify-center items-center">
            <h1 className="text-3xl font-bold text-center mt-4 text-white">
              Hello Again!
            </h1>
            <h2 className="text-xl font-semibold text-center mt-2 text-white">
              Welcome back
            </h2>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white"
                >
                  Account number
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-full focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  style={{ minWidth: "300px" }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-full focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  style={{ minWidth: "300px" }}
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-8">
                <button className="w-full max-w-[300px] px-4 py-2.5 tracking-wide text-white bg-blue rounded-full focus:outline-none">
                  Login
                </button>
                <Link
                  href="/"
                  className="text-xs mt-2 hover:underline text-white"
                >
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
