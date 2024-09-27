import React from 'react'

const page = () => {
  return (
    <div className="relative h-64 w-full">
  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fG5hdHVyZXxlbnwwfHx8fDE2NTc5NDE4NTI&ixlib=rb-1.2.1&q=80&w=1080')] before:bg-cover before:bg-center before:opacity-50"></div>
  <div className="absolute inset-0 backdrop-blur-xl flex items-center justify-center text-white z-10">
    <h1 className="text-3xl">Blurred Background Content</h1>
  </div>
</div>
  )
}

export default page