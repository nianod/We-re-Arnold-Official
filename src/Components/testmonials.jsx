import React from "react";

const Testmonials = () => {
  const testimonies = [
    {
      name: "John Doe",
      residence: "Philippines",
      image: "/download (1).jpg",
      quote:
        "I had the privilege of working with Arnold and can confidently attest to their exceptional potential and dedication to excellence.",
      rank: "CEO, Glucose Company",
      rate: "✰✰✰✰✰",
    },
    {
      name: "Jane Smith",
      residence: "Kenya",
      image: "/download (1).jpg",
      quote:
        "Arnold consistently demonstrates professionalism and innovation in every project we’ve collaborated on.",
      rank: "CTO, Vision Tech",
      rate: "✰✰✰✰✰",
    },
  ];

  return (
    <div className="mt-10">
        <h4 className="text-xl underline text-green-500 text-center font-bold">Testimonials</h4>
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap gap-8 p-4">
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className="w-80 shadow-lg rounded-xl p-6 bg-[#1b0e48]"
          >
            <img
              src={testimony.image}
              alt={testimony.name}
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />
            <b className="text-white block text-center mt-2">{testimony.name}</b>
            <p className="text-sm text-gray-400 mt-2">{testimony.quote}</p>
            <i className="block text-right text-gray-500 mt-2">{testimony.rank}</i>
            <div className="text-center mt-2 text-yellow-500">
              {testimony.rate}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Testmonials;
