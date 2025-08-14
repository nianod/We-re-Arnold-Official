import { FaPhone, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideModal from "./SideModal";

const navContents = {
  image: "/pic1.png",
  title: "We're Arnold's Tech",
};

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="top-0 z-20 fixed w-full">
      <div className="flex justify-between gap-1 p-3 backdrop-blur-md bg-opacity-50 text-[#6b57d2] font-bold border-b border-gray-400">
        <div className="flex items-center gap-2 text-xl">
          <img
            src={navContents.image}
            className="rounded-full h-10 -w-10"
            alt="Arnold"
          />
          <Link to="/">
            <button className="cursor-pointer">{navContents.title}</button>
          </Link>
        </div>
        <div className="text-white flex gap-4">
          <Link
            to="/contact"
            className="cursor-pointer box relative sm:px-4 px-4 flex items-center font-semibold border border-gray-600 overflow-hidden group rounded-xl"
          >
            <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 rounded transition-transform duration-500"></span>
            <span className="flex items-center relative gap-2 text-white group-hover:text-white transition-colors duration-400">
              <span className="hidden sm:inline">contact us</span>
              <FaPhone />
            </span>
          </Link>

          <button
            onClick={() => setSideMenu(true)}
            className={`cursor-pointer box relative px-4  flex items-center font-semibold border border-gray-600 overflow-hidden group rounded-xl`}
          >
            <span className="  absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 rounded transition-transform duration-500"></span>
            <span className="flex  items-center relative gap-2 text-white group-hover:text-white transition-colors duration-400">
              <FaBars />
            </span>
          </button>
        </div>
      </div>
      <SideModal sideMenu={sideMenu} setSideMenu={setSideMenu} />
    </div>
  );
};

export default Header;
