import React from 'react'

import {offer} from '../assets/images'

import Button from '../Components/Button'
 
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} alt="" className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> offer Shoes
        </h2>
        <p className='mt-6 lg:max-w-lg info-text'>Embark on a shopping journey that redfines your experience with unbeatable deals. From premier selection to incrediable saving, we offer unparalledled value that sets us part.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibilites designed to fulfill your unique desires,surpassing the loftiest expectation.Your Journey with us in nothing short of expectional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop Now" iconURL={arrowRight}></Button>
          <Button label="Learn More"
          backgroundColor='bg-white' 
          borderColor="border-slate-gray"
          textColor="text-slate-gray"></Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer