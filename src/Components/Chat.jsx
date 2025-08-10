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
        {/* Gradient Ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-spin-slow opacity-75"></div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.link/bgkzwq"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-full h-full bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 z-10"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Hover Modal */}
        {modal && (
          <div className="absolute bottom-20 left-full ml-2 translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap shadow-lg transition-all duration-300 opacity-100 translate-x-0 w-[180px]">
            <p className="mb-2">Chat with our Team</p>
            <div className="flex justify-around">
              <img src="/download.jpeg" alt="user" className="rounded-full h-10 w-10" />
              <img src="/user.png" alt="user" className="rounded-full h-10 w-10" />
            </div>
            <p className="text-green-500 font-semibold mt-2">
              <span className="text-[10px]">🟢</span> 2 users Online
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingButton;
