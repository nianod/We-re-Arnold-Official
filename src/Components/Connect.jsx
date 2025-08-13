import { Link } from "react-router-dom"
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa"
const contactSites = [
    {label: "FaceB..." , Url: "https://web.facebook.com/profile.php?id=100074411341844", icon: <FaFacebook />},
    {label: "Whats..." , Url: "https://wa.link/ft2zsu", icon: <FaWhatsapp />},
    {label: "GitHu..." , Url: "https://github.com/nianod", icon: <FaGithub />},
    {label: "Linked.." , Url: "www.linkedin.com/in/arnold-wanza-b51654330", icon: <FaLinkedin />},
    {label: "Twitter" , Url: "https://x.com/Itsarnold001", icon: <FaTwitter />},
    {label: "TikTok" , Url: "https://www.tiktok.com/@its._arnold_", icon: <FaTiktok />},
    {label: "YouTube" , Url: "https://www.youtube.com/@_arnold._.001", icon: <FaYoutube />},
    {label: "Contact" , Url: "#", icon: <FaEnvelope />}
]

const Connect = () => {
  return (
    <div className="contact mt-20 border-gray-500 border-t border-b p-6">
      <h1 className="text-center text-2xl font-bold text-green-600">
        Connect with Us
      </h1>
      <h2 className="text-center text-[15px] font-semibold text-gray-400 mt-4">
        Follow, Connect & Reach to us
      </h2>
      <div className="text-white flex items-center justify-center gap-4 mt-7">
        {contactSites.map((contact, index) => (
          <div
            key={index}
            className="box border border-gray-700 justify-center flex gap-2 p-2 rounded-xl h-20 max-w-[70px] bg-[#04043c] 
             transition-all duration-300 hover:scale-110 hover:z-10"
          >
            {contact.label === "Contact" ? (
              <Link to="/contact">
                <p className="flex justify-center flex-col items-center text-2xl">
                  {contact.icon}
                  <span className="text-[15px] mt-2">{contact.label}</span>
                </p>
              </Link>
            ) : (
              <a href={contact.Url} target="_blank" rel="noopener noreferrer">
                <p className="flex justify-center flex-col items-center text-2xl">
                  {contact.icon}
                  <span className="text-[15px] mt-2">{contact.label}</span>
                </p>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect
