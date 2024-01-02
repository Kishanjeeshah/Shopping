import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CArt = () => {
  const cart = useSelector((state) => state.cart);
  const [totalamount, settotalamount] = useState(0);

  useEffect(() => {
    settotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      <Navbar/>

      <div className="flex pt-10 justify-center w-full h-full">
        {cart.length > 0 ? (
          <div className="md:flex justify-center lg:w-8/12 ">
            <div className="lg:w-8/12  m-10">
              {cart.map((item, index) => {
                return <CartItem key={item.index} item={item} index={index} />;
              })}
            </div>

            <div className=" w-5/12 mt-20 p-10">
              <div className="text-green-700 font-bold ">Your Cart</div>

              <div className="text-green-700 font-bold text-3xl ">Summary</div>

              <div className="mt-5 font-bold text-gray-700">
                <span>
                  Total Items :
                  <span className="font-normal "> {cart.length}</span>
                </span>
              </div>

              <div className="mt-[300px]">
                <p className="font-bold text-gray-700">
                  {" "}
                  Total Amount :{" "}
                  <span className="text-black">${totalamount}</span>{" "}
                </p>
                <NavLink to="/cart/checkout">
                  <button className="bg-green-700 text-white font-bold py-2 px-10 md:w-full my-3 rounded-lg">
                    CheckOut Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold ">Your cart is Empty</h1>

            <NavLink to="/products">
              <button className="bg-green-500 font-bold m-5 px-5 py-2 rounded-full">
                Shop Now
              </button>
            </NavLink>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CArt;
