import React from 'react'
import { FaCopyright, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='text-center p-5 bg-slate-800 text-white '>
            <div className='text-3xl my-5'>
                <h1 className='font-bold p-3'>You can find us at </h1>
                <p className='text-blue-500 flex justify-center align-center gap-3'>
                    <button><FaFacebook /></button>
                    <button><FaLinkedin /></button>
                    <button><FaTwitter /></button>
                    <button className='text-red-500'><FaYoutube /></button>
                </p>
            </div>
            <div className='flex flex-wrap justify-evenly w-full align-center gap-10'>
                <div>
                    <h1 className='font-bold'>Online Shopping</h1>
                    <ul>
                        <li><a href=' '>Clothes</a></li>
                        <li><a href=' '>Electronics</a></li>
                        <li><a href=' '>Foot Wear</a></li>
                        <li><a href=' '>Toys</a></li>
                        <li><a href=' '>Kitchen</a></li>
                        <li><a href=' '>Electrical Appliances</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>About</h1>
                    <ul>
                        <li><a href=' ' >Contact us</a></li>
                        <li><a href=' '>About us</a></li>
                        <li><a href=' '>Careers</a></li>
                        <li><a href=' '>Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>Help</h1>
                    <ul>
                        <li><a href=' '>payments</a></li>
                        <li><a href=' '>Shipping</a></li>
                        <li><a href=' '>Cancellation & Returns</a></li>
                        <li><a href=' '>FAQ</a></li>
                        <li><a href=' '>Reports</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>Consumer Policy</h1>
                    <ul>
                        <li><a href=' '>Cancellation & Returns</a></li>
                        <li><a href=' '>Terms of use</a></li>
                        <li><a href=' '>Security</a></li>
                        <li><a href=' '>Privacy</a></li>
                        <li><a href=' '>Sitemap</a></li>
                    </ul>
                </div>
            </div>

            <div className='font-bold'>
                <span> Copyright <FaCopyright className='inline' /> 2023 </span>
            </div>
        </div>
    )
}

export default Footer