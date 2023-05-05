import { fadeIn, footerVariants, textVariant } from '../utils/motion'

import {BiCurrentLocation} from 'react-icons/bi'
import {BsFacebook} from 'react-icons/bs'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer>
      <motion.div variants={footerVariants} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className='max-w-[1920px] container mx-auto mt-10 border-t-slate-300 border-t-2'>
        <div className='w-full md:px-10 xl:px-15 py-2 pt-8'>
          <div className='flex justify-center items-center'>

            <div className='flex flex-col lg:flex-row justify-center gap-10'>

              <div className='w-full h-full flex flex-col lg:mx-10'>
                <motion.h1 variants={textVariant(0.5)} className='font-bold text-2xl tracking-widest py-1 mb-2'>SIGIS
                  <span className='text-[#2A5892]'>DAC</span>
                </motion.h1>
                <motion.h3 variants={textVariant(0.8)} className='font-medium uppercase w-48'>Samar Island GIS <br/> and Data Analytics <br/> Center</motion.h3>
              </div>
              <div className='w-full h-full flex flex-col lg:mx-10'>
                <motion.h1 variants={textVariant(0.5)} className='uppercase font-semibold h-full text-lg py-1 mb-2'>follow us</motion.h1>
                <motion.div variants={textVariant(0.8)} className='inline-flex gap-2 py-1'>
                  <BsFacebook size={20}/>
                  <Link href='https://facebook.com/SIGISDAC' passHref={true}>
                    <span className='uppercase text-[12px] font-medium'>fb.com/sigisdac</span>
                  </Link>
                </motion.div>
              </div>
              <div className='w-full h-full flex flex-col lg:mx-10'>
                <motion.h1 variants={textVariant(0.5)} className='uppercase font-semibold h-full text-lg py-1 mb-3'>location</motion.h1>
                <motion.div variants={textVariant(0.8)} className='inline-flex gap-2 w-72'>
                  <BiCurrentLocation size={25}/>
                  <span className='uppercase text-[12px] font-medium'>RIC 2nd Floor <br/>
                    Samar State University <br/>
                    Arteche Blvd. Brgy. Guindapunan <br/>
                    Catbalogan City, Samar, PH
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div variants={fadeIn('down', 'tween', 1, 0.8)} className='text-center pt-8'>
            <span className='text-neutral-600 text-[14px]'>Copyright &copy; {new Date().getFullYear()} SIGISDAC. All rights reserved.</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer