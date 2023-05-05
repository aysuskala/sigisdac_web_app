import React, { useEffect, useRef, useState } from 'react'
import { fadeIn, staggerContainer } from '../utils/motion'

import { EssenceText } from '../components/CustomText'
import { motion } from 'framer-motion'

const Essence = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className='max-w-[1920px] mx-auto py-[8rem] px-4 bg-[#f3f3f3]'>
      <EssenceText title='Our Essence is Based on Three Principles'  />
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      ref={carousel}
      className='cursor-grab overflow-hidden mx-auto pb-10'>
        <motion.div 
          drag='x' 
          dragConstraints={{ right: width, left: -width}}
          className='max-w-[1200px] mx-auto mt-[5rem] flex items-center justify-center p-10 gap-x-16'
        >
          <motion.div
            variants={fadeIn('down', 'tween', 0.5, 1)} 
            whileHover={{scale:1.125}} 
            className='min-w-[256px] min-h-[256px] rounded-[50%] shadow-neo-2 bg-[#e6e5e5]
                      flex items-center justify-center relative before:content-[""] before:hidden 
                      before:absolute before:w-56 before:h-56 before:rounded-[50%] before:border-4
                      before:border-gray-600 hover:before:inline-block after:content-[""] 
                      after:absolute after:hidden after:w-[170px] after:h-[170px] after:rounded-[50%] 
                      after:border-2 after:border-dotted after:border-spacing-4 after:border-gray-600
                      hover:after:inline-block hover:after:animate-ping'
            >
            <h1 className='font-semibold uppercase text-2xl'>Information</h1>
          </motion.div>

          <motion.div 
            variants={fadeIn('down', 'tween', 0.8, 1)} 
            whileHover={{scale:1.1}} 
            className='min-w-[256px] min-h-[256px]  rounded-[50%] shadow-neo-2 bg-[#e6e5e5]
                      flex items-center justify-center relative before:content-[""] before:hidden
                      before:absolute before:w-56 before:h-56 before:rounded-[50%] before:border-4
                      before:border-gray-600 hover:before:inline-block after:content-[""] 
                      after:absolute after:hidden after:w-[170px] after:h-[170px] after:rounded-[50%]
                      after:border-2 after:border-dotted after:border-spacing-4 after:border-gray-600 
                      hover:after:inline-block hover:after:animate-ping'
            >
            <h1 className='font-semibold uppercase text-2xl'>Mapping</h1>
          </motion.div>

          <motion.div 
            variants={fadeIn('down', 'tween', 1.1, 1)} 
            whileHover={{scale:1.1}} 
            className='min-w-[256px] min-h-[256px] rounded-[50%] shadow-neo-2 bg-[#e6e5e5]
                      flex items-center justify-center relative before:content-[""] before:hidden
                      before:absolute before:w-56 before:h-56 before:rounded-[50%] before:border-4
                      before:border-gray-600 hover:before:inline-block after:content-[""] 
                      after:absolute after:hidden after:w-[170px] after:h-[170px] after:rounded-[50%]
                      after:border-2 after:border-dotted after:border-spacing-4 after:border-gray-600 
                      hover:after:inline-block hover:after:animate-ping'
          >
          <h1 className='font-semibold uppercase text-2xl'>Analysis</h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Essence