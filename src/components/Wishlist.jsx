import { useWishlist } from "../Context/WishlistContext";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiCircleInfo, CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishItems, removeFromWishlist } = useWishlist();

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
        <div className="mt-8  hover:scale-98  duration-300">
        <Link to="/" className="border bg-gray-800 text-white font-semibold p-5  rounded-2xl hover:bg-gray-500">
        Go back to Shopping
        </Link></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="bg-white shadow-2xl w-[720px] rounded-2xl p-6">
        <ul className="space-y-6">
          {wishItems.map((item, index) => (
            <li key={index}>
              <div className="flex gap-5 items-start rounded-xl shadow p-4 w-150 ml-10">
          
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-36 h-44 rounded object-cover"
                />

              
                <div className="flex-1">
                  <p className="font-semibold text-[18px]">{item.title}</p>
                  <p className="text-gray-700 font-semibold text-[16px] w-60 truncate overflow-hidden whitespace-nowrap">
                    {item.subTitle}
                  </p>

                  <p className="text-gray-700 font-semibold text-[14px] mt-2">
                    7 Days Return
                  </p>

             
                  <div className="mt-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CiCircleInfo />
                      <p className="ml-2">You pay</p>
                      <BsCurrencyRupee className="ml-1 mt-[2px]" />
                      <p className="font-semibold">{item.discountedPrice}</p>
                    </div>

                    <div className="flex gap-2 text-[14px] text-emerald-700 mt-1">
                      <p>{item.discount}% Off</p>
                      <BsCurrencyRupee className="mt-[2px] line-through text-gray-500" />
                      <p className="font-semibold line-through text-gray-500">
                        {item.price}
                      </p>
                    </div>
                  </div>

               
                  {item?.sibling_colour_codes?.length > 0 && (
                    <div className="flex items-center gap-2 mt-2">
                      {item.sibling_colour_codes.slice(0, 4).map((color, idx) => (
                        <div
                          key={idx}
                          className="w-5 h-5 rounded-full border border-gray-400"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></div>
                      ))}
                      {item.sibling_colour_codes.length > 4 && (
                        <span className="text-sm text-gray-500">
                          +{item.sibling_colour_codes.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                
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

             
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="hover:cursor-pointer mt-20 -ml-5"
                >
                  <CiCircleRemove className="w-7 h-8 hover:text-red-800" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;
