import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-screen h-screen'>
        <Image
        height={5000} width={5000}
        src={"/assets/imageHD.jpg"}
        alt='nothing'
        className='w-full h-full object-cover object-center'
        ></Image>
    </div>
  )
}

export default Page