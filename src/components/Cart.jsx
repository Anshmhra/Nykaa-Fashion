import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { CiCircleInfo } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
function Cart() {
  const { CartProduct = [], removeFromCart,additionInProduct,decreasInProduct } = useCart();

  return (
    <div className="">
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
              <p className="text-amber-50 font-bold flex justify-center align-middle">
                Back to Shopping
              </p>
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center mt-10 mb-10">
          <div className="bg-white shadow-2xl w-[720px] rounded-2xl p-6">
            <ul className="space-y-6">
              {CartProduct.map((item, id) => (
                
                <li key={id}>
  <div className="flex gap-5 items-start rounded-xl shadow p-4 w-150 ml-10">
    <img
      src={item.imageUrl}
      alt={id}
      className="w-36 h-44 rounded object-cover"
    />

    <div className="flex-1">
      <p className="font-semibold text-[18px]">{item.title}</p>
      <p className="text-gray-700 font-semibold text-[16px] w-60 truncate overflow-hidden whitespace-nowrap">{item.subTitle}</p>

      <p className="text-gray-700 font-semibold text-[14px] mt-2">7 Days Return</p>

      <div className="mt-2">
        <div className="flex items-center text-sm text-gray-700">
          <CiCircleInfo />
          <p className="ml-2">You pay</p>
          <BsCurrencyRupee className="ml-1 mt-[2px]" />
          <p className="font-semibold">{item.discountedPrice * item.quantity}</p>
        </div>

        <div className="flex gap-2 text-[14px] text-emerald-700 mt-1">
          <p>{item.discount}% Off</p>
          <BsCurrencyRupee className="mt-[2px] line-through text-gray-500" />
          <p className="font-semibold line-through text-gray-500">{item.price * item.quantity}</p>
        </div>
      </div>

      {(item?.selectedSize || item?.selectedColor) && (
        <div className="flex gap-8 mt-3">
          {item?.selectedSize && (
            <div className="flex items-center gap-2">
              <p>Size:</p>
              <p className="font-semibold">{item.selectedSize}</p>
            </div>
          )}
          {item?.selectedColor && (
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-700">Color:</p>
              <div
                className="w-5 h-5 rounded-full border border-gray-400"
                style={{ backgroundColor: item.selectedColor }}
                title={item.selectedColor}
              ></div>
            </div>
          )}
        </div>
      )}
    </div>

    
   
    <div className="flex items-center gap-2 mt-20 -ml-5 font-semibold">
      <span className="text-sm font-semibold">Quantity</span>
      <div className="flex items-center gap-5 text-lg border rounded w-auto hover:border-emerald-600">
        <button  onClick={()=>decreasInProduct(item?.id)} className="ml-2 hover:cursor-pointer hover:scale-97 duration-500 font-bold text-[17px] hover:text-green-700">-</button>
   <p className="mx-2 font-semibold">{item.quantity}</p>
        <button onClick={()=>additionInProduct(item?.id)} className=" hover:cursor-pointer hover:scale-97 duration-500 font-bold text-[17px] hover:text-green-700">+</button>
      </div>
    </div>

    <button
      onClick={() => removeFromCart(item?.id)}
      className="hover:cursor-pointer -ml-5  "
    >
      <CiCircleRemove className="w-7 h-8  hover:text-red-800" />
    </button>
    
      
   
  </div>
</li>

              ))}

              <div className="border mt-10 px-6 py-4 rounded-lg shadow-sm">
  <p className="font-semibold text-[18px] mb-4">Price Summary</p>

  <div className="flex justify-between mb-2 text-gray-700">
    <p>Bag Total</p>
    <p className="flex items-center font-medium">
      <BsCurrencyRupee className="mr-1" />
      {CartProduct.reduce((acc, item) => acc + item.price * item.quantity, 0)}
    </p>
  </div>

  <div className="flex justify-between mb-2 text-gray-700">
    <p>Sub Total</p>
    <p className="flex items-center font-medium">
      <BsCurrencyRupee className="mr-1" />
      {CartProduct.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0)}
    </p>
  </div>

  <div className="flex justify-between mb-2 text-gray-700">
    <p>Discounted Price</p>
    <p className="flex items-center font-medium text-green-600">
      -<BsCurrencyRupee className="mr-1" />
      {
        CartProduct.reduce(
          (acc, item) =>
            acc + (item.price - item.discountedPrice) * item.quantity,
          0
        )
      }
    </p>
  </div>

  <div className="flex justify-between mb-2 text-gray-700">
    <p>Convenience Charges</p>
    <p className="text-emerald-700 font-semibold">Free</p>
  </div>

  <hr className="my-3" />

  <div className="flex justify-between text-lg font-semibold">
    <p>You Pay</p>
    <p className="flex items-center text-gray-800">
      <BsCurrencyRupee className="mr-1" />
      {CartProduct.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0)}
    </p>
  </div>
</div>

              

            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
