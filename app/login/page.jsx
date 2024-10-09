import React from 'react'

export default function page() {
  return (
    <div className='w-full h-full bg-slate-100 flex items-center justify-center flex-1'>
        <div className='w-10/12 md:w-1/2 lg:w-1/3 h-1/3 md:h-1/2 lg:h-2/3 font-sans'>
            <h2 className=' font-bold text-primary text-center my-5 text-lg md:text-xl lg:text-2xl'>Login to your Account</h2>
            <form action="">
                <div className='w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg'>
                    <label className='font-semibold mb-1' htmlFor="email">E-mail:</label>
                    <input type="email" id='email' name='email' placeholder='Enter your email here' className='bg-transparent focus:outline-none p-1 shadow'/>
                </div>
                <div className='w-full bg-white rounded-lg my-2 flex flex-col p-3 shadow-lg'>
                    <label className='font-semibold mb-1' htmlFor="password">Password:</label>
                    <input type="password" id='password' name='password' placeholder='Enter your password here' className='bg-transparent focus:outline-none p-1 shadow'/>
                </div>
                <button className='w-full p-2 text-lg bg-primary text-white font-semibold rounded my-4 lg:hover:scale-[1.03] duration-500'>Login</button>
            </form>
        </div>
    </div>
  )
}
