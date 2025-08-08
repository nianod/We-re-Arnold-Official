import { FaPhone, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const navContents = {
  image: "public/pic1.png",
  title: "We're Arnold's Tech",
};

const Header = () => {
  return (
    <div className="top-0 z-auto fixed w-full">
      <div className="flex  justify-between gap-1 p-3 bg-transparent bg-opacity-50 text-[#6b57d2] font-bold border-b border-gray-400">
        <div className="flex items-center gap-2 text-xl">
          <img
            src={navContents.image}
            className="rounded-full h-10 -w-10"
            alt="Arnold"
          />
          <Link to="/">
          <button  className="cursor-pointer">{navContents.title}</button>
          </Link>
        </div>
        <div className="text-white flex gap-4">
          <button className="flex items-center gap-2 border-gray-600 border font-semibold px-2 rounded p-1 cursor-pointer hover:bg-blue-800 transition">
             Contact Us <FaPhone />
          </button>
          <button className="text-white border  p-1 rounded px-3 border-gray-600 cursor-pointer hover:bg-blue-800 transition"
            
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
