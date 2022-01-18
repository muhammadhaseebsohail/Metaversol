/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Meet the Founder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className='xl:pt-40 lg:pt-32 md:pt-24 pt-8'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='lg:mb-24 mb-8'>
            <h2 className='xl:text-6xl lg:text-4xl text-3xl font-bold text-white text-center'>
              MEET THE FOUNDERS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-4 items-center ">
            <div className='flex justify-center'>
              <div className=' border-purple bg-blue-10 w-102 p-11 rounded-3xl border-4'>
                <div className='flex justify-center flex-col items-center mb-8'>
                  <img  src='/assets/images/Solanacoin1.png' alt='Solanacoin1' />
                </div>
                <h5 className='text-purple md:text-4xl text-2xl font-bold mb-6 text-center'>CHARLES POOLE</h5>
                <p className='text-white lg:text-2xl md:text-xl text-md text-center lg:mb-10 mb-6'>
                  Charles is the wizard behind The Expanse. With over a decade of experience in Virtual Reality game development, he has been a pioneer in the industry since day one.
                </p>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className=' border-purple bg-blue-10 w-102 p-11 rounded-3xl border-4'>
                <div className='flex justify-center flex-col items-center mb-8'>
                  <img  src='/assets/images/Solanacoin1.png' alt='Solanacoin1' />
                </div>
                <h5 className='text-purple md:text-4xl text-2xl font-bold mb-6 text-center'>CHARLES POOLE</h5>
                <p className='text-white lg:text-2xl md:text-xl text-md text-center lg:mb-10 mb-6'>
                  Charles is the wizard behind The Expanse. With over a decade of experience in Virtual Reality game development, he has been a pioneer in the industry since day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
