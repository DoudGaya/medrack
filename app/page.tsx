import Image from 'next/image'
import med from '../public/medcine.jpg'
import logo from '../public/logo.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 justify-center">
      {/* <Image src={med.src} className=' h-[230px] w-[230px] rounded-full border' alt="" width={1000} height={1000} /> */}
      <Image src={logo.src} className=' h-[200px] w-[300px] object-cover object-center' alt="" width={1000} height={1000} />
      <h2 className=' md:text-5xl text-3xl'>Coming Soon. </h2>
    </main>
  )
}
