import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { GoShare } from "react-icons/go";
import Image from 'next/image';
import pics from "@/app/public/pics.jpg"
import flyer from "@/app/public/flyer.jpg"

const page = () => {
  return (
    <div className='w-full h-auto lg:min-h-[calc(100vh-64px)]'>
        <div className='w-full h-[40vh] lg:h-[70vh] bg-neutral-400 overflow-hidden'>
            <Image src={flyer} width={100} height={100} className='w-full object-cover' />
        </div>
        <div className='p-5 md:p-10 lg:p-20 px-5 md:px-16 lg:px-24 text-blue-950 font-sans grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='col-span-1 lg:col-span-2 lg:pr-32 order-last lg:order-first'>
                <p className='font-semibold '>
                    11th September, 1945
                </p>
                <h1 className='text-3xl md:text-3xl lg:text-5xl font-bold my-3'>
                    Ibogun Block Party
                </h1>
                <p className='tx-base lg:text-sm mb-5'>
                    The one and only Interedting program in ibogun
                </p>
                <div className='w-full lg:w-2/3 rounded-md flex flex-row-reverse gap-8 items-start justify-end bg-neutral-300 p-5'>
                    <div className='w-2/5'>
                        <p className='text-sm font-semibold'>Uploaded by</p>
                        <p className='text-sm'>Collins Scott</p>
                    </div>
                    <div className='overflow-hidden rounded-full w-max'>
                        <Image src={pics} width={100} height={100} className='w-14 h-14' />
                    </div>
                </div>
                <div className='font-semibold mt-8'>
                    <p className='my-2'>
                        Time:
                        <span className='font-normal'> 11:00 PM</span>
                    </p>
                    <p className='my-2'>
                        Venue: 
                        <span className='font-normal'> Abraham lincoln School, Fashina Ibogun</span>
                    </p>
                </div>
                
                
            </div>
            <div className='col-span-1 relative h-full'>
                <div className='relative md:relative lg:sticky lg:top-0 w-full p-5'>
                    <div className=' text-3xl font-semibold mb-5 lg:mb-10 flex flex-row justify-end items-center gap-7 lg:gap-10'>
                        <IoMdHeartEmpty className='cursor-pointer hover:scale-[1.1] duration-500' />
                        <GoShare className='cursor-pointer hover:scale-[1.1] duration-500'/>
                    </div>
                    <div className=''>
                        <button className='block w-full rounded-md text-lg font-semibold p-3 bg-primary text-white lg:hover:shadow-xl duration-500'>
                            Buy a Ticket
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default page