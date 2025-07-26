import { useLocation } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
function Product(){
    const location = useLocation();

     const item = location.state?.itemData;
     if (!item) return <div>No product data found.</div>;
    return(
         <div className="max-w-6xl mx-auto p-8 mt-10 shadow-lg rounded-xl bg-white">
      <div className="flex flex-col md:flex-row gap-10">
      
        <div className="flex-1">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

      
        <div className="flex-1">
          
          <div className="flex gap-2 text-sm text-blue-600 font-semibold mb-2">
            {item?.tag?.[0]?.title && <p>{item.tag[0].title}</p>}
            {item?.tag?.[1]?.title && <p>| {item.tag[1].title}</p>}
          </div>

        
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <p className="text-gray-500 text-base">{item.subTitle}</p>

       <div className="flex">
          <div className="flex items-center text-2xl font-semibold mt-4">
            <MdCurrencyRupee className="mr-1" />
            {item.discountedPrice}
          </div>
          <div className=" ml-2 mt-5 ">
            <p className="text-emerald-600 text-[19px] font-semibold">{item.discount}% Off</p>
          </div>
          </div>
         <div className="flex">
          <p className="text-sm text-gray-600 mt-1">
            MRP
          </p>
          <p className="text-sm font-semibold text-gray-600 mt-1 line-through ml-1"> {item.price} </p>
          <p className="text-sm text-gray-600 mt-1 ml-1">Inclusive of all taxes</p>
          </div>

          
          <hr className="my-6 border-gray-300" />
        
         {item.sizeVariation?.length > 0 &&(
            <div>
              <div className="flex justify-between items-center mb-2">
            <p className="font-semibold text-lg">Select Size</p>
            <p className="text-pink-600 font-medium cursor-pointer text-sm">
              Size Guide
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            { item.sizeVariation?.map((size) => (
              <button
                key={size.id}
                className="border px-4 py-1 rounded-full hover:bg-gray-300 border-b-gray-300 border-t-gray-300 border-l-gray-300 border-r-gray-300 transition"
              >
                {size.title}
              </button>
            ))}
            
          </div>
          </div>

         )}
        
        
          
        </div>
      </div>
    </div>
    )
}
export default Product;