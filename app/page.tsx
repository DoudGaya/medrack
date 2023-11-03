import { Banner } from "@/components/Banner"
import { FAQ } from "@/components/FAQ"
import { HomeAbout } from "@/components/HomeAbout"
import { HowitWorks } from "@/components/HowitWorks"
import { Navbar } from "@/components/Navbar"
import { Showcase } from "@/components/Showcase"


export default function Home() {
  return (
    <main className=" flex w-full flex-col">
      <Navbar />
      <Banner />
      <div className="">
        <HomeAbout />
      </div>
      <div className="">
        <Showcase />
      </div>
      <div className="">
        <HowitWorks />
      </div>
      <div className="">
        <FAQ />
      </div>
    </main>
  )
}
