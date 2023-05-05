import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import React, { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/LogoV1.png'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <motion.div 
        variants={navVariants}
        initial="hidden"
        animate="show"
        className='sticky flex top-0 justify-between items-center h-20 max-w-[1920px] mx-auto px-4 mb-8 border-b-slate-300 border-b-2 bg-white z-50'>
            <div className='flex items-center justify-between sm:px-5'>                
                <Image className='w-10 h-10' src={Logo} alt="" />
                <Link href="/">
                    <span className='w-full text-2xl font-bold m-4'>SIGIS<span className='text-[#2A5892]'>DAC</span></span>
                </Link>
            </div>
            <ul className='hidden md:flex items-center h-full font-semibold cursor-pointer'>
                <Link href='/'>
                    <span className='p-7 hover:border-b-4 border-[#2A5892] ease-linear duration-200'>Home</span>
                </Link>
                <Link href='/news'>
                    <span className='p-7 hover:border-b-4 border-[#2A5892] ease-linear duration-200'>News</span>
                </Link>
                <Link href='/#expertise' scroll={false}>
                    <span className='p-7 hover:border-b-4 border-[#2A5892] ease-linear duration-200'>Expertise</span>
                </Link>
                <Link href='/contact'>
                    <span className='p-7 hover:border-b-4 border-[#2A5892] ease-linear duration-200'>Contact</span>
                </Link>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className={nav ? 'z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#2A5892] ease-in-out duration-500' : 'z-50 fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-700'}>
            <div className='flex items-center p-5'>                
                <Image className='w-10 h-10' src={Logo} alt="" />
                <Link href='/'>
                    <span className='text-2xl font-bold px-4 text-white'>SIGIS<span className='text-[#3B92FE]'>DAC</span></span>
                </Link>
            </div>
            <ul className='block uppercase text-white font-semibold'>
                <li className='p-7 border-b-2 border-b-gray-400'  onClick={handleNav}>
                    <Link href='/'>
                        <span>Home</span>
                    </Link>
                </li>
                <li className='p-7 border-b-2 border-b-gray-400'  onClick={handleNav}>
                    <Link href='/news'>
                        <span>News</span>
                    </Link>
                </li>
                <li className='p-7 border-b-2 border-b-gray-400'  onClick={handleNav}>
                    <Link href='/#expertise' scroll={false}>
                        <span>Expertise</span>
                    </Link>
                </li>
                <li className='p-7'  onClick={handleNav}>
                    <Link href='/contact'>
                        <span>Contact</span>  
                    </Link>
                </li>
            </ul>
        </div>
        <Head>
    <title>Samar Island GIS and Data Analytics</title>
    <meta name="Web App for SIGISDAC News/Article" content="" />
    <link rel="icon" href="/LogoV1.ico" />
  </Head>
    </motion.div>
  )
}

export default Navbar
