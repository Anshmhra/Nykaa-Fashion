import { useState } from "react";
import { FaBars, FaTimes,FaUserCircle} from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Account from "./Account";

import { FaRegHeart } from "react-icons/fa";

function NavBar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div>
             
            <div className="bg-black h-8 text-white w-338" >
                
               <nav >
                <ul className="flex justify-end gap-6 mr-20">
                    <MdPhoneAndroid  className="mt-1"/>
                    <li className="-ml-5 hover:text-white">App Download</li>
                  
                  <IoIosHelpCircleOutline  className="mt-1"/>      
                    <li  className="-ml-5 hover:text-white">Help</li>
                </ul>

               </nav>
            </div>

            <div className=" flex h-18 content-center shadow border-b-gray-400">

      
             <div className="relative ml-5 mt-2 hover:cursor-pointer ">
   
      <div onClick={() => setIsMenuOpen(true)} className="absolute top-3 left-4 z-50 cursor-pointer ">
        <FaBars size={22} />
      </div>

     
      {isMenuOpen && (
        <>
        
          <div
            className="fixed inset-0  bg-opacity-30 z-30"
            onClick={() => setIsMenuOpen(false)}
          />

          
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-40 shadow-md">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <FaUserCircle size={20} />
                <span className="font-semibold">Login</span>
              </div>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            <ul className="p-4 font-semibold space-y-3 text-gray-700">
              <li className="hover:bg-gray-100 p-2 rounded hover:cursor-pointer">Home</li>
              <li className="hover:bg-gray-100 p-2 rounded hover:cursor-pointer">Your Orders</li>
              <li className="hover:bg-gray-100 p-2 rounded hover:cursor-pointer">Your Wishlist</li>
              <li className="hover:bg-gray-100 p-2 rounded hover:cursor-pointer">Your Cartlist</li>
              <li className="hover:bg-gray-100 p-2 rounded hover:cursor-pointer">About Us</li>
              <li className="hover:bg-gray-100 p-2 rounded hover:cursor-pointer">Contact Us</li>
              <li className="hover:bg-gray-100 p-2 rounded hover:cursor-pointer">Help!</li>
            </ul>
          </div>
        </>
      )}
      </div>

   
    <Link to="/"><img src="https://images-static.nykaa.com/fashion-images/pub/media/logo-full.svg"                
                className="w-25  hover:text-white h-17  ml-17 rounded-4xl hover:cursor-pointer "
                /></Link>
                <ul className="flex gap-4 font-bold ml-6 mt-6 ">
                    <li className="hover:text-pink-600 hover:cursor-pointer">Women</li>
                    <li className="hover:text-pink-600 hover:cursor-pointer">Men</li>
                    <li className="hover:text-pink-600 hover:cursor-pointer">Kids</li>
                    <li className="hover:text-pink-600 hover:cursor-pointer">Home</li>
                    <li className="hover:text-pink-600 hover:cursor-pointer">All Brands</li>
                </ul>
                <div className="flex">
                  <div className="bg-gray-100 w-8 h-9 mt-4 ml-5">
               <IoMdSearch className="w-10 h-6 mt-2"/></div>
                <input type="search"
                placeholder=" Search On Nykaa..."
                className="shadow w-80 h-10 bg-gray-100  mt-4 "
                />
                <button className="w-20 h-10 bg-pink-600 mt-4 ml-3 rounded-2xl text-white font-semibold hover:cursor-pointer"> Sign in</button>
                
                  <Link to="/account"><RiAccountCircleLine className="w-10 h-7 mt-5 ml-2"/>
              <p className="font-semibold ml-11 -mt-7">Account</p></Link>

                <Link to="/wishlist"><FaRegHeart  className="w-10 h-6 mt-5 ml-2"/>
                <p className="font-semibold  ml-11 -mt-6">Wishlist</p></Link> 
                <Link to="/cart"><IoBagOutline className="w-10 h-6 mt-5 ml-2"/>
                <p className="font-semibold ml-10 -mt-6">Cart</p></Link>

                
                </div>

            </div>
         </div>
         
            

    )
}
export default NavBar;