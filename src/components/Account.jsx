function Account(){
    return(
        <div className=" ml-90 shadow-2xl p-4 w-170 h-120 mt-10 rounded-2xl">
            <img src="https://images-static.nykaa.com/nykdesignstudio-images/pub/media/mobileVerification_background_image.png"
            className="ml-136 -mt-4 overflow-hidden object-cover"
            />
            <div className="p-5 ml-6 -mt-9">
                <div className="ml-3">
                 <h1 className="text-[22px] font-semibold text-gray-600">Login Using Mobile</h1>
                 <div className="mt-3 text-gray-700 ">
                 <p className="">Kindly enter the 10-digit mobile number</p>
                 <p>and verify using OTP.</p>
                 </div>
                 </div>

                 <div className="w-80 bg-gray-300 mt-3 h-17 p-3 rounded">
                    <p className="ml-1 text-gray-700">Mobile Number</p>
                    <div className="flex">
                        <p className="text-gray-700">+91</p>
                        <input type="tel"placeholder=" xxx-xxx-xxxxx" className="text-gray-600 border-none  hover:cursor-pointer"/>                    
                        </div>

                 </div>
                 
                 <div className="w-80 bg-black text-white h-17 font-semibold mt-3 p-3 rounded">
                    <p className="flex justify-center mt-2 hover:cursor-pointer">Submit</p>

                 </div>
                 <p className="text-gray-600 mt-3 w-84">By signing in, I agree to Terms & Conditions, and Privacy Policy</p>
            </div>
           

        </div>
    )
}
export default Account;