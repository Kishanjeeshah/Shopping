import React, { useState } from 'react'

const Customerdetail = () => {

    const [form, setform] = useState({ firstname: "", lastname: '', email: '',address:'',country:'',city:'',state:'',postal:'',payment:'',cardno:'',month:'',year:'',cvc:'',shippingaddress: false,billingcountry:'',billingname:'',billingstate:'',billingpostal:'',billingcity:'', })

    function changehandler(event) {
        const {name,type,value,checked}=event.target
        setform( prevdata=>{
            return {
                ...prevdata,
                [name] : type ==='checkbox' ? checked : value 
            }
        })
    }

    function submithandler(event){
        event.preventDefault()
        console.log(form)
    }

    return (
        <div>

            <form onSubmit={submithandler} className='md:w-1/2'>
            <div className='w-full'>
                <h1 className='font-semibold text-2xl m-2'>Customer Info</h1>

                <div className='md:flex'>
                    <label>
                        <p className='font-semibold mx-2'>First Name </p>

                        <input
                            type='text'
                            className='border border-gray-700 m-2 p-1'
                            name='firstname'
                            value={form.firstname}
                            placeholder='Kishanjee'
                            onChange={changehandler}
                        />
                    </label>

                    <label>
                        <p className='font-semibold mx-2'>Last Name </p>

                        <input
                            type='text'
                            className='border border-gray-700 m-2 p-1 '
                            name='lastname'
                            value={form.lastname}
                            placeholder='shah'
                            onChange={changehandler}
                        />
                    </label>

                    <label>
                        <p className='font-semibold mx-2'>Email </p>

                        <input
                            type='email'
                            className='border border-gray-700 m-2 p-1 '
                            name='email'
                            value={form.email}
                            placeholder='123@gmail.com'
                            onChange={changehandler}
                        />
                    </label>
                </div>

                <div className='md:flex'>
                    <label>
                        <p className='font-semibold mx-2'>Address </p>

                        <input
                            type='text'
                            className='border border-gray-700 m-2 p-1 '
                            name='address'
                            value={form.address}
                            placeholder='block 25 sector D'
                            onChange={changehandler}
                        />
                    </label>

                    <label>
                         <p className='font-semibold mx-2'>Country</p>

                        <select
                            name='country'
                            className='border border-gray-700 m-2 p-1 '
                            value={form.country}
                            onChange={changehandler}
                        >
                            <option></option>
                            <option value='India'>India</option>
                            <option value='New Zeland' >New zeland</option>
                            <option value='Pakistan'>Pakistan</option>
                            <option value='China'>China</option>
                        </select>
                    </label>
                </div>

                <div className='md:flex'>
                    <label>
                        <p className='font-semibold mx-2'>Town/City</p>
                        <input
                            type='text'
                            className='border border-gray-700 m-2 p-1 '
                            name='city'
                            value={form.city}
                            placeholder='Nowgong'
                            onChange={changehandler}
                        />
                    </label>
                    <label>
                        <p className='font-semibold mx-2'>State </p>
                        <select
                            name='state'
                            className='border border-gray-700 m-2 p-1 '
                            onChange={changehandler}
                            value={form.state}

                        >
                            <option>Select State</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Uttar Pradesh'>Uttar Pradesh </option>
                            <option value='Chattisgarh'>Chattisgarh</option>
                            <option value='Bihar'>Bihar</option>
                            <option value='Madhya Pradesh'>Madhya Pradesh</option>
                        </select>
                    </label>
                    <label>
                        <p className='font-semibold mx-2'>Zip/Postal</p>
                        <input
                            name='postal'
                            className='border border-gray-700 m-2 p-1 '
                            type='number'
                            value={form.postal}
                            onChange={changehandler}
                            placeholder='459678'
                        />
                    </label>
                </div>
            </div>

            <div>
                <h1 className='font-semibold text-2xl m-2'>Payment Info</h1>
                <div className='flex'>
                    <label>
                        <input
                            type='radio'
                            className='border border-gray-700 m-2 p-1 '
                            value='Gateway'
                            checked={form.payment==='Gateway'}
                            name='payment'
                            onChange={changehandler}
                        />
                        <span>Gateway</span>
                    </label>
                    <label>
                        <input
                            type='radio'
                            className='border border-gray-700 m-2 p-1 '
                            name='payment'
                            checked={form.payment==='Credit card'}
                            value='Credit card'
                            onChange={changehandler}
                        />
                        <span>Credit Card</span>
                    </label>
                </div>

                <div className='md:flex'>
                    <label>
                        <p className='font-semibold mx-2'>Credit Card Number</p>
                        <input
                            type='number'
                            className='border border-gray-700 m-2 p-1 '
                            value={form.cardno}
                            name='cardno'
                            placeholder='000011110000111'
                            onChange={changehandler}
                        />
                    </label>
                </div>
                <div className='md:flex'>
                    <label>
                        <p className='font-semibold mx-2'>month</p>
                        <select
                            name='month'
                            className='border border-gray-700 m-2 p-1 '
                            value={form.month}
                            onChange={changehandler}
                        >
                        <option></option>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>Jun</option>
                        <option>Jul</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                        </select>
                    </label>

                    <label>
                        <p className='font-semibold mx-2'>Year</p>
                        <select
                            name='year'
                            className='border border-gray-700 m-2 p-1 '
                            value={form.year}
                            onChange={changehandler}
                        >
                        <option></option>
                        <option>2030</option>
                        <option>2029</option>
                        <option>2028</option>
                        <option>2027</option>
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                        <option>2023</option>
                        </select>
                    </label>

                    <label>
                        <p className='font-semibold mx-2'>CVC</p>
                        <input
                        name='cvc'
                        className='border border-gray-700 m-2 p-1 '
                        type='number'
                        value={form.cvc}
                        onChange={changehandler}
                        />
                    </label>
                </div>
            </div>

            <div>
                <h1 className='font-semibold text-2xl m-2'>Billing Address</h1>
                
                <label>
                    <input
                    type='checkbox'
                    className='border border-gray-700 m-2 p-1 '
                    checked={form.shippingaddress}
                    onChange={changehandler}
                    name='shippingaddress'
                    />
                    <span>Billing address same as shipping</span>
                </label>

                <div className='md:flex'>
                    <label>
                        <p className='font-semibold mx-2'>Billing Name </p>

                        <input
                            type='text'
                            className='border border-gray-700 m-2 p-1 '
                            name='billingname'
                            value={form.billingname}
                            placeholder='kissu'
                            onChange={changehandler}
                        />
                    </label>

                    <label> 
                        <p className='font-semibold mx-2'>Billing Country</p>

                        <select
                            name='billingcountry'
                            className='border border-gray-700 m-2 p-1 '
                            value={form.billingcountry}
                            onChange={changehandler}
                        >
                            <option></option>
                            <option value='India'>India</option>
                            <option value='New Zeland' >New zeland</option>
                            <option value='Pakistan'>Pakistan</option>
                            <option value='China'>China</option>
                        </select>
                    </label>
                </div>

                <div className='md:flex'>
                <label>
                        <p className='font-semibold mx-2'>Billing Address </p>

                        <input
                            type='text'
                            className='border border-gray-700 m-2 p-1 '
                            name='billingaddress'
                            value={form.billingaddress}
                            placeholder='block 25 sector D'
                            onChange={changehandler}
                        />
                    </label>
                    <label>
                        <p className='font-semibold mx-2'>City</p>
                        <input
                            type='text'
                            className='border border-gray-700 m-2 p-1 '
                            name='billingcity'
                            value={form.billingcity}
                            placeholder='Nowgong'
                            onChange={changehandler}
                        />
                    </label>
                    <label>
                        <p className='font-semibold mx-2'>State </p>
                        <select
                            name='billingstate'
                            className='border border-gray-700 m-2 p-1 '
                            onChange={changehandler}
                            value={form.billingstate}

                        >
                            <option></option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Uttar Pradesh'>Uttar Pradesh </option>
                            <option value='Chattisgarh'>Chattisgarh</option>
                            <option value='Bihar'>Bihar</option>
                            <option value='Madhya Pradesh'>Madhya Pradesh</option>
                        </select>
                    </label>
                    <label>
                        <p className='font-semibold mx-2'>Zip</p>
                        <input
                            name='billingpostal'
                            className='border border-gray-700 m-2 p-1 '
                            type='number'
                            value={form.billingpostal}
                            onChange={changehandler}
                            placeholder='459678'
                        />
                    </label>
                </div> 
            </div>

            <button className='bg-green-600 p-3 m-2 font-semibold text-1xl text-white'>Complete Checkout and Pay</button>
            </form>


        </div>
    )
}

export default Customerdetail