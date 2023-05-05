import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  },[])

  return (
    <div className='bg-[#F3F3F3] shadow-neo-2 rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b border-gray-300 pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/news/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
