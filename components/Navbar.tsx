import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/img/logo.png'


export const Navbar = () => {
  return (
    <div className='w-full flex flex-row bg-white/90 shadow-sm fixed left-0 top-0'>
          <div className="mx-auto py-6 w-full flex max-w-6xl justify-between px-10 ">
              <Image src={logo} className=' h-8 object-contain object-left' alt={''} />
              <ul className='flex space-x-6 px-3'>
                <li>
                      <Link className=' hover:text-brand-pink text-lg font-poppins py-2' href={''}>
                          About
                      </Link>      
                </li>
                {/* <li>
                      <Link className=' hover:text-brand-pink text-lg font-poppins py-2' href={''}>
                          About
                      </Link>      
                </li>
                <li>
                      <Link className=' hover:text-brand-pink text-lg font-poppins py-2' href={''}>
                          Contact
                      </Link>      
                </li> */}
              </ul>
          </div>      
    </div>
  )
}