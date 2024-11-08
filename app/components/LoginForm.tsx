'use client'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from './CustomInput'

interface LoginFormProps {
    type: 'SignUp' | 'LogIn'
}

const LoginForm = ({ type }: LoginFormProps) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (type === 'LogIn') {
            if (email === '' || password === '') {
                setError("Fill all fields!")
                return ;
            }
            if (!email.includes("@") || email.length < 5 || !email.includes(".") || email.length > 100) {
                setError("Invalid email, must include @ and domain part!")
                return ;
            }
            console.log("email" + email);
            console.log("password" + email);
            return ;
        }
        if (email === '' || password === '' || confirmPassword === '' || name === '') {
            setError("Fill all fields!")
            return ;
        }
        if (!email.includes("@") || email.length < 5 || !email.includes(".") || email.length > 100) {
            setError("Invalid email, must include @ and domain part!")
            return ;
        }
        if (password !== confirmPassword) {
            setError("Confirmed Password doesn't match with password!")
            return ;
        }
        console.log("name" + name)
        console.log("email" + email)
        console.log("password" + password)
        console.log('confirmPassword' + confirmPassword)
        return;
    }

    return (
        <div className='custom-shadow w-[320px] md:w-[350px] py-5 h-fit border rounded-lg flex flex-col items-center justify-around font-sans font-light'>
            <h1 className='text-2xl tracking-wide'>{type === "SignUp" ? "SIGN UP" : "SIGN IN"}</h1>
            <h3 className='text-sm mb-5'>to continue</h3>
            <div className='w-[80%] flex flex-col items-center justify-center gap-8'>
                {
                    type === "SignUp" ? (
                        <CustomInput type='text' placeholder='Name' onChange={(e) => {
                            setError('');
                            setName(e.target.value)
                        }} value={name} />
                    ) : (
                        <>
                        </>
                    )
                }
                <CustomInput type='email' placeholder='email' onChange={(e) => {
                    setError('');
                    setEmail(e.target.value)
                }} value={email} />
                <CustomInput type='password' placeholder='Password' onChange={(e) => {
                    setError('');
                    setPassword(e.target.value)
                }} value={password} />
                {
                    type === "SignUp" ? (
                        <CustomInput type='password' placeholder='Confirm Password' onChange={(e) => {
                            setError('');
                            setConfirmPassword(e.target.value)
                        }} value={confirmPassword} />
                    ) : (
                        <>
                        </>
                    )
                }
                {
                    error !== "" && <p className='w-full text-start text-sm text-red-500 my-[-12px]'>{error}</p>
                }
                <CustomButton onClick={handleClick} title={type === 'SignUp' ? "SIGN UP" : "SIGN IN"} type='submit' />
                <div className='w-full'>
                    <p className='w-full text-sm flex justify-center items-center'>{type === 'SignUp' ? "Already Have an account ? " : "Don't have an account ?"}<span className='text-green-300 ml-1 cursor-pointer'>{type === 'SignUp' ? "log in" : "sign up"}</span></p>
                </div>
            </div>
            <div className='w-[90%] h-[1px] bg-white my-2'></div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='w-full text-center'>or</div>
                <div className='w-full flex justify-center items-center'>
                    <div className='size-8 rounded-full bg-white'>
                        {/*TODO-ICON -Google */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;