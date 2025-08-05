import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes, FaUserCircle, FaRegHeart } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { TbMathGreater } from "react-icons/tb";
import { IoSaveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useProductCache } from "../Context/SearchContext";
import debounce from "lodash.debounce";
import searchProduct from "./SearchProduct";



function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { CartProduct } = useCart();
  const { searchProductsGlobally } = useProductCache();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const debouncedSearch = useCallback(
    debounce((text) => {
      const filtered = searchProductsGlobally(text);
      setResults(filtered);
    }, 300),
    [searchProductsGlobally]
  );

  useEffect(() => {
    if (query.trim() === "") setResults([]);
  }, [query]);

  return (
    <div>
      <div className="bg-black h-8 text-white w-338">
        <nav>
          <ul className="flex justify-end gap-6 mr-20">
            <MdPhoneAndroid className="mt-1" />
            <li className="-ml-5 hover:text-white">App Download</li>
            <IoIosHelpCircleOutline className="mt-1" />
            <li className="-ml-5 hover:text-white">Help</li>
          </ul>
        </nav>
      </div>

      <div className="flex h-18 content-center shadow border-b-gray-400">
    
        <div className="relative z-50">
          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(true)}
              className="absolute top-3 left-4 cursor-pointer"
            >
              <FaBars size={22} />
            </div>
          )}

          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-64 h-full bg-white z-40 shadow-md">
              <div className="flex items-center justify-between p-4 border-b">
                <Link to="account" className="flex items-center gap-2">
                  <FaUserCircle size={20} />
                  <span className="font-semibold">Login</span>
                </Link>
                <FaTimes
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <ul className="p-4 font-semibold space-y-3 text-gray-700">
                <Link to="/" className="hover:bg-gray-100 p-2 rounded cursor-pointer"><p>Home</p></Link>
                <Link to=""className="hover:bg-gray-100 p-2 rounded cursor-pointer"><p>Your Orders</p></Link>
                <Link to="wishlist" className="hover:bg-gray-100 p-2 rounded cursor-pointer"><p>Your Wishlist</p></Link>
                <Link to="cart"className="hover:bg-gray-100 p-2 rounded cursor-pointer"><p>Your Cartlist</p></Link>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">About Us</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Contact Us</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Help!</li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/">
          <img
            src="https://images-static.nykaa.com/fashion-images/pub/media/logo-full.svg"
            className="w-25 hover:text-white h-17 ml-17 rounded-4xl hover:cursor-pointer"
          />
        </Link>

      
        <ul className="flex gap-4 font-bold ml-6 mt-6">
          <Link to={`/circle?brandId=6557`}><li className="hover:text-pink-600">Women</li></Link>
          <Link to={`/circle?brandId=6823`}><li className="hover:text-pink-600">Men</li></Link>
          <Link to={`/circle?brandId=6266`}><li className="hover:text-pink-600">Kids</li></Link>
          <Link to={`/circle?brandId=8528`}><li className="hover:text-pink-600">Home</li></Link>

          <div className="relative group">
            <li className="hover:text-pink-600">More</li>
            <div className="absolute top-10 left-0 bg-white w-176 p-4 shadow-xl rounded-md hidden group-hover:flex gap-4 z-50">
              <Link to={`/circle?brandId=57205`}>
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/women/whats_new/discover_tile_2_.jpg" className="w-40 h-50 object-cover rounded" />
              </Link>
              <Link to={`/circle?brandId=7266`}>
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/Sale/Hidden-Gems.jpg" className="w-40 h-50 object-cover rounded" />
              </Link>
              <Link to={`/circle?brandId=6557`}>
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/Sale/Global-Store.jpg" className="w-40 h-50 object-cover rounded" />
              </Link>
              <Link to={`/circle?brandId=14334`}>
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/mm_images/Sale/Revolve_1.jpg" className="w-40 h-50 object-cover rounded" />
              </Link>
            </div>
          </div>
        </ul>


        <div className="relative">
          <div className="flex items-center bg-gray-100 rounded-md px-3 h-12 mt-4 ml-5 w-[22rem] shadow">
            <IoMdSearch className="text-gray-600 w-5 h-5" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                debouncedSearch(value);
              }}
              placeholder="Search On Nykaa..."
              className="bg-gray-100 outline-none px-3 py-2 w-full text-sm"
            />
          </div>

          {query && (
            <div className="absolute left-5 top-16 w-[22rem] max-h-96 overflow-y-auto bg-white shadow-lg rounded-md z-50">
              {results.length === 0 ? (
                <p className="p-4 text-sm text-gray-500">No products found.</p>
              ) : (
                results.map((product, index) => (
                  <Link
                    to="/searchProduct"
                     state={{ itemData: product }}
                    key={index}
                    className="flex items-center p-2 gap-2 hover:bg-gray-100 transition"
                  >
                    <img src={product.imageUrl} alt={product.title} className="w-10 h-10 object-contain" />
                    <div>
                      <p className="text-sm font-semibold">{product.title}</p>
                      <p className="text-xs text-gray-500">₹{product.discountedPrice}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>

    
        <button className="w-20 h-10 bg-pink-600 mt-4 ml-3 rounded-2xl text-white font-semibold">Sign in</button>
       <div className="relative group cursor-pointer mt-4 ml-4">
  <div className="flex flex-col items-center">
    <RiAccountCircleLine className="w-7 h-7 -ml-16 mt-1" />
    <p className="font-semibold  ml-7 -mt-7">Account</p>
  </div>

  <div className="absolute top-full right-0 mt-3 bg-white w-64 p-4 shadow-xl rounded-md z-50 hidden group-hover:block text-left">
    <p className="text-[12px] text-gray-700 leading-5">
      Becoming a Nykaa Fashion member comes with easy order tracking, rewards, offers and more.
    </p>

    <Link to="/account" className="flex items-center mt-3 text-pink-600 font-semibold text-[14px] hover:underline">
      Login/Signup Now
      <TbMathGreater className="ml-1 text-pink-500" />
    </Link>

    <div className="mt-4 flex items-center gap-2">
      <IoSaveOutline className="text-gray-600" />
      <p className="text-gray-700 font-semibold text-[14px]">Orders</p>
    </div>
  </div>
</div>


       <Link to="wishlist" className="hover:bg-gray-100 p-2 rounded cursor-pointer  font-semibold ml-10 mt-4 gap-1 flex">
     < FaRegHeart className="-ml-7 m w-6 h-5"/> 
  Wishlist
</Link>


       <Link to="/cart" className="relative ml-2  flex items-center ">
  <IoBagOutline className="w-10 h-6 -mt-3" />
  <span className="font-semibold -mt-1">Cart</span>

  {CartProduct.length > 0 && (
    <div className="absolute -top-2 left-7 bg-red-800 text-amber-50 w-5 h-5 text-xs font-bold rounded-full flex justify-center items-center mt-4 ml-9 -">
      {CartProduct.length}
    </div>
  )}
</Link>

      </div>
    </div>
  );
}

export default NavBar;
