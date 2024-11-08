import React from 'react'

interface ButtonProps {
    title: string;
    type?: 'submit';
    onClick?: () => void;
}

const CustomButton = ({title, type, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className='w-full h-fit bg-gray-600 rounded-md py-1' type={type}>{title}</button>
  )
}

export default CustomButton