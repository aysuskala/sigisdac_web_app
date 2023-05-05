import 'react-multi-carousel/lib/styles.css'

import React, { useEffect, useState } from 'react'

import Carousel from 'react-multi-carousel'
import { FeatNewsCard } from '../components'
import { HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'
import { RightArrow } from '../utils/motion'
import { TitleText } from '../components/CustomText'
import { getFeaturedPosts } from '../services'
import { motion } from 'framer-motion'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FeaturedNews = () => {

    const [featuredNews, setFeaturedNews] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getFeaturedPosts().then((result) => {
            setFeaturedNews(result);
            setDataLoaded(true)
        })
    }, [])

  return (
    <div className='container mx-auto max-w-[1920px] py-10'>
        <TitleText title="News" textStyles='text-black text-center my-[4rem]' />
        {/* <div className='grid grid-cols-1 md:grid-cols-4 px-16 gap-8 mt-20'> */}
        <Carousel
          responsive={responsive}
          infinite={true}
          ssr={true}
          // autoPlay={true}
          // autoPlaySpeed={4000}
          containerClass="carousel-container"
          itemClass="p-2">
          {dataLoaded && featuredNews.map((post, index) => (
              <FeatNewsCard key={post.slug} index={index} post={post} />
              
          ))}
        </Carousel>
        {/* </div> */}
        <div className='container px-6 py-2 md:py-6 mt-2'>
          <Link href='/news'>
            <h2 
              className='uppercase flex items-center gap-4 font-semibold text-[#3077CE] tracking-widest'
            >
              more news
              <motion.span variants={RightArrow} initial='hidden' whileInView='show'><HiArrowRight size={25} /></motion.span>
            </h2>
          </Link>
        </div>
    </div>
  )
}

export default FeaturedNews