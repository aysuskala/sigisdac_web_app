import { Banner, Essence, Hero, Services, WhoWeAre } from '../sections'

import { FeaturedNews } from '../sections'
import { motion } from 'framer-motion'

// import { PostCard, PostWidget, Categories} from '../components'
// import { getPosts } from '../services'


export default function Home({ posts }) {
  return (
    <motion.div exit={{opacity: 0}}>
      {/* className='container mx-auto px-10 mb-8' */}
      <Hero /> 
      <WhoWeAre  />
      <Essence />
      <Services />   
      <FeaturedNews />
      <Banner />  
    </motion.div>
  )
}
