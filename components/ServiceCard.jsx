import Image from 'next/image'
import React from 'react'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'

const ServiceCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        initial='hidden'
        whileInView='show'
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}
        flex items-center justify-center min-w-[170px] h-[450px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden`}
        onClick={() => handleClick(id)}
    >
        <Image 
            src={imgUrl}    
            alt={title}
            className="absolute w-full h-full object-cover rounded-[24px] shadow-xl"
            width={500}
            height={500}
        />

        {active !== id ? (
          <h3 className='font-semibold xs:text-[14px] sm:text-[22x] xl:text-2xl text-white absolute bg-[rgba(0,0,0,0.5)] lg:p-4 px-4 sm:p-1 rounded-[1rem] z-0 xl:bottom-20 xl:rotate-[-90deg] xl:origin-[0,0]'>
            {title}
          </h3>
        ) : (
           <div className='absolute bottom-0 p-7 md:p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]'>
              <div className='flex justify-center items-center md:w-[50px] w-[45px] md:h-[50px] h-[45px] rounded-[24px] glassmorphism mb-[4px] animate-bounce'>
                  <Image
                    src="/marker1.svg"
                    alt="marker" 
                    className='w-1/2 h-1/2 object-contain animate-spin-slow'
                    width={300}
                    height={300}
                  />
              </div>
              <h2 className='mt-[12px] font-semibold sm:text-[16px] lg:text-lg text-[16px] text-white'>
                {title}
              </h2>
           </div>
        )}
    </motion.div>
  )
}

export default ServiceCard
