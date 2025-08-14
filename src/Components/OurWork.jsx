import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 

const moreProjects = {
  url: "https://github.com/nianod?tab=repositories",
};
let handOnProjects = [
 {
    label: "Chatbot",
    source: "https://github.com/nianod/Express-Ai-Chatbot",
    live: "https://express-ai-chatbot.vercel.app/",
    description: "An AI-powered chatbot application built to interact with users in real time. Integrates natural language processing and a user-friendly interface for smooth conversational experiences.",
    photo: "levart_photographer-drwpcjkvxuU-unsplash.jpg",
    name: "AI Chatbot",
  },
 {
    label: "AI assistant",
    source: "https://github.com/nianod/llama3-AI-Assistant",
    live: "https://express-ai-chatbot.vercel.app/",
    description: "This si an python based AI application able to receive instructions either in form of text, graphic or speech recognition, process and give feedback very fast",
    photo: "Screenshot 2025-08-13 173353.png",
    name: "AI Assistant",
  },
  {
    label: "Youtube Video Downloader",
    source: "https://github.com/nianod/Youtube-downloader",
    live: "https://youtube-video-downloader-two-delta.vercel.app/",
    description: "A custom Node.js-based YouTube downloader built with Express and ytdl-core. Provides an API to fetch and download video/audio streams from YouTube URLs.",
    photo: "images.jpeg",
    name: "Youtube Video Downloader",
  },
  {
    label: "Github profile Finder",
    source: "https://github.com/nianod/Github-Profile-Finder",
    live: "https://github-profile-finder-smoky.vercel.app/",
    description: "A simple application where you can search any Github user profila and view their details, Build using Github API",
    photo: "github.jpeg",
    name: "Github profile Finder",
  },
  {
    label: "Confession Arena",
    source: "https://github.com/nianod/secret-arena",
    live: "https://airbnb-look-alike.vercel.app//",
    description: "A site which allows users to Freely expose their thoughts, Post or Say anything, Reveal secret without any restriction while staying Anonymous",
    photo: "reveal.jpeg",
    name: "Confession Arena",
  },
  {
    label: "Car shelf",
    source: "https://github.com/nianod/Milele-Car-Shelf",
    live: "https://milele-car-shelf.vercel.app/",
    description: "An simple app to sell, Buy and Hire available cars",
    photo: "cars.jpeg",
    name: "Car shelf",
  },
  {
    label: "Chat app",
    source: "https://github.com/nianod/Supabase-Chat-APP",
    live: "https://github.com/nianod/Supabase-Chat-APP",
    description: "This is a realtime chat app which allow users to sign in with Google, send messages, and see them instantly update across all connected users using Supabase Realtime sockets",
    photo: "images.png",
    name: "Chat App",
  },
];
const OurWork = () => {

  const [openId, setOpenId] = useState(null)

  const handleToggle = (index) => {
    setOpenId((prevId) => (prevId === index ? null : index))
  }

  
  return (
    <>
      <div data-aos="flip-up">
        <h1 className="text-2xl underline text-green-600 text-center font-bold mt-15">
          Our Featured Projects
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-9 px-3 py-5 ">
          {handOnProjects.map((item, index) => (
            <div
              key={index}
              className=" rounded-md  bg-black shadow-lg hover:scale-105 transition box-orange-green"
            >
              {" "}
              <div className="content p-3 rounded"> 
                <img
                  src={item.photo}
                  alt={`Screenshot of ${item.label}`}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <p className="text-white text-center"> {item.name} </p>
                <h2 className="font-bold text-lg text-center mb-2">
                  {item.label}
                </h2>

                <div className="flex flex-col gap-2 justify-between">
                  <button
                    onClick={()  =>  handleToggle(index)}
                    className="bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-700 cursor-pointer"
                  >
                    {openId === index ? "Hide" : "Description"}
                  </button>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-3 py-1 rounded text-white hover:bg-gray-800"
                  >
                    Repository
                  </a>
                  {openId === index && (
                    <p className="text-gray-400 mt-5">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-15 flex justify-center mt-10">
        <Link to={moreProjects.url} target="_blank">
          <button className="text-[white] px-2 rounded-xl p-[3px] font-bold cursor-pointer beet hover:scale-110 transition-transform duration-200">
            More Projects
          </button>
        </Link>
        
      </div>
      
    </>
  );
};

export default OurWork;
