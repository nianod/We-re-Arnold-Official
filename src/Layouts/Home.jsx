import React from 'react'
import Connect from '../Components/Connect'
import SideModal from '../Components/SideModal'
import { motion, useScroll } from 'framer-motion'

const Home = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div className='mt-20'>
      <motion.div
        id='scroll-indicator'
        style={{
          scaleX: scrollYProgress,
          top: 0,
          position: 'fixed',
          left: 0,
          right: 0,
          height: 15,
          originX: 0,
          background: '#ff0088',
          zIndex: 10
        }}
      />
      <div>
        <h1 className='text-white text-xl text-center'>
          WELCOME TO
          <span className='text-white text-xl bg-[red] rounded shadow-md font-bold'>
            {" "}We're Arnold's Tech
          </span>
        </h1>
      </div>
      <Connect />
      <Connect />
      <Connect />
      <Connect />
      <SideModal />
    </div>
  )
}

export default Home
