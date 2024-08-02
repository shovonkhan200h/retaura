import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <section id='contact' className='container mx-auto py-16'>
        <h2 className='mb-8 text-center text-3xl lg:text-4xl'>Contact</h2>
        <div className='text-neutral-400'>
            {
                CONTACT.map((details)=>(
                    <p key={details.key} className='my-20 border-b-2 border-neutral-700 text-center tracking-tighter lg:text-3xl'>{details.value}</p>
                ))
            }
        </div>
    </section>
  )
}

export default Contact