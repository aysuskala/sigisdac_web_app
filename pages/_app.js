import React, { useState, useEffect } from 'react'
import '../styles/globals.scss'
import { Layout } from '../components'
import NextNProgress from 'nextjs-progressbar'


function MyApp({ Component, pageProps }) {
  return (
        <Layout>
          <NextNProgress height={4} options={{ showSpinner: false}} />
          <Component {...pageProps} />
        </Layout>
  )
}

export default MyApp
