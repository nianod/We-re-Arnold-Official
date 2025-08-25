import React from "react";

const Testmonials = () => {
  const testimonies = [
    {
      name: "John Doe",
      residence: "Philippines",
      image: "/download (1).jpg",
      quote: "I had the privilege of working with Arnold and can confidently attest to their exceptional potential and dedication to excellence.",
      rank: "CEO, Glucose Company",
      rate: "✰✰✰✰✰"
    },
  ]
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 bg-white text-black">
      {testimonies.map((index, testimony) => (
        <div key={index}>
            <img src={testimony.image} alt={testimony.name} />
            <b>{testimony.name}</b>
            <p>{testimony.quote}</p>
            <i className="justify-end flex">{testimony.rank}</i>
        </div>
      ))}
    </div>
  )
};

export default Testmonials;
