import React, { useEffect, useRef, useState } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if(!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem('name', name);  
      window.localStorage.setItem('email', email);  
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })
  }

  return (
    <div className='bg-[#F3F3F3] shadow-neo-2 rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave Us a Comment</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-50 text-gray-700'
          placeholder='Comment'
          name='comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type="text"
          ref={nameEl}
          className='p-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-50 text-gray-700'
          placeholder='Name'
          name='name'
         />
        <input
            type="text"
            ref={emailEl}
            className='p-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-50 text-gray-700'
            placeholder='Email'
            name='email'
          />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' />
          <label htmlFor='storeData' className='text-gray-500 cursor-pointer ml-2'>Remember me.</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required.</p>}
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleSubmit}
          className='transition duration-500 ease hover:bg-blue-900 inline-block bg-black text-lg rounded-full text-white px-8 py-3 cursor-pointer'
        >
          Comment
        </button>
        {showSuccessMessage && <span className='text-[14px] md:text-xl float-left md:float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentsForm