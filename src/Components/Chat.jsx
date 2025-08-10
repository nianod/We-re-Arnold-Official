import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
      title="Chat with our Team"
      href="https://wa.link/bgkzwq" 
      target="_blank"
      rel="noopener noreferrer"
      className="box fixed bottom-5 shadow-xl left-5 bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingButton;
