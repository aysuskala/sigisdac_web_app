import { Categories, PostCard, PostWidget } from '../../components'

import { fadeIn } from '../../utils/motion'
import { getPosts } from '../../services'
import { motion } from 'framer-motion'

export default function News({ posts }) {
  return (
    <motion.div exit={fadeIn('left', 'tween', 0.5, 0.8)} className='container mx-auto md:px-4 mb-8'>
      {/* Display data to card from PostCard in components folder */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => ( <PostCard post={post.node} key={index} /> ))}
          
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-16'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      
    </motion.div>
  )
}

// Get data from services/index.js
export async function getServerSideProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
