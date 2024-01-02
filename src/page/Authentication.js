import React, { useState } from 'react'
import home from '../components/image/Screenshot 2023-12-20 040125.png'
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from 'react-router-dom';


const Authentication = () => {
    const [form, setform] = useState({ email: "", password: "" })

    const navigate =useNavigate();

    const changehandler = event => {
        const { name, value } = event.target;
        setform({ ...form, [name]: value });
    };

    const submithandler = (event) => {
        event.preventDefault()
        console.log(form)
        navigate("/home");
    }

    return (
        <div className='md:flex h-full justify-center align-center mt-10 '>
            

            <div className='flex justify-center align-center'>
                <img src={home} alt='' width={700} />
            </div>

            <div className='flex flex-col justify-center p-5 m-5'>
                <h1 className='mx-3 font-bold text-4xl text-gray-800 '>Join our E-commerce</h1>
                <p className='mx-3 font-semibold text-gray-500'>Get connect with us let's do your online shopping here</p>

                <form onSubmit={submithandler}>
                    <div className='border border-gray-400 m-3'>
                        <input
                            name='email'
                            required
                            value={form.email}
                            className='w-full p-2'
                            type='text'
                            placeholder='Mobile No. or Email ID'
                            onChange={changehandler}
                        />
                    </div>

                    <div className='border border-gray-400 m-3'>
                        <input
                            required
                            name='password'
                            value={form.password}
                            className='p-2 w-full'
                            type='password'
                            placeholder='password'
                            onChange={changehandler}
                        />
                    </div>

                    <div className='w-full p-3'>

                        <button className=' w-full bg-green-700 p-2 font-semibold text-white'>Login</button>

                    </div>

                    <div className='text-center m-3'>or</div>

                </form>
                
                <button className='w-full flex justify-center align-center font-semibold p-2 gap-2 m-3' ><FcGoogle className='text-2xl' /> <span>Login with Google</span></button>

            </div>

        </div>
    )
}

export default Authentication