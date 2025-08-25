import { Link } from 'react-router-dom'
import Connect from '../Components/Connect'
import SideModal from '../Components/SideModal'
import { motion, useScroll, useSpring } from 'framer-motion'
import Chat from '../Components/Chat'
import OurWork from '../Components/OurWork'
import HerokuBots from '../Components/HerokuBots'
import PortFolio from '../Components/PortFolio'
import Testmonials from '../Components/testmonials'
 
 
const Home = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

   
  return (
    <div className='mt-20 pb-30 overflow-x-hidden'>
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
        <div data-aos="flip-right" className='flex justify-center text-white gap-4 mt-4'>
          <button className=' bg-[#ff0088] px-2 rounded-xl p-[3px] font-bold cursor-pointer beet hover:scale-110 transition-transform duration-200'>EXPLORE OUR PRICING</button>
          <Link to="services">
            <button className=' bg-[#ff0088] px-2 rounded-xl p-[3px] font-bold cursor-pointer beet hover:scale-110 transition-transform duration-200'>EXPLORE OUR SERVICES</button>
          </Link>
        </div>
      </div>
      {/* <div className=" m-auto w-3/4 h-1 rounded bg-gradient-to-r from-[#98068c] via-green to-transparent mt-2"></div> */}
      <div>
        <OurWork />
      </div>
        <div>
          <PortFolio />
        </div>      
        <div>
          
          <HerokuBots />
        </div>

      <div className='mt-10'>
        <h2 className='text-2xl text-green-500 text-center font-bold underline'>Services</h2>
      <div  className=' flex flex-col justify-center items-center mt-7 border-2 w-fit m-auto p-5 rounded-md box-orange-green'>
        <div data-aos="zoom-in" className='content'>
        <ul className='flex flex-col text-white mt-3 gap-2 m-3'>
          <li>💻 Custom Software Development</li>
          <li>🌐 Web Design & Development</li>
          <li>🎨 Graphic & Branding Design</li>
          <li>📈 Social Media Growth</li>
          <li>🤖 WhatsApp Bot Automation</li>
          <li>☁️ Heroku Billing Solutions</li>
          <li>🚀 Freelance Tech Support</li>
          <li>🎗️Influencer Marketing</li>
        </ul>
        <Link data-aos="zoom-in" to="services" className='text-white bg-blue-500 cursor-pointer p-2 px-5 rounded-2xl font-bold mt-5 flex justify-center'>
          Explore in Details →
        </Link>
        </div>
      </div>
      </div>
      <Testmonials />
      <Connect />
      <SideModal />
      <Chat />
    </div>
  )
}

export default Home
