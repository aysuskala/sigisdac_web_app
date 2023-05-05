import Image from 'next/image'
import React from 'react'

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-16 p-12 relative shadow-neo-0 rounded-lg bg-black bg-opacity-75'>
      <div className='absolute left-[50%] -top-[60px] translate-x-[-50%]'>
        <Image 
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height={150}
          width={150}
          className='align-middle rounded-full'
        />
      </div>
        <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author