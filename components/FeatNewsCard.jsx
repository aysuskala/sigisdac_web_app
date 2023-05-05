import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fadeIn } from '../utils/motion'
import {motion} from 'framer-motion'

const FeatNewsCard = ({ post, index }) => {
  return (
    // <motion.div
    //   variants={fadeIn('left', 'spring', index * 0.5, 0.75)}
    //   initial='hidden'
    //   whileInView='show'
    //   className='w-80 h-96 rounded-md overflow-hidden relative shadow-neo-2'>
    //     <div>
    //       <Image
    //           src={post.featuredImage.url}
    //           className='w-full h-[50%] object-cover'
    //           width={100}
    //           height={100}
    //           alt={post.title}
    //       />
    //     </div>
    //     <div className='absolute w-full bottom-0 bg-white left-0 right-0'>
    //       <div className='p-4 relative'>
    //         <h3 className='font-medium h-16 text-clip overflow-hidden mb-6 text-center'>{post.title}</h3>
    //         <p className='h-12 text-clip overflow-hidden mb-4 text-neutral-600 text-center '>{post.shortDesc}</p>
    //         <Link href={`/news/${post.slug}`} className='text-[#3077CE] mb-2 float-right'>
    //             read more
    //         </Link>
    //         <span
    //           className='absolute px-3 py-1 bg-[#161c69] text-xs uppercase text-white 
    //           rounded-full font-semibold tracking-widest top-0 right-0 transform -translate-y-full mr-3 -mt-3'
    //         >
    //           Featured
    //         </span>
    //       </div>
    //     </div>
    // </motion.div>
    <div className='rounded-lg shadow-lg bg-white h-full flex flex-col relative'>
      <div className='relative h-full sm:h-56'>
        <Image
            src={post.featuredImage.url}
            alt={post.title}
            className='rounded-t-lg'
            fill
        />

      </div>
      <div className='p-4 sm:p-6'>
          <h3 className='text-lg font-bold text-gray-900 mb-2'>{post.title}</h3>

          <p className='text-gray-700 text-sm mb-4 h-3/6 overflow-hidden text-clip'>{post.shortDesc}</p>

          <Link href={`/news/${post.slug}`} className='inline-flex items-center px-4 py-2 border border-transparent
          text-xs font-normal rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
          focus:ring-offset-2 focus:ring-blue-500 absolute bottom-4 right-4'>
              Read More
          </Link>
        </div>
       
          <div className="bg-[#161c69] text-white py-1 px-2 absolute top-4 left-4 border-gray-400 border-2
          rounded-bl-lg rounded-tr lg">
            Featured
          </div>
    </div>
  )
}

export default FeatNewsCard