import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'

import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug, categories])

  return (
    <div className='bg-[#F3F3F3] shadow-neo-2 rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b border-gray-300 pb-4'>
        {slug? 'Related Post' : 'Recent Post'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 h-16 flex-none'>
            <Image 
              src={post.featuredImage.url}
              alt={post.title}
              height={60}
              width={60}
              className='align-middle w-full h-full object-cover rounded-full'
             />
          </div>
          <div className='flex-grow ml-4 truncate'>
            <p className='text-gray-500 font-xs'>
              {moment(post.datePublished).format('MMM. DD, YYYY')}
            </p>
            <Link href={`/news/${post.slug}`} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
