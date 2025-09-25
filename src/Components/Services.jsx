import { FaCode, FaPaintBrush, FaHashtag, FaBriefcase, FaRobot, FaHandshake } from "react-icons/fa";
import { useTheme } from "./Theme";
const Services = () => {
  const { theme } = useTheme()
   const services = [
    {
      title: "Web/Software Dev",
      desc: "Need a Custom App or Website? Let’s Code It! Turn Your Vision Into a Website Sleek, Fast, and Functional.",
      icon: <FaCode size={28} />,
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, user-friendly designs that keep people coming back. From wireframes to full prototypes. Make Your Brand Unforgettable",
      icon: <FaPaintBrush size={28} />,
    },
    {
      title: "WhatsApp Bots/Heroku Billing",
      desc: "Automate Your Business with a Furnished WhatsApp Bot – Inquire Now! Heroku Billing guaranteed Made Easy ",
      icon: <FaRobot size={28} />,
    },
    {
      title: "Social Media Growth",
      desc: "Grow Your Audience Faster – Ask Us How! From 0 to 10K Followers – We’ve Got the Formula Stop Scrolling, Start Growing – Boost Your Accounts Now!",
      icon: <FaHashtag   size={28} />,
    },
    {
      title: "Freelance Work",
      desc: "Need a Tech Guru? Hire Our passionate, Certified & Experienced Freelancers! On-Demand Developers, Designers & CyberSecurity experts– Book Yours.",
      icon: <FaBriefcase  size={28} />,
    },
    {
      title: "Influencer Marketing",
      desc: "Go Viral with the Right Influencers – Launch Your Campaign! From Nano to Mega-Influencers – We’ve Got Your Audience. Influence = Results. Let’s Prove It.",
      icon: <FaHandshake  size={28} />,
    },
  ];


  return (
    <div
      data-aos="flip-down"
      className={`mt-20 pb-20 overflow-x-hidden ${
        theme === "dark" ? "bg-[#060234]" : "bg-white"
      }`}
    >
      <h2 className="text-3xl font-bold text-center text-green-400 underline">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 p-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="hover:scale-105 translate-x-1.5 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div
              className={`box-orange-green p-6 rounded-2xl flex flex-col gap-4 ${
                theme === "dark"
                  ? "bg-[#03031c] text-gray-300"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <div
                className={`p-3 rounded-full shadow-md w-fit ${
                  theme === "dark" ? "bg-[#ff0088]" : "bg-pink-500"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p>{service.desc}</p>
              <a
                href="https://wa.link/tvgx9p"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 px-4 py-2 cursor-pointer flex justify-center rounded-lg font-bold transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#030a92] hover:bg-[#060c77] text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
