import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import profile from '../components/image/photo.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <Navbar />

      <div className='p-20'>
        <h1 className='md:text-3xl text-2xl font-bold '>My profile</h1>

        <div className='md:flex p-2 my-3 shadow-md w-fit'>
          <img src={profile} alt='profile' width={70} className='rounded-full' />
          <div className='m-2'>
            <p className='font-bold'>Kishanjee Shah</p>
            <p className='font-light'>kishanjeeshah@gmail.com</p>
          </div>
        </div>

        <div className='w-fit'>
          <ul className='font-bold p-5  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>

            <NavLink>
              <li className='flex justify-between my-5'>Personal details <IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

            <NavLink to='/cart'>
              <li className='flex justify-between my-5'>My orders <IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

            <NavLink>
              <li className='flex justify-between my-5'>Shipping address<IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

            <NavLink>
              <li className='flex justify-between my-5'>Payment methods <IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

            <NavLink>
              <li className='flex justify-between my-5'>Promocodes<IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

            <NavLink>
              <li className='flex justify-between my-5'>My reviews<IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

            <NavLink>
              <li className='flex justify-between my-5'>Setting<IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

            <NavLink to='/'>
              <li className='flex justify-between my-5'>Logout<IoIosArrowBack className='inline mt-2' /></li>
            </NavLink>

          </ul>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Profile