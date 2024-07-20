import React from 'react';
import logo from "../assets/logo.png";
import { MdOutlineKeyboardArrowDown} from "react-icons/md";

const LandingPage = () => {
  return (
    <div
      className="w-full fixed md:sticky top-0 z-20  transition-all duration-300 font-circular bg-blue-100"
      // style={"transform: {translateY(0px)}; filter: {drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 2px) drop-shadow(rgba(0, 0, 0, 0.06) 0px 1px 1px)};"}
    >
      <div className="w-full bg-universal/15 flex items-center gap-4 justify-between md:justify-center py-4 px-4 font-circular">
        <h1 className="font-medium text-neutral-800 text-xs md:text-lg flex items-center gap-3">
          Navigate your ideal career path with tailored expert advice{" "}
          <button className=" text-blue-500 md:mx-2 font-medium text-nowrap text-universal capitalize md:block hidden">
            contact expert
          </button>
        </h1>
        <button className="md:mx-2 font-semibold text-nowrap text-sm text-universal capitalize block md:hidden">
          contact expert
        </button>
      </div>
      <div className="bg-white shadow-md py-4 flex px-4 xl:px-12 justify-between">
    <div className="flex items-center">
        {/* <!-- Logo --> */}
        <a href="/">
            <div className="max-w-[125px] w-full">
                <img className="w-full" src={logo} alt="logoimg" />
            </div>
        </a>
        {/* <!-- Button --> */}
        <div className=" ml-6 hidden md:flex items-center gap-1 px-[18px] py-[8px] bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium text-base text-nowrap">
            Courses
            <span>
                <MdOutlineKeyboardArrowDown size={25} />
            </span>
        </div>
    </div>
    {/* <!-- Navigation Links --> */}
    <div className="hidden md:flex justify-end">
        <ul className="flex items-center space-x-4">
            <li><a href="#refer" >Refer & Earn</a></li>
            <li><a href="#reso" >Resources</a></li>
            <li><a href="#about" >About Us</a></li>
            <li className="ml-6 hidden md:flex items-center gap-1 px-[18px] py-[8px] bg-gray-300 hover:bg-gray-500 rounded-md text-black font-medium text-base text-nowrap"
            ><a href="#login" >Login</a></li>
            <li className=" ml-6 hidden md:flex items-center gap-1 px-[18px] py-[8px] bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium text-base text-nowrap">
              <a href="#no" className="hover:text-">
              Try for free</a>
            </li>
        </ul>
    </div>
</div>

    </div>
  );
};

export default LandingPage;
