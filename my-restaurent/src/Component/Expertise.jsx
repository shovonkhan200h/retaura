import React from 'react'
import { CUSINES } from '../constants'
import { motion, stagger } from 'framer-motion'

const containerVariable = {
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:1
        }
    }
}

const itemVariable ={
    hidden:{opacity:0, y:20},
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.8
        }
    }
}

const Expertise = () => {
  return (
    <section id='expertise'>
        <h2 className='y-8 text-center text-3xl tracking-tighter lg:text-4xl'>Our Expertise</h2>
        <motion.div className='container mx-auto px-4' initial='hidden' whileInView='show' variants={containerVariable}>
            {CUSINES.map((cusin,index)=>(
                <motion.div className='flex item-center border-b-4 border-dotted border-neutral-700/40 py-2' key={index} variants={itemVariable}>
                    <div className='flex-shirnk-0 pr-8 text-2xl'>{cusin.number}</div>
                    <div className='w-1/3 flex-shrink-0'>
                        <img src={cusin.image} className='h-auto rounded-3xl'/>
                    </div>
                    <div className='pl-8'>
                        <h2 className='text-2xl uppercase tracking-tighter text-rose-300'>
                            {cusin.title}
                        </h2>
                        <p className='mt-4 text-lg tracking-tighter'>{cusin.description}</p>
                    </div>
                </motion.div>
                
            ))}
        </motion.div>
    </section>
  )
}

export default Expertise