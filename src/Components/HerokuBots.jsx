import React from "react";

const HerokuBots = () => {
  const heroku = [
    {
      label: "Heroku Billing Services",
      img1: "/Screenshot 2025-08-12 230510.png",
      img2: "/Screenshot 2025-08-12 230700.png"
    },
    {
      label: "Premium Whatsapp Bots",
      img1: "/WhatsApp Image 2025-08-13 at 17.41.36_5907d4c6.jpg",
      img2: "/Screenshot 2025-08-13 175254.png"
    }
  ];

  return (
    <>
    <div className="p-5">
    <h2 className="text-2xl text-green-500 underline font-bold text-center">Heroku Services</h2>
    <div data-aos="flip-up" className=" flex justify-center">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-5" >
        {heroku.map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-4 flex flex-col items-center box-orange-green"
          >
            <h3 className="font-bold mb-4 text-green-500">{item.label}</h3>
            <div className="flex content">
              <img
                src={item.img1}
                alt={`${item.label} image 1`}
                className="w-70 h-120 object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default HerokuBots;
