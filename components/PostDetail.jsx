import 'react-multi-carousel/lib/styles.css'
import 'react-18-image-lightbox/src/style.css'

import React, { useState } from 'react'

import Carousel from 'react-multi-carousel'
import { FcCalendar } from 'react-icons/fc'
import Image from 'next/image'
import Lightbox from 'react-18-image-lightbox'
import moment from 'moment'

const PostDetail = ({ post }) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [featuredImg, setFeaturedImg] = useState(post.featuredImage.url)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30
    }
  };

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsLightboxOpen(true);
  }

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if(obj) {
      if(obj.bold) {
        modifiedText = (<b key={index}>{text}</b>)
      }

      if(obj.italic) {
        modifiedText = (<em key={index}>{text}</em>)
      }

      if(obj.underline) {
        modifiedText = (<u key={index}>{text}</u>)
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className='text-xl font-semibold mb-4'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className='mb-8'>{modifiedText.map((item,i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className='text-md font-semibold mb-4'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText;
    }
  }

  return (
    <div className='bg-[#F3F3F3] shadow-neo-2 rounded-lg lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <Image 
            src={post.featuredImage.url}
            alt={post.title}
            className='object-top rounded-t-lg'
            width={1200}
            height={628}
            style={{objectFit:'cover'}}
          />
         
          
         <Carousel
            responsive={responsive}
            ssr
            infinite
            autoPlaySpeed={1000}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className='pt-2'
          >
            {post.gallery.map((image, index) => (
              <div key={index} className='h-28 relative'>
                <Image src={image.url}
                  fill
                  alt={post.title}
                  style={{objectFit: 'cover' }}
                  className='cursor-pointer' 
                  onClick={() => openLightbox(index)} 
                />
              </div>
            ))}
          </Carousel>
          {isLightboxOpen && (
            <Lightbox
              mainSrc={post.gallery[currentImage].url}
              nextSrc={post.gallery[(currentImage + 1) % post.gallery.length].url}
              prevSrc={post.gallery[(currentImage + post.gallery.length - 1) % post.gallery.length].url}

              onCloseRequest={() => setIsLightboxOpen(false)}
              onMovePrevRequest={() => setCurrentImage((currentImage + post.gallery.length - 1) % post.gallery.length)}
              onMoveNextRequest={() => setCurrentImage((currentImage + 1) % post.gallery.length)}
            />
          )}
        </div>
        <div className='px-4 lg:px-0'>
          <div className='flex flex-col items-center md:flex-row mb-8 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <Image
                    src={post.author.photo.url}
                    alt={post.author.name}
                    width={50}
                    height={50}
                    className='align-middle rounded-full'
                 />
                 <p className='inline align-middle text-gray-700 ml-2 text-md'>{post.author.name}</p>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 font-medium text-gray-700'>
                <FcCalendar size={30} />
                <span>
                    {moment(post.datePublished).format('MMM. DD, YYYY')}
                </span>
            </div>
          </div>
          <h1 className='mb-8 text-xl md:text-3xl font-semibold'>{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type)
          })}
        </div>
    </div>
  )
}

export default PostDetail
