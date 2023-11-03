import Image, { StaticImageData } from 'next/image'
import pills from '@/public/img/pills2.jpg'
import doc from '@/public/img/woman_doc.jpg'
import bike from '@/public/img/bike.png'
import phone2 from '@/public/img/phone2.jpg'


interface AboutImages {
    id: string
    text: string
    img: StaticImageData
}

const images =[
    {
        id: '1',
        text: 'Free same-day delivery',
        img: bike
    },
    {
        id: '2',
        text: 'Private Chat or text with our Care Specialist Pharmacist',
        img: phone2
    },
    {
        id: '3',
        text: 'Manage all your prescription medicine from your phone',
        img: pills
    }
]



export const Showcase = () => {
    return (
        <div className=' py-10 w-full bg-gray-100 flex flex-col'>
        <div className=" mx-auto w-full max-w-6xl">
                <div className=" flex flex-col space-y-6 w-full">
                <h2 className=' py-2 font-poppins text-3xl text-primary font-semibold px-10 text-center '>Experience a better Pharmacy</h2>
                    <div className=" grid items-center gap-6 justify-center grid-cols-1 md:grid-cols-3">
                        {
                            images.map(( file: AboutImages) => {
                                return (
                                    <div key={file.id} className=" w-full flex flex-col space-y-6">
                                        <div className={`h-[380px] w-full overflow-hidden`}>
                                            <Image src={file.img} alt='' className='object-cover h-full bg-yellow-500 w-full' />
                                        </div>
                                        <div className=" px-10">
                                             <p className='font-poppins text-xl'>{ file.text }</p>
                                       </div>
                                    </div>
                                )
                            })
                        }
                   </div>
            </div>
          </div>
    </div>
  )
}
