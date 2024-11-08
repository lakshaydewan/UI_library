import React from 'react'

interface ButtonProps {
    title: string;
    type?: 'submit';
    onClick?: () => void;
    variant?: 'default' | 'disabled' //Add more variants as you like
}

const CustomButton = ({title, type, onClick, variant}: ButtonProps) => {

  const classes = {
    default: "w-full h-fit bg-gray-600 rounded-md py-1",
    disabled: "w-full h-fit bg-gray-500 text-gray-200 rounded-md py-1 pointer-events-none"
  }

  return (
    <button onClick={onClick} className={variant ? classes[variant] : classes.default} type={type}>{title}</button>
  )
}

export default CustomButton