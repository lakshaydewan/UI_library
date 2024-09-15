import React from 'react'
import Image from 'next/image'

const NiceBorder = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#000000]'>
        <div className='group w-[80vw] md:w-[60vw] h-[60vh] bg-[#101010] rounded-xl relative'>
        <div className='z-10 w-[1px] h-20 absolute top-20 group-hover:opacity-100 opacity-0 translate-y-[250px] group-hover:-translate-y-0 transition-all duration-700 ease-out' 
                style={{
                background: 'linear-gradient(to bottom, transparent, #735bea, transparent)'
                }}>
            </div>
        <div className='w-full h-full rounded-xl flex'>
                <div className='h-full w-full flex flex-col items-center justify-center gap-6 px-3'>
                    <div className='text-xs text-[#a594fd] font-light tracking-widest'>
                        VISUALISE INFO
                    </div>
                    <div className='text-xl md:text-5xl font-medium text-center'>
                        World class information design at your fingertips
                    </div>
                    <div className='text-center text-md md:text-xl'>
                        Blocks are carefully crafted to help you distill powerful messages from your information and data - no matter how complex.
                    </div>
                </div>
                <div className='h-full w-full flex justify-center items-center'>
                        <div className='overflow-hidden rounded-xl'>
                            <Image
                            className='object-cover w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-xl opacity-100 group-hover:opacity-90 group-hover:rotate-6 group-hover:scale-125 transition-all duration-500 ease-out'
                            src={"https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            width={500}
                            height={500}
                            alt="nothing"
                            >
                            </Image>
                        </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default NiceBorder