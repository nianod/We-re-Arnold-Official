import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  const [modal, setModal] = useState(false);
  
  return (
    <div className="fixed bottom-5 left-5 z-50">
      <div 
        onMouseEnter={() => setModal(true)}
        onMouseLeave={() => setModal(false)}
        className="relative w-16 h-16"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-spin-slow opacity-75"></div>
 
        <a
          href="https://wa.link/bgkzwq"
          target="_blank"
          rel="noopener noreferrer"
          className="box relative flex items-center justify-center w-full h-full bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 z-10"
        >
          <FaWhatsapp size={28} />
        </a>
        {modal && (
          <div className="absolute left-full ml-3 bottom-1/2 translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap">
            Chat with our Team
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingButton;