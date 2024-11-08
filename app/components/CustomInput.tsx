import React from 'react'
import { HTMLInputTypeAttribute } from 'react';
import { ChangeEvent } from 'react';

interface InputProps {
    type?: HTMLInputTypeAttribute;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({type, placeholder, value, onChange}: InputProps) => {
    return (
        <div className="relative w-full">
            <input type={type} onChange={onChange} className="w-full pb-2 bg-inherit border-white focus:outline-none peer" />
            <div className={`pointer-events-none ${value !== "" && "-translate-y-[18px] scale-90"} absolute bottom-3 left-0 peer-focus:scale-90 peer-focus:-translate-y-[18px] transition-all duration-300 ease-out`}>
                {placeholder}
            </div>
            <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white'>
            </div>
        </div>
    )
}

export default CustomInput