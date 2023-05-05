import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from '../assets/whoweare.jpg'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, RightArrow } from '../utils/motion'
import { TypingText } from '../components/CustomText'

const WhoWeAre = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      exit={{opacity: 0}} 
    >

      <motion.div className='w-full max-w-[1920px] mx-auto bg-[#2A5892] py-20 px-4 rounded-t-[2rem] md:rounded-t-[3em]'>
          <div 
            className='max-w-[1920px] mx-auto grid md:grid-cols-2 gap-8'>
              <motion.div variants={fadeIn('right', 'tween', 0.5, 1)} >
                <Image className='w-[500px] mx-auto my-4 rounded-[25px]' src={Banner} alt="" />
              </motion.div>
              <div className='flex flex-col justify-center text-white'>
                  <TypingText title="| Who we are" />
                  <motion.h2 variants={fadeIn('up', 'tween', 1.4, 1)} className='font-semibold'>Samar Island GIS and Data Analytics Center <i>(SIGISDAC)</i> creates, manages, analyzes, maps, simulates, and visualizes all types of data.</motion.h2>
                  <motion.p variants={fadeIn('up', 'tween', 1.6, 1)} className='py-6 text-slate-300'>Helps users understand patterns, relationship, and geographic context. Thus improved communication, efficiency, and overall decision making proces.</motion.p>
                  <Link href="/contact">
                    <motion.button variants={fadeIn('down', 'tween', 1.8, 1)} className='flex items-center gap-x-5 text-xl uppercase text-[#7FABD4] py-5 mx-auto md:mx-0'>Contact Us 
                      <motion.span variants={RightArrow} initial='hidden' whileInView='show'>
                        <HiArrowRight />
                      </motion.span>
                    </motion.button>
                  </Link>
              </div>
          </div>
      </motion.div>
    </motion.div>
  )
}

export default WhoWeAre
