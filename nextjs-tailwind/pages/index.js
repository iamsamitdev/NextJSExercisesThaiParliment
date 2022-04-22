/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MainLayout from '../src/components/layouts/MainLayout'

const index = () => {
  return (
    <MainLayout title='Home'>
      <main>
        <section className="bg-white">
          <div className="container py-20 mx-auto">
            <div className="flex flex-wrap items-center mt-16">
              <div className="order-last w-full p-4 lg:w-5/12 lg:order-first">
                <h1 className="mb-4 text-5xl font-semibold leading-tight text-gray-800 capitalize">Best agency for your business growth </h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p>
                <a href="#" className="inline-block px-6 py-2 text-white bg-indigo-600 border-2 border-indigo-600 rounded-md hover:text-indigo-600 hover:bg-indigo-100">Learn More</a>
              </div>
              <div className="order-first w-full p-4 lg:w-7/12 lg:order-last">
                <img src="./images/img-banner.png" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-20 mx-auto">
            <div className="flex flex-wrap items-center mb-4">
              <div className="w-full p-4 lg:flex-1">
                <h6 className="font-medium text-indigo-600">Services</h6>
                <h2 className="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">บริการที่ดีที่สุดสำหรับลูกค้าทุกท่าน</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p>
              </div>
              <div className="w-full p-4 lg:w-auto">
                <a href="#" className="inline-block px-6 py-2 text-white bg-indigo-600 border-2 border-indigo-600 rounded-md hover:text-indigo-600 hover:bg-indigo-100">Learn More</a>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full p-4 xl:w-3/12 sm:w-6/12">
                <a href="#" className="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white"> <i className="mb-4 text-4xl text-indigo-700 fa-laptop-code fas" /> <h5 className="mb-1 text-lg font-semibold">
                    Development </h5> <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> </a>
              </div>
              <div className="w-full p-4 xl:w-3/12 sm:w-6/12">
                <a href="#" className="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white sm:mt-16 sm:-mb-16"> <i className="mb-4 text-4xl text-indigo-700 fa-drafting-compass fas" /> <h5 className="mb-1 text-lg font-semibold">
                    Product Design </h5> <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> </a>
              </div>
              <div className="w-full p-4 xl:w-3/12 sm:w-6/12">
                <a href="#" className="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white"> <i className="mb-4 text-4xl text-indigo-700 fa-swatchbook fas" /> <h5 className="mb-1 text-lg font-semibold">
                    UI/UX Research </h5> <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p> </a>
              </div>
              <div className="w-full p-4 xl:w-3/12 sm:w-6/12">
                <a href="#" className="block px-6 py-16 bg-gray-200 rounded-lg shadow-lg hover:bg-indigo-400 hover:text-white sm:mt-16"> <i className="mb-4 text-4xl text-indigo-700 fa-network-wired fas" /> <h5 className="mb-1 text-lg font-semibold">
                    Digital Marketing </h5> <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p> </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-indigo-200">
          <div className="container py-20 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full p-4 lg:w-6/12">
                <img src="./images/img-about.png" className="w-full" />
              </div>
              <div className="w-full p-4 lg:w-5/12 lg:ml-auto">
                <h6 className="font-medium text-indigo-900">About Us</h6>
                <h2 className="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">We Work Together To Define, Strategize, Design and Develop</h2>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.</p>
                <a href="#" className="inline-block px-6 py-2 text-white bg-indigo-600 border-2 border-indigo-600 rounded-md hover:text-indigo-600 hover:bg-indigo-100">Learn More</a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-indigo-600">
          <div className="container px-4 py-20 mx-auto text-center">
            <h2 className="mb-6 text-4xl font-semibold leading-tight text-white capitalize">Help us to help you grow your online business</h2>
            <a href="#" className="inline-block px-6 py-2 text-indigo-900 bg-white border-2 border-indigo-600 rounded-md hover:text-indigo-600 hover:bg-indigo-200">Contact Now</a>
          </div>
        </section>
        <section>
          <div className="container py-20 mx-auto text-center">
            <div className="w-full px-4 mb-4 lg:mx-auto lg:w-1/2">
              <h2 className="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">Our Latest Work </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p>
            </div>
            <div className="flex flex-wrap items-center mb-4">
              <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
                <a href="#" className="block text-left hover:opacity-75"> 
                  <img src="./images/img-work-1.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 1</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </div>
              <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
                <a href="#" className="block text-left hover:opacity-75"> 
                  <img src="./images/img-work-2.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 2</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </div>
              <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
                <a href="#" className="block text-left hover:opacity-75"> 
                  <img src="./images/img-work-3.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 3</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </div>
              <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
                <a href="#" className="block text-left hover:opacity-75"> 
                  <img src="./images/img-work-4.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 4</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </div>
            </div>
            <a href="#" className="inline-block px-6 py-2 text-white bg-indigo-600 border-2 border-indigo-600 rounded-md hover:text-indigo-600 hover:bg-indigo-100">View All</a>
          </div> 
        </section>
      </main>
    </MainLayout>
  )
}

export default index