import banner from '@/public/img/banner.jpg'
import Image from 'next/image'
import girl from '@/public/img/pretty_smile_doc.png'
import Link from 'next/link'


export const Banner = () => {
  return (
    <div className=" flex w-full bg-cover bg-center lg:px-0 pt-20 lg:pt-0 h-full px-10 lg:h-[80dvh]" style={{ backgroundImage: `url(${banner.src})`}}>
      <div className=" max-w-7xl w-full overflow-hidden mx-auto grid h-full grid-cols-1 md:grid-cols-2">
        <div className=" w-full my-auto lg:space-y-3 flex justify-center flex-col space-y-6 py-10 h-full">
          {/* <h1 className=' lg:text-7xl text-5xl font-quicksand font-bold'>Medrack Org</h1> */}
          <p className=' font-quicksand font-extrabold py-3 text-primary text-5xl'>Your Friendly Neighborhood Pharmacy</p>
          <div className=" flex space-x-4 w-full">
            <div className=" flex lg:space-x-2 space-y-5 lg:space-y-0 flex-col lg:flex-row ">
              <Link href={''} className='text-center rounded-sm bg-primary px-3 text-white text-lg flex-none py-2 '>
                Getting Started
              </Link>
              <Link href={''} className='text-center rounded-sm text-white text-lg px-3 flex-none py-2 bg-brand-green'>
                Make a quick Order
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-end">
          <Image src={girl} alt='Medrack' className=' object-contain object-right' />
        </div>
      </div>
    </div>
  )
}
