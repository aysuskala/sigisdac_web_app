import 'react-toastify/dist/ReactToastify.css'

import {ToastContainer, toast} from 'react-toastify'

import React from 'react'
import { sendContactForm } from '../utils/api';
import {useForm} from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    reset();
    // await sendContactForm(data);
    const response = await toast.promise(
      sendContactForm(data),
      {
        pending: 'Sending...',
        success: 'Alright, Message sent.',
        error: 'Oh no, Something went wrong.'
      }
    )
  }

  return (
    <div className='container my-24 mx-auto'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <section className='mb-32 text-gray-800 text-center'>
            <div className='px-6 py-12 md:px-12'>
                <div className='container mx-auto xl:px-32'>
                    <div className='grid lg:grid-cols-2 items-center'>
                      <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                        <div className="block rounded-lg shadow-neo-2 px-6 py-12 md:px-12 lg:mr-[-2.5rem] contact-style">
                          <h2 className='text-3xl font-bold mb-12'>Contact us</h2>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-6'>
                              <input 
                                type="text" 
                                className={`block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                                focus:border-blue-600 focus:outline-none ${ errors.name ? 'focus:border-blue-100 ring-2 ring-red-500' : null}`}
                                id='name'
                                {...register('name', { required: true })}
                                placeholder='Name'
                              />
                              {errors.name && <span className='text-red-400 text-xs block text-left mt-2'>* This field is required.</span>}
                            </div>
                            <div className='mb-6'>
                              <input 
                                type="text" 
                                className={`block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                                focus:border-blue-600 focus:outline-none ${ errors.email ? 'focus:border-blue-100 ring-2 ring-red-500' : null}`}
                                id='email'
                                {...register('email', {required: true})}
                                placeholder='Email address'
                              />
                              {errors.email && <span className='text-red-400 text-xs block text-left mt-2'>* This field is required.</span>}                              
                            </div>
                            <div className='mb-6'>
                              <input 
                                type="text" 
                                className={`block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                                focus:border-blue-600 focus:outline-none ${ errors.subject ? 'focus:border-blue-100 ring-2 ring-red-500' : null}`}
                                id='subject'
                                {...register('subject', {required: true})}
                                placeholder='Subject'
                              />
                              {errors.subject && <span className='text-red-400 text-xs block text-left mt-2'>* This field is required.</span>}
                            </div>
                            <div className='mb-6'>
                              <textarea
                                className={`block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                bg-white bg-clip-padding border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                                focus:border-blue-600 focus:outline-none ${ errors.message ? 'focus:border-blue-100 ring-2 ring-red-500' : null}`}
                                id='message'
                                {...register('message', { required: true})}
                                rows='3'
                                placeholder='Message'></textarea>
                              {errors.message && <span className='text-red-400 text-xs block text-left mt-2'>* This field is required.</span>}
                            </div>
                            <button 
                              className='w-full px-6 py-2.5 bg-blue-600 text-white font-medium
                              text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
                              hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                              focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className='md:mb-12 lg:mb-0'>
                        <div className='map-container relative shadow-neo-2 rounded-lg'>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15623.655410885765!2d124.87714737653738!3d11.771116363214208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309cac0018a1485%3A0x5426e9e36a9980cd!2sSamar%20State%20University!5e0!3m2!1sen!2sph!4v1671084981548!5m2!1sen!2sph" className="left-0 top-0 h-full w-full absolute rounded-lg" frameBorder="0" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact