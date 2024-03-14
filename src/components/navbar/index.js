import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center ml-8">
      <Image src={logo} alt="logo" height={50} width={50} />
      <p className="text-blue font-poppins">Trustflow</p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-black">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black`}
          >
            <Link href={`${nav.link}`} />
            {nav.title}
          </li>
        ))}
      </ul>

      {/* mobile view */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          className="w-[28px] h-[28px]  object-contain cursor-pointer"
          value={toggle}
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* displaying stuff inside the hamburger conditionally only if its open*/}

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <Link href={`${nav.link}`} />
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
