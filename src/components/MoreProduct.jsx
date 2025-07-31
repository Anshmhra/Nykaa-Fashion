import { useLocation } from "react-router-dom";
import { useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";
function MoreProduct(){

    const location = useLocation();
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

     const atom = location.state?.itemData;
     if (!atom) return <div>No product data found.</div>;
    return(
       <div className="max-w-7xl mx-auto p-8 mt-10 shadow-lg rounded-xl bg-white">
             <div className="flex flex-col md:flex-row gap-10">

              
        <div className="overflow-y-auto scrollbar-hide h-90 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
          {
            atom.plp_pdp_bridge?.images?.map((sideView,dude)=>(
            
              <div className="" key={dude}>
              <img src={sideView.url}
              alt={dude}
              className="w-30 h-38 mt-3 hover:cursor-pointer"
              /></div>
            ))
          }
        </div> 
             
               <div className="flex-1">
                 <img
                   src={atom.imageUrl}
                   alt={atom.name}
                   className="w-full h-auto object-cover rounded-xl"
                 />
               </div>
       
             
               <div className="flex-1">
                 
                 <div className="flex gap-2 text-sm text-blue-600 font-semibold mb-2">
                   {atom?.tag?.[0]?.title && <p>{atom.tag[0].title}</p>}
                   {atom?.tag?.[1]?.title && <p>| {atom.tag[1].title}</p>}
                 </div>
       
               
                 <h1 className="text-2xl font-semibold">{atom.title}</h1>
                 <p className="text-gray-500 text-base">{atom.subTitle}</p>
       
              <div className="flex">
                 <div className="flex items-center text-2xl font-semibold mt-4">
                   <MdCurrencyRupee className="mr-1" />
                   {atom.discountedPrice}
                 </div>
                 <div className=" ml-2 mt-5 ">
                   <p className="text-emerald-600 text-[19px] font-semibold">{atom.discount}% Off</p>
                 </div>
                 </div>
                <div className="flex">
                 <p className="text-sm text-gray-600 mt-1">
                   MRP
                 </p>
                 <p className="text-sm font-semibold text-gray-600 mt-1 line-through ml-1"> {atom.price} </p>
                 <p className="text-sm text-gray-600 mt-1 ml-1">Inclusive of all taxes</p>
                 </div>
       
                 
                 <hr className="my-6 border-gray-300" />
       
                     {Array.isArray(atom.sibling_colour_codes) && atom.sibling_colour_codes.length > 0 && (
                 <div className="mb-4 ml-3">
                   <p className="font-semibold text-lg mb-1">Select Color</p>
                   <div className="flex gap-2 items-center">
                     {atom.sibling_colour_codes.slice(0, 4).map((color, index) => (
                       <div
                         key={index}
                         onClick={() =>
                           setSelectedColor(prev=>prev === color ? null : color)}
                         className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-transform duration-200 hover:cursor-pointer ${
                           selectedColor === color ? "border-pink-500 scale-110" : "border-gray-300"
                         }`}
                         style={{ backgroundColor: color }}
                         title={color}
                       />
                     ))}
                     {atom.sibling_colour_codes.length > 4 && (
                       <span className="text-xs text-gray-500">
                         +{atom.sibling_colour_codes.length - 4} more
                       </span>
                     )}
                   </div>
                 </div>
               )}
       
       
       
       
               
                {atom.sizeVariation?.length > 0 &&(
                   <div>
                     <div className="flex justify-between items-center mb-2">
                   <p className="font-semibold text-lg">Select Size</p>
                   <p className="text-pink-600 font-medium cursor-pointer text-sm">
                     Size Guide
                   </p>
                 </div>
       
                 <div className="flex gap-3 flex-wrap">
                   { atom.sizeVariation?.map((size) => (
       
                     <button
                       key={size.id}
                       onClick={() => 
                         setSelectedSize(prev=>prev === size.title ? null : size.title)
                       }
       
                       className={`border px-4 py-1 rounded-full transition hover:cursor-pointer
                       ${
                      selectedSize === size.title
                      ? "bg-pink-500 text-white border-pink-500"
                      : "hover:bg-gray-200 text-gray-800 border-gray-300"
                      }`}
                      >
                       {size.title}
                     </button>
       
                   ))}
                   
                 </div>
                 </div>
       
                )}
       
               <RiHeartAddLine className=" absolute ml-40 mt-14 w-8 h-6"/> <button className="text-[18px] font-semibold mt-10  w-100 h-15 border  rounded-2xl relative ml-15">Add to Wishist</button>
               <button className="text-[18px] font-semibold mt-10  w-100 h-15 border  rounded-2xl relative ml-15 bg-black text-white">Add to Bag</button>
               
               
               
                 
               </div>
             </div>
           </div>
           )
    
}
export default MoreProduct;