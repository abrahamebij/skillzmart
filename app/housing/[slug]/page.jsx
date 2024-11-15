import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { GoShare } from "react-icons/go";
import Image from 'next/image';
import pics from "@/app/public/pics.jpg"
import housec from "@/app/public/house-center.jpg"
import house1 from "@/app/public/house-1.jpg"
import house2 from "@/app/public/house-2.jpg"
import house3 from "@/app/public/house-3.jpg"
import house4 from "@/app/public/house-4.jpg"

const page = () => {
  return (
    <div className='w-full h-max lg:min-h-[calc(100vh-64px)] overflow-hidden'>
        <div className='w-full lg:w-full h-auto lg:h-[70vh] bg-neutral-400 overflow-auto lg:overflow-hidden'>
          <div className='w-max lg:w-full h-auto lg:h-full grid grid-cols-5 lg:grid-cols-4 gap-5'>
            <Image src={house4} width={300} height={300} className='w-full  h-full object-cover rounded-md' />
            <Image src={housec} width={300} height={300} className='w-full h-full  object-cover rounded-md lg:col-start-2 lg:col-span-2 lg:row-span-2' />
            <Image src={house1} width={300} height={300} className='w-full h-full  object-cover rounded-md ' />
            <Image src={house2} width={300} height={300} className='w-full h-full  object-cover rounded-md' />
            <Image src={house3} width={300} height={300} className='w-full h-full  object-cover rounded-md' />
          </div>
            
        </div>
        <div className='p-5 md:p-10 lg:p-20 px-5 md:px-16 lg:px-24 text-blue-950 font-sans grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='col-span-1 lg:col-span-2 lg:pr-32 order-last lg:order-first'>
                <p className='font-semibold text-lg'>
                    10 Self Contain at
                </p>
                <h1 className='text-2xl md:text-2xl lg:text-3xl font-semibold mt-3'>
                    Sasheye Hostel
                </h1>
                <p className='tx-base lg:text-sm mb-5'>
                    Along Fashina Ibogun, Before New Jerusalem
                </p>
                <div className='w-full lg:w-2/3 rounded-md flex flex-row-reverse gap-8 items-start justify-end bg-neutral-300 p-5'>
                    <div className='w-2/5'>
                        <p className='text-sm font-semibold'>House Agent</p>
                        <p className='text-sm'>Happy Market</p>
                    </div>
                    <div className='overflow-hidden rounded-full w-max'>
                        <Image src={pics} width={100} height={100} className='w-14 h-14' />
                    </div>
                </div>
                <p className='my-2 text-xl font-semibold mt-8'>
                	Related searches
                </p>
				<div>

				</div>
                
                
            </div>
            <div className='col-span-1 relative h-full'>
                <div className='relative md:relative lg:sticky lg:top-0 w-full p-5 bg-neutral-300 ring-1 ring-neutral-400 rounded-2xl'>
                    <div className=' text-3xl font-semibold mb-5 lg:mb-10 flex flex-row justify-end items-center gap-7 lg:gap-10 '>
                        <IoMdHeartEmpty className='cursor-pointer hover:scale-[1.1] duration-500' />
                        <GoShare className='cursor-pointer hover:scale-[1.1] duration-500'/>
                    </div>
                    <div className=''>
                        <button className='block w-full rounded-md text-lg font-semibold p-3 bg-primary text-white lg:hover:shadow-xl duration-500'>
                            Contact Agent
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default page