import React from 'react'


interface FAQS {
    id: number
    question: string
    answer: string
}

export const SingleFaq = ({faq, changeClose, close}: any) => {
  return (
    <div className=" border-b-2 border-primary py-6 flex flex-col ">
        <div className=" flex space-y-3 flex-col">
            <div className=" flex space-x-3 items-center">
                <button onClick={changeClose} className=' bg-primary rounded-full p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 stroke-white transform transition-all ${close && 'rotate-90'} h-6`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <p className=' font-quicksand font-bold text-xl'>{ faq.question}</p>
            </div>
            
            {close && 
            <div className="">
                { faq.answer }
            </div>    
            }
        </div>
    </div>
  )
}
