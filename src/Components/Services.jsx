import { FaCode, FaPaintBrush, FaHashtag, FaBriefcase, FaRobot, FaHandshake  } from "react-icons/fa";

const Services = () => {
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
      desc: "Automate Your Business with a WhatsApp Bot – Inquire Now! Heroku Billing Made Easy ",
      icon: <FaRobot size={28} />,
    },
    {
      title: "Social Media Growth",
      desc: "Grow Your Audience Faster – Ask Us How! From 0 to 10K Followers – We’ve Got the Formula Stop Scrolling, Start Growing – Boost Your Accounts Now!",
      icon: <FaHashtag   size={28} />,
    },
    {
      title: "Freelance Work",
      desc: "Need a Tech Guru? Hire Our Freelancers! On-Demand Developers & Designers – Book Yours.",
      icon: <FaBriefcase  size={28} />,
    },
    {
      title: "Influencer Marketing",
      desc: "Go Viral with the Right Influencers – Launch Your Campaign! From Nano to Mega-Influencers – We’ve Got Your Audience. Influence = Results. Let’s Prove It.",
      icon: <FaHandshake  size={28} />,
    },
  ];

  return (
    <div className="mt-20 px- pb-20">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-[#ff0088] to-[#ff4d6d] p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="bg-gray-900 p-6 rounded-2xl text-white flex flex-col gap-4">
              <div className="bg-[#ff0088] p-3 rounded-full shadow-md w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
              <button className="mt-3 bg-[#ff0088] px-4 py-2 cursor-pointer rounded-lg font-bold hover:bg-[#ff4d6d] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
