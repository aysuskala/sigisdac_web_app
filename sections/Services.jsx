import React, { useState } from 'react'
import Link from 'next/link'
import { TitleText, TitleText2 } from '../components/CustomText'
import { fadeIn, staggerContainer, textVariant2 } from '../utils/motion'

import ServiceCard from '../components/ServiceCard'
import { ServiceCards } from '../constants'
import { motion } from 'framer-motion'

const Services = () => {

    const [active, setActive] = useState('service-1')

  return (
    <section id='expertise' className='w-full max-w-[1920px] mx-auto before:content-[""] before:absolute before:w-full before:max-w-[1920px] before:h-[37rem]
    before:xs:h-[39rem] before:xl:h-[35rem]
    before:bg-[#2A5892] rounded-b-[3em] bg-[#f3f3f3]'>  
        <div className='sm:p-16 xs:p-8 px-6 py-12'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className='2xl:max-w-[1380px] md:mt-[5rem] w-full mx-auto flex flex-col'>
                
                <TitleText title="Services" textStyles='text-white z-10 text-center'/>
                <TitleText2 title="SIGISDAC improves communication, efficiency, and overall decision making process." textStyles='text-white z-10 font-normal'/>

                <div className='mt-[50px] flex xl:flex-row flex-col min-h-[70vh] xl:min-h-[30vh]  gap-5'>
                    {ServiceCards.map((world, index) => (
                        <ServiceCard 
                            key={world.id}
                            {...world}    
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
        {/* <div className='w-full h-auto xl:-mt-[14rem] 2xl:-mt-[30rem] 3xl:-mt-[30rem] rounded-b-[3em]'>
            <div className='md:pt-[2rem] lg:pt-[4rem] xl:pt-[16rem] pt-[4rem] 2xl:max-w-[1380px] mx-auto flex flex-col items-center'> */}

                <TitleText2 title="Roger Tomlinson, " spanText="Father of GIS" textStyles='font-semibold text-xl mt-[4rem]' />
                
                <motion.h2
                    variants={textVariant2}
                    initial='hidden'
                    whileInView='show'
                    className='text-center md:text-2xl text-[18px] p-4'
                >
                    “The early days of GIS were very lonely. No-one knew what it meant.”
                </motion.h2>

                <motion.p
                    variants={textVariant2}
                    initial='hidden'
                    whileInView='show'
                    className='text-center md:text-lg px-8'
                >
                Combine multiple data sources to make maps that are as smart as they are beautiful. Use scientific data analytical tools on 2D, 3D and 4D data to identify patterns, make predictions, and answer question
                </motion.p>

                    <motion.button 
                        variants={fadeIn('down', 'tween', 0.5, 1)}
                        initial='hidden'
                        whileInView='show'
                        className='text-[14px] md:text-[1rem] mt-[4rem] uppercase text-white bg-black  rounded-[10px] mx-auto p-4'
                    >
                    <Link href="/contact">
                      Contact Us
                    </Link>
                    </motion.button>
            {/* </div>
        </div>    */}
            </motion.div>

        </div>
    </section>
  )
}

export default Services
