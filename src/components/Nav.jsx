import { Link } from "react-router-dom";
import {
  SparklesIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Nav = () => {
  const links = [
    { name: "ပင်မ စာမျက်နာ", link: "/" },
    { name: "Project အကြောင်း", link: "/about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* LOGO */}
        <div className="flex items-center gap-2 text-xl cursor-pointer">
          <SparklesIcon className="w-7 h-7 text-blue-600" />
          <a href="/"><span className="font-bold"><span className="text-blue-600">အိမ်မက်</span> အဘိဓာန်</span></a>
        </div>

        {/* Menu Icon */}
        <div
          className="w-7 h-7 absolute right-8 top-5 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all bg-white duration-500 ease-in 
          ${ isOpen ? "top-12" : "top-[-490px]" }`}
        >
          {links.map((link,index) => (
            <li key={index} className="font-semibold my-7 md:my-0 md:ml-8 hover:text-blue-600">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
