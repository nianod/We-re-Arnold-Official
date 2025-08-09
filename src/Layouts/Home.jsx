import React from 'react'
import Connect from '../Components/Connect'
import SideModal from '../Components/SideModal'
import { motion, useScroll } from 'motion/react'

const Home = () => {
  const { scrollyProgress } = useScroll()
   
  return (
    <div className='mt-15'>
      <motion.div
        id='scroll indicator'
        style={{
          scaleX: scrollyProgress,
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          background: 'ff0088'
        }}
      ></motion.div>
      <div>
        <h1 className='text-white'>WELCOME TO <span>We're Arnold's Tech</span></h1>

      </div>
      <Connect />
      <SideModal />
    </div>
  )
}

export default Home
