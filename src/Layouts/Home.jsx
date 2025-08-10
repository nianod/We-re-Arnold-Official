import React from 'react'
import Connect from '../Components/Connect'
import SideModal from '../Components/SideModal'
import { motion, useScroll, useSpring } from 'framer-motion'
import Services from '../Components/Services'

const Home = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

   
  return (
    <div className='mt-20'>
      <motion.div
        id='scroll-indicator'
        style={{
          scaleX: scaleX,
          top: 64,
          position: "fixed",
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          background: '#ff0088',
          zIndex: 10
        }}
      ></motion.div>
      <div>
        <h1 className='text-white text-xl text-center font-bold'>HEY, {" "}
          <motion.span className='text-white text-xl rounded shadow-md font-bold clips'
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.8, ease: 'easeOut'}}
          >{" "} We're Arnold's Tech
          </motion.span>
        </h1>
        <p className='text-gray-300 text-center'>
          Your All-in-One Digital Solutions Partner <br />
          <span>
            Software Development | Web Design | Social Media Growth & More
          </span>
        </p>
        <div className='flex justify-center text-white gap-4 mt-2'>
          <button className=' bg-[#ff0088] px-2 rounded-xl p-[3px] font-bold cursor-pointer beet'>OUR Services</button>
          <button className=' bg-[#ff0088] px-2 rounded-xl p-[3px] font-bold cursor-pointer beet'>EXPLORE</button>
        </div>
      </div>
      <Connect />
      <Services />
      <SideModal />
    </div>
  )
}

export default Home
