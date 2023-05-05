import {FcCalendar} from 'react-icons/fc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import moment from 'moment'

const PostCard = ({ post }) => {
  return (
    <div className='bg-[#F3F3F3] shadow-neo-2 rounded-lg p-2 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
            <Image 
                src={post.featuredImage.url}
                alt={post.title}
                // className='absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                // width={500}
                // height={500}
                fill
                className='object-scale-down'
            />
        </div>
        <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-blue-900 text-2xl font-semibold'>
            <Link href={`/news/${post.slug}`}>
                {post.title}
            </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <Image
                    src={post.author.photo.url}
                    alt={post.author.name}
                    width={50}
                    height={50}
                    className='align-middle rounded-full'
                 />
                 <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 font-medium text-gray-700'>
                <FcCalendar size={30} />
                <span>
                    {moment(post.datePublished).format('MMM. DD, YYYY')}
                </span>
            </div>
        </div>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.shortDesc}</p>
        <div className='text-center'>
            <Link href={`/news/${post.slug}`}>
                <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-800 text-white text-lg font-medium rounded-full px-8 py-3 cursor-pointer'>
                    Continue Reading
                </span>
            </Link>
        </div>
    </div>
  )
}

export default PostCard
