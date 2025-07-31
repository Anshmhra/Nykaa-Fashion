import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { CiCircleInfo } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
function Cart(){
    const {CartProduct =[]}=useCart();
    return(
        <div>
             {CartProduct.length === 0 ? (
        <div>
          <img
            src="https://asset.nykaafashion.com/static/assets/empty-cart.78c2794133.png" 
            alt="Empty Cart"
            className="ml-[33rem] mt-20 w-80"
          />
          <h1 className="mt-8 ml-128 text-2xl font-bold text-gray-800">
            Your Shopping Bag is empty!
          </h1>
          <p className="ml-[28rem] mt-2 font-semibold text-gray-600">
            Looks like you haven’t added anything to your bag. Let’s change that.
          </p>
          
          <Link to={"/"}>
          <div className="ml-[34rem] bg-gray-800 mt-5 p-3 w-[14rem] rounded-2xl hover:cursor-pointer hover:scale-95 duration-300 hover:bg-gray-600">
            <p className="text-amber-50 font-bold flex justify-center align-middle">Back to Shopping</p>
          </div>
          </Link>
        </div>
      ) : (
        <div className="w-7xl shadow-2xl m-10 h-140 mt-10 rounded-2xl">
  <ul className="space-y-6 ml-14">
    {
      CartProduct.map((item, id) => (
        <li key={id}>
          <div className="shadow w-300 rounded mt-4 h-49 flex">
            <img
              src={item.imageUrl}
              alt={id}
              className="ml-3 w-37 h-47 rounded"
            />
            <div className="ml-8 mt-5">
            <p className="font-semibold text-[18px]">{item.title}</p>
            <p className="text-gray-700 font-semibold text-[16px]">{item.subTitle}</p>
            <div className="flex mt-5">
                {
                    item?.selectedSize &&(
                        <div className="flex">
                       <p className="">size</p>
                       <p className="font-semibold ml-2">{item.selectedSize}</p></div>
                    )
                }
                {
                 item?.selectedColor && (
                 <div className="flex items-center ">
                 <p className="mr-3 font-semibold text-gray-700">Color </p>
                 <div
                  className="w-5 h-5 rounded-full border border-gray-400"
                  style={{ backgroundColor: item.selectedColor }}
                  title={item.selectedColor}
                 ></div>
                </div>
                )
               }

                
            </div>
            <p className="text-gray-700 font-semibold text-[14px]">7 Days Return</p>
            </div>
            <div className="flex align-middle ml-8 mt-7">
                <CiCircleInfo className=""/>
                <p className="text-gray-700 ml-2 -mt-1">You pay</p>
                <BsCurrencyRupee className="ml-1 mt-1 font-semibold"/>
                <p className=" font-semibold">{item.discountedPrice}</p>


            </div>
            <div className="flex mt-14 -ml-27">
                <p className="text-[14px] text-emerald-700">{item.discount}% Off</p>
                <BsCurrencyRupee className="ml-1 mt-1 font-semibold line-through text-[14px]"/>
                <p className="font-semibold line-through text-[14px]">{item.price}</p>
            </div>
          </div>
        </li>
      ))
    }
  </ul>
</div>

      )}
       
        
        </div>
    )
}
export default Cart;