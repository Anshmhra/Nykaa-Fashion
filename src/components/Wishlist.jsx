import { useWishlist } from "../Context/WishlistContext";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext"; 

function Wishlist() {
  const { wishItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishItems.length === 0) {
    return (
      <div className="text-center mt-20 mb-10">
        <img
          src="https://skorganic.co.in/images/icrm/wishlist/empty_wishlist.svg"
          alt="Empty Wishlist"
          className="mx-auto w-80"
        />
        <h1 className="mt-8 text-2xl font-bold text-gray-800">
          Your Wishlist is Empty
        </h1>
        <p className="mt-2 font-semibold text-gray-600">
          Looks like you haven’t added anything yet.
        </p>
        <div className="mt-8 hover:scale-98 duration-300">
          <Link
            to="/"
            className="border bg-gray-800 text-white font-semibold p-5 rounded-2xl hover:bg-gray-500"
          >
            Go back to Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-20 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 ml-15">My Wishlist</h1>

      <div className="flex flex-wrap justify-start gap-6">
        {wishItems.map((item, index) => (
          <div
            key={index}
            className="w-[280px] bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4 relative"
          >
          
            <button
              onClick={() => removeFromWishlist(item)}
              className="absolute top-2 right-2 text-gray-800 hover:text-red-600"
            >
              <CiCircleRemove className="w-6 h-6 bg-gray-400 rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-2xl hover:bg-rose-500 text-white" />
            </button>

           
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[320px] object-contain rounded-md"
            />

          
            <div className="mt-4">
              <p className="font-bold text-[15px] text-gray-800 truncate">{item.title}</p>
              <p className="text-sm text-gray-600 truncate">{item.subTitle}</p>

            
              <div className="mt-2">
                <div className="flex items-center gap-1 font-semibold text-[15px]">
                  <BsCurrencyRupee />
                  {item.discountedPrice}
                </div>
                <div className="flex gap-2 text-sm mt-1 text-gray-500">
                  <span className="line-through">₹{item.price}</span>
                  <span className="text-green-600 font-medium">{item.discount}% Off</span>
                </div>
              </div>

          
              {item?.sibling_colour_codes?.length > 0 && (
                <div className="flex items-center gap-2 mt-3">
                  {item.sibling_colour_codes.slice(0, 4).map((color, idx) => (
                    <div
                      key={idx}
                      className="w-5 h-5 rounded-full border"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                  {item.sibling_colour_codes.length > 4 && (
                    <span className="text-xs text-gray-500">
                      +{item.sibling_colour_codes.length - 4} more
                    </span>
                  )}
                </div>
              )}

        
              {(item.selectedSize || item.selectedColor) && (
                <div className="flex gap-4 mt-3 text-sm text-gray-700">
                  {item.selectedSize && (
                    <span>
                      Size: <b>{item.selectedSize}</b>
                    </span>
                  )}
                  {item.selectedColor && (
                    <span className="flex items-center gap-1">
                      Color:
                      <div
                        className="w-4 h-4 rounded-full border border-gray-400"
                        style={{ backgroundColor: item.selectedColor }}
                      ></div>
                    </span>
                  )}
                </div>
              )}

            
              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full py-2 text-center text-sm font-medium border rounded-md hover:bg-black hover:text-white transition"
              >
                Move to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
