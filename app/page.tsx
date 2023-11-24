import { Banner } from "@/components/Banner"
import { FAQ } from "@/components/FAQ"
import { HomeAbout } from "@/components/HomeAbout"
import { HowitWorks } from "@/components/HowitWorks"
import { Navbar } from "@/components/Navbar"
import { Showcase } from "@/components/Showcase"
import coming from '@/public/img/coming_soon.jpg'


export default function Home() {
  return (
    <div className=" bg-cover bg-center h-screen w-full" style={{backgroundImage: `url(${coming.src})`}}>

    </div>
    // <main className=" flex w-full flex-col">
    //   <Navbar />
    //   <Banner />
    //   <div className="">
    //     <HomeAbout />
    //   </div>
    //   <div className="">
    //     <Showcase />
    //   </div>
    //   <div className="">
    //     <HowitWorks />
    //   </div>
    //   <div className="">
    //     <FAQ />
    //   </div>
    // </main>
  )
}
