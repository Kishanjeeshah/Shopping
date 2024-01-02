import React from 'react'
import { FaShopify, FaShoppingCart } from 'react-icons/fa'
import { SiWelcometothejungle } from 'react-icons/si'
import { NavLink } from 'react-router-dom'
import profile from '../components/image/photo.jpg'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const cart =useSelector((state)=>state.cart)

    return (
        <div className='fixed w-full'>
            <nav className='flex justify-between align-center bg-gray-900 text-white'>

                <div className='md:text-4xl flex p-3'><SiWelcometothejungle /><strong>elcome</strong>
                    <FaShopify />
                </div>

                <div className='flex w-full lg:w-4/12 justify-evenly align-center font-semibold bg-gray-900 py-3'>

                    <NavLink to='/home'>
                        <button>Home</button>
                    </NavLink>
                    <NavLink to='/products'>
                        <button >Products</button>
                    </NavLink>
                    <NavLink>
                        <button>About</button>
                    </NavLink>
                    <NavLink to='/cart'>
                        <button><FaShoppingCart className='text-2xl' /></button>
                        <div className='relative'>
                            {
                                cart.length > 0 &&
                                <div className="absolute left-4 bottom-4 p-2 bg-red-700 w-5 h-5 font-semibold rounded-full flex justify-center items-center animate-bounce" >{cart.length}</div>
                            }
                        </div>
                    </NavLink>
                    <NavLink to='/profile'>
                        <button>
                            <img src={profile} alt='' className='rounded-full w-[30px] h-[30px]' />
                        </button>
                    </NavLink>

                </div>
            </nav>

        </div>
    )
}

export default Navbar