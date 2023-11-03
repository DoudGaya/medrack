import React from 'react'


const works = [
    {
        id: 1,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 stroke-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
        ),
        message: 'Sign Up with Medrack',


    },
     {
        id: 2,
        icon: (
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 stroke-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>

        ),
        message: 'Upload your Prescription Prescription must be valid',
        

    },
    {
        id: 3,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 stroke-primary">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

        ),
        message: 'Schedule Your Same Day Free Delivery ',
        

    },
    {
        id: 4,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 stroke-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        ),
        message: 'We manage your refills',
        

    }
]

export const HowitWorks = () => {
  return (
      <div className=' flex flex-col space-y-4 py-20'>
          <div className=" max-w-6xl py-20 mx-auto w-full   ">
        <p className=' text-primary text-center font-bold text-2xl font-quicksand uppercase'>How Medrack Works</p>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 gap-4">
                  {
                    works.map(( item: any) => {
                        return (
                            <div key={item.id} className=" flex py-10 flex-col items-center justify-center space-y-5 text-center">
                                <span className=' bg-yellow-300 hover:bg-brand-green cursor-pointer p-4 rounded-full'>{item.icon}</span>
                                <div className=" px-16 lg:px-6">
                                     <p className=' font-semibold font-quicksand text-lg'>{item.message}</p>
                               </div>
                           </div>
                       )  
                    })
              }
          </div>
         </div>
          
    </div>
  )
}
