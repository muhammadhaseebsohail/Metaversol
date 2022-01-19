/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <>
      <section className='bg-blue-10 lg:pt-40 md:pt-32 pt-24 xl:mt-40 lg:mt-32 md:mt-24 mt-8' >
        <div className='max-w-7xl mx-auto px-4  lg:pb-36 md:pb-20 pb-16'>

          <div className="grid grid-cols-12 lg:gap-16 gap-4 items-center mb-8">
            <div className='md:col-span-5 col-span-12'>
              <h3 className='text-white xl:text-5xl md:text-4xl text-2xl font-bold lg:mb-12 md:mb-8 mb-6'>
                Stay Up-To-Date
              </h3>
              <p className='text-white lg:text-xl md:text-xl text-md text-left lg:mb-10 mb-6'>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
              </p>
            </div>
            <div className='md:col-span-7  col-span-12'>
              <form className='flex gap-6'>
                <input type="text" className="relative outline-none rounded-xl py-3 px-3 w-full bg-white shadow text-sm text-gray-700 placeholder-purple-400 focus:outline-none focus:shadow-outline" placeholder="Your email address" />
                <div className='btn-alpha-wrap relative'>
                  <div className='btn-alpha-blur'>
                  </div>
                  <button href="#" className="font-medium btn-alpha">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='grid grid-cols-12 lg:gap-16 gap-4'>
            <div className='md:col-span-5 col-span-12'>
              <a href="#">
                <img alt="" 
                  className="xl:h-20 lg:h-16 md:h-12 h-12  w-auto mb-4"
                  src="/assets/images/MetaversolLogo_White.png"
                />
              </a>
              <p className='text-white lg:text-xl md:text-xl text-md text-left lg:mb-10 mb-6'>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
              </p>
            </div>
            <div className='md:col-span-7 col-span-12'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-12 gap-4'>
                <div>
                  <h5 className='lg:mb-8 md:mb-6 mb-6 md:text-lg text-md font-bold text-purple'>QUICK LINKS</h5>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Services</a>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Pass</a>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Team</a>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Road Map</a>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Partner</a>
                </div>
                <div>
                  <h5 className='lg:mb-8 md:mb-6 mb-6 md:text-lg text-md font-bold text-purple'>INFORMATION</h5>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Privacy Policy</a>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Term and Conditions</a>
                </div>
                <div>
                  <h5 className='lg:mb-8 md:mb-6 mb-6 md:text-lg  text-mdfont-bold text-purple'>JOIN COMMUNNITY</h5>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Twitter</a>
                  <a href='' className='text-white block mb-3 hover:text-purple'>Discord</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='flex justify-center w-full text-center lg:py-8 py-4 md:8 border-t-2 px-4 border-purple'>
          <p className='md:text-md text-xs text-white uppercase'>© 2022 Copyrights All Rights Reserved By METAVERSOL</p>
        </div>
      </section>
    </>
  );
}