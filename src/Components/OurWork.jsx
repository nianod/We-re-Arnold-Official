import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const moreProjects = {
  url: "https://github.com/nianod?tab=repositories"
}
let handOnProjects = [
  {
    label: "Online Rental Management", 
    source: "https://github.com/nianod/Stack-Rent/", 
    live: "https://online-renting-six.vercel.app",
    photo: "Screenshot 2025-05-21 153717.png",
    name: "Online Rental Management"
  },
   {
    label: "Chatbot",
    source: "https://github.com/nianod/Express-Ai-Chatbot", 
    live: "https://express-ai-chatbot.vercel.app/",
    photo: "chatbot.jpeg",
    name: "AI Chatbot"
  },
  {
    label: "Youtube Video Downloader", 
    source: "https://github.com/nianod/Youtube-downloader", 
    live: "https://youtube-video-downloader-two-delta.vercel.app/",
    photo: "images.jpeg",
    name: "Youtube Video Downloader"
  },
  {
    label: "Github profile Finder", 
    source: "https://github.com/nianod/Github-Profile-Finder", 
    live: "https://github-profile-finder-smoky.vercel.app/",
    photo: "Screenshot 2025-06-13 101018.png",
    name: "Github profile Finder"
  },
  {
    label: "Airbnb looks", 
    source: "https://github.com/nianod/Airbnb-clone", 
    live: "https://airbnb-look-alike.vercel.app//",
    photo: "Screenshot 2025-06-15 132700.png",
    name: "Airbnb look alike"
  },
  {
    label: "Car shelf", 
    source: "https://github.com/nianod/Milele-Car-Shelf", 
    live: "https://milele-car-shelf.vercel.app/",
    photo: "Screenshot 2025-06-18 002149.png",
    name: "Car shelf"
  },
  {
    label: "Chat app", 
    source: "https://github.com/nianod/Supabase-Chat-APP", 
    live: "https://github.com/nianod/Supabase-Chat-APP",
    photo: "Screenshot 2025-08-01 231103.png",
    name: "Chat App"
  }
  
]
const OurWork = () => {
 
  return (
    <>

<div>
   <h1 className='text-2xl underline text-green-600 text-center font-bold mt-15'>Our Featured Projects</h1>
<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 px-6 py-10 "> 
  {handOnProjects.map((item, index) => (
    <div
      key={index}
      className=" rounded-md  bg-black shadow-lg hover:scale-105 transition box-orange-green"
    > <div className='content p-3 rounded'>
      <img
        src={item.photo}
        alt={`Screenshot of ${item.label}`}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <p className='text-white text-center' > {item.name} </p>
      <h2 className="font-bold text-lg text-center mb-2">{item.label}</h2>

      <div className="flex justify-between">
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-700"
        >
          View demo
        </a>
        <a
          href={item.source}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 px-3 py-1 rounded text-white hover:bg-gray-800"
        >
          Source Code
        </a>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
<div className="pb-25 flex justify-center" data-aos= "flip-right"> 
    <Link to={moreProjects.url} target='_blank'>
      <button className="text-[white] px-2 rounded-xl p-[3px] font-bold cursor-pointer beet hover:scale-110 transition-transform duration-200">
        More Projects
      </button>
    </Link>
  </div>
   </> 
  )
}

export default OurWork
