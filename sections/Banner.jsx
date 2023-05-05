import BossVen from '../assets/BossVen.png'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/LogoV1.png'
import React from 'react'

const Banner = () => {
  return (
    <div className='container mx-auto max-w-[1920px] bg-black mt-12 px-8'>
      <div className='relative grid grid-cols-1 lg:grid-cols-3 place-items-center px-20 gap-10 bg-black'>
        <div className='overflow-hidden'>
          <Image src={Logo} width={210} height={210} alt='logo' className='mt-[-1rem] rotate-[40deg]'/>
        </div>
        <Image src={BossVen} alt="" height='370' width='370' className='absolute top-[-5rem] left-0 sm:left-[3.5rem] md:left-[7rem] lg:left-[-2rem] xl:left-0 2xl:left-[3rem] 3xl:left-[7rem]' />
        <h1 className='text-white font-medium text-2xl text-center'>Should you need any further information, please do not hesitate to contact us.</h1>
        <Link href="https://m.me/110712301483870" passHref={true}>
          <button className='bg-[#FCF9F9] mx-auto p-2 font-medium uppercase w-40 mb-8 lg:mb-0'>Let's chat</button>
        </Link>
      </div>
    </div>
  )
}

export default Banner
