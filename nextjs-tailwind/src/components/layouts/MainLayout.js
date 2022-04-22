import React from 'react'
import Head from 'next/head'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const MainLayout = ({children, title=''}) => {
  return (
    <>
        <Head>
            <title>{title} | Tailwind Project</title>
        </Head>
        <Navbar />
        { children }
        <Footer />
    </>
  )
}

export default MainLayout