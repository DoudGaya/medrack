'use client'
import { useState } from 'react'
import { faqs } from '@/lib/utils'
import { SingleFaq } from './SingleFaq'


interface FAQS {
    id: number
    question: string
    answer: string
}

export const FAQ = () => {

    const [close, setClose] = useState(false)


    const changeClose = () => {
        return setClose((prev) => {
            return !prev
        })
    }
  return (
      <div className=' w-full px-10 py-10 '>
          <div className=" mx-auto flex flex-col space-y-6 max-w-4xl">
              {
                  faqs.map((faq: FAQS) => {
                      return (
                        <SingleFaq key={faq.id} faq={faq} close={close} changeClose={changeClose} />
                      )
                  })
              }
          </div> 
    </div>
  )
}
