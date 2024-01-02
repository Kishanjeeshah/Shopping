import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { remove } from '../redux/Slices/cartSlice'
import toast from 'react-hot-toast'

const Orderdetail = () => {

  const cart = useSelector((state) => state.cart)
  const [totalamount,settotalamount] = useState(0)
  const dispatch =useDispatch(remove)

  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=>acc + curr.price ,0))
  },[cart])

  return (
    <div className=' border-2 shadow-2xl border-black w-full h-max p-5 m-3'>
      <h1 className='text-center font-bold text-4xl m-2'>Current Cart</h1>

      <div className='text-center font-semibold text-[1.2rem] text-blue-500 m-2'>
        <NavLink to='/cart'>
          <button>Return to Cart</button>
        </NavLink>
        </div>

      <div className='m-2'>
        {
          cart.map((item) => {
            return (
              <div className='flex justify-between m-2 p-2 gap-x-3'>

                <div>
                  {item.title}
                  <div className='text-left '>
                    <button className='text-red-400 rounded-lg text-[0.8rem] font-semibold p-1' 
                    onClick={()=>{
                      dispatch(remove(item.id))
                      toast.error("Removed from cart")
                    }}
                    >Remove item</button>
                  </div>
                </div>

                <div className='text-right'>
                  ${item.price}
                </div>

              </div>
            )
          })
          }
      </div>

      <div className='flex justify-center items-center w-full m-2 p-2'>
        <div className='bg-black w-full h-1'></div>
          <h1 className='font-semibold text-center'>Total Amount</h1>
          <div className='bg-black w-full h-1'></div>
      </div> 

      <div className='font-bold text-center text-2xl '>${totalamount}</div>

    </div>
  )
}

export default Orderdetail