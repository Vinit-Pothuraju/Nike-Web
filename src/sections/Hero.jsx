import React from 'react'
import Button from '../Components/Button'
import { shoes } from '../constants'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import ShoeCard from '../Components/ShoeCard'
import { bigShoe1 } from '../assets/images'
import { useState } from 'react'
const Hero = () => {
  const[bigShoeImage,setbigShoeImage]=useState(bigShoe1)
  return (
    <section id="home"
    className='w-full flex xl:flex-row flex-col justify-between items-center
    min-h-screen gap-10 max-container '>

      <div className='relative xl:w-2/5  flex flex-col justify-between items-start w-full max-xl:padding-x pt-28'>
      <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
      <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
      max-sm:leading-[82]font-bold'><span className='xl:bg-white
      xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span><br />
      <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes</h1>
      <p className='font-montserrat text-slate-grey text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover Stylish Nike Arrivals, Quality Comfort, and Innovation for Your Active Life</p>

      <Button label="Shop Now" iconURL={arrowRight}></Button>

      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((stats,index)=>(
          <div key={index}>
            <p className='text-4xl font-palanquin font-bold'>{stats.value}</p>
            <p className='leading-7 font-montserrat text-slate-grey'>{stats.label}</p>
          </div>
        ))}
      </div>
      </div>
      <div className='relative  flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImage} alt="main shoe" 
        width={610}
        height={500}
        className='object-contian relative z-10'/>
        <div className='flex sm:gap-4 absolute -bottom-[5%] sm:left-[ 10%] max-sm:px-6'>
          {shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard 
                imgURL={shoe} 
                changeBigShoeImage={(shoe)=>{setbigShoeImage(shoe)}}
                bigShoeImage={bigShoeImage} 
                
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero