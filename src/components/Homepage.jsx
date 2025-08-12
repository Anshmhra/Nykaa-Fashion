import { useState,useEffect,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useProductCache } from "../Context/SearchContext";
import HorizonatalCarousel from "./ScrollingHorizontal";

function HomePage(){

     const navigate = useNavigate();
  const { addProductsToCache,setSyrax } = useProductCache();

const handleImageClick = async (id, urlPath) => {
  try {
    let isBrand = urlPath.includes("brandId");

    let url = isBrand
      ? `https://www.nykaafashion.com/rest/appapi/v2/brands/products?brandId=${id}&PageSize=36&sort=popularity&currentPage=1&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_windows`
      : `https://www.nykaafashion.com/rest/appapi/V2/categories/products?categoryId=${id}&PageSize=36&sort=popularity&currentPage=1&filter_format=v2&currency=INR&country_code=IN&apiVersion=5&deviceType=MSITE&device_os=mweb_windows`;

   

    const response = await fetch(url);
 

    const data = await response.json();


    const products = data.response?.products || data.products || [];
    const seoInfo = data.response?.seo_info || data.seo_info;

    console.log("Products:", products);


    if (!Array.isArray(products)) {
      throw new Error("Products is not an array");
    }

   
    try {
      addProductsToCache(id, products);
      if (seoInfo) setSyrax(seoInfo);
    } catch (innerErr) {
      console.error("Error in context functions:", innerErr);
      throw innerErr; 
    }

    navigate(urlPath);
  } catch (err) {
    console.error("Error caught in handleImageClick:", err);
  }
};



      const containerRef = useRef(null);
      useEffect(()=>{
          const container = containerRef.current;
             const interval = setInterval(() => {
       if (container) {
         const { scrollLeft, scrollWidth, clientWidth } = container;
         const isEnd = scrollLeft + clientWidth >= scrollWidth;

         container.scrollTo({
          left: isEnd ? 0 : scrollLeft + clientWidth,
           behavior: "smooth",
         });
       }
    }, 8000);

     return () => clearInterval(interval);
   }, []);



    return(
        <div className="ml-1 lg:ml-1">
            <div>
                <div  onClick={()=>handleImageClick(74296,`/rendring?categoryId=74296`)}><img src="https://images-static.nykaa.com/uploads/e8e8c9be-714d-4464-83ca-3c40be53fe41.jpg?tr=w-1200,cm-pad_resize"
                className="w-[1270px] ml-8 rounded-2xl mt-4 hover:cursor-pointer hover:scale-95 duration-300 sm:w-40 lg:w-320 "
                /></div>
                <div className="ml-12 mt-6">
                <p className="text-[18px] font-semibold text-gray-500">Our Stores</p>
                <p className="text-[20px] font-semibold">Find everything for your every need</p>
                </div>

            
               


               <HorizonatalCarousel  handleImageClick={handleImageClick}/>
              
            

               
            </div>

            <div className="flex overflow-x-auto overflow-hidden scrollbar-hide mr-20 ml-15 mt-6 pointer-events-auto "ref={containerRef}>
            <div className="ml-1 mt-8 flex-shrink-0 w-[1248px] hover:cursor-pointer  ">
             <div className="flex ">
            <div onClick={()=>handleImageClick(57205,`/rendring?categoryId=57205`)}><img src="https://images-static.nykaa.com/uploads/2c60c4f0-fd46-460a-a549-c68b0511da0d.jpg?tr=w-300,cm-pad_resize"
            className=" "
            /></div>
            <div onClick={()=>handleImageClick(57205,`/rendring?categoryId=57205`)}><img src="https://images-static.nykaa.com/uploads/6129c9d8-9b96-4b00-a6ff-d8e1ba059abe.jpg?tr=w-300,cm-pad_resize"
            /></div>
            <div onClick={()=>handleImageClick(652,`/rendring?categoryId=652`)} ><img src="https://images-static.nykaa.com/uploads/3e8eaaca-99ea-40c6-9740-f193e1798b37.jpg?tr=w-300,cm-pad_resize"
            /></div>
            <div onClick={()=>handleImageClick(3,`/rendring?categoryId=3&new_tags_filter=luxe&occasion_filter=31659_31760`)} ><img src="https://images-static.nykaa.com/uploads/5703d929-e825-4673-819b-e30694640d21.jpg?tr=w-300,cm-pad_resize"
            /></div>
            </div>
            <div className="flex">
           <div onClick={()=>handleImageClick(57205,`/rendring?categoryId=57205`)}><img src="https://images-static.nykaa.com/uploads/dc45b5f1-8b81-452d-9b9a-33434377dc61.jpg?tr=w-300,cm-pad_resize"
            /></div> 
             <div onClick={()=>handleImageClick(57205,`/rendring?categoryId=57205`)} ><img src="https://images-static.nykaa.com/uploads/8286489c-2d2b-4891-aaba-485cac019e92.jpg?tr=w-300,cm-pad_resize"
            /></div>
            <div onClick={()=>handleImageClick(3,`/rendring?categoryId=3&new_tags_filter=luxe&pattern_filter=1588_333`)}><img src="https://images-static.nykaa.com/uploads/bea04ddc-9c81-4c9b-a539-a7642054ce65.jpg?tr=w-300,cm-pad_resize"
            /></div>
            <div onClick={()=>handleImageClick(57205,`/rendring?categoryId=57205&category_filter=10_153_155_156_159_164_3907_3908_3909_4497_4542_4543_5_5040_5262_57387_6264_647_6492_6498_652_66_662_69_7_7623_7630_8522_9237_9729`)}><img src="https://images-static.nykaa.com/uploads/0c425ece-4844-41cd-a5d9-d333aa443071.jpg?tr=w-300,cm-pad_resize"
            /></div>
            </div>
            </div>

            <div className=" mt-8 flex-shrink-0 w-full overflow-x-auto scrollbar-hide -mr-50  hover:cursor-pointer ">
            <div className="flex ">
                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266`)} ><img src="https://images-static.nykaa.com/uploads/93ad2e6f-449b-46ee-a412-03bd46ba46cf.jpg?tr=w-300,cm-pad_resize"
                /></div>
                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266`)}><img src="https://images-static.nykaa.com/uploads/a82b7c46-9a0f-458f-aad5-98a3b0590ebe.jpg?tr=w-300,cm-pad_resize"
                /></div>
                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266&category_filter=10_156_164_3907_3908_4543_5040_647_6498_652_662_69_7555_7630_8522`)}><img src="https://images-static.nykaa.com/uploads/8555b963-8234-4208-8d61-f0aacbdb9d8e.jpg?tr=w-300,cm-pad_resize"
                /></div>
                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266&currentPage=1&brand_filter=11089_11344_126_16567_17302_17866_18406_18647_18895_18991_4481_51284_51933_52066_53150_53475_53571_53588_53696_9575`)}><img src="https://images-static.nykaa.com/uploads/2e67c9bc-4723-4394-8524-45b9605dad67.jpg?tr=w-300,cm-pad_resize"
                /></div>
             </div>

             <div className="flex">

                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266`)} ><img src="https://images-static.nykaa.com/uploads/3c7f5d87-4153-4a77-86c5-e7e06a4e3d0a.jpg?tr=w-300,cm-pad_resize"
                /></div>
                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266`)} ><img src="https://images-static.nykaa.com/uploads/9501565b-945c-45c4-bb7b-1e45411f0cef.jpg?tr=w-300,cm-pad_resize"
                /></div>
                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266&currentPage=1&category_filter=153_155_159_3909_4497_4542_5_5262_6264_6492_66_7_7623`)}><img src="https://images-static.nykaa.com/uploads/88017de3-00ed-4f2d-9945-947d5e1221a1.jpg?tr=w-300,cm-pad_resize"
                /></div>
                <div onClick={()=>handleImageClick(7266,`/rendring?categoryId=7266&sort=popularity&category_filter=4542`)}><img src="https://images-static.nykaa.com/uploads/fa66ba24-b82c-479d-b108-9e7be02188ab.jpg?tr=w-300,cm-pad_resize"
                /></div>
                </div>
                </div>
                </div>
            

                 <div className=" ml-3 lg:ml-15 mt-5 ">
                <p className="font-semibold text-gray-500">IN THE SPOTLIGHT</p>
                <p className="text-2xl  font-semibold">Hottest brands on offer</p>
                </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 gap-x-1  lg:ml-[56px] mt-7 mr-2 lg:mr-8 relative z-0">
  
  {[
    { id: 4495, img: "https://images-static.nykaa.com/uploads/4ee71bd4-d592-4667-8a93-821f1bc21e0c.jpg?tr=w-240,cm-pad_resize", title: "Up to 50% off", desc: "Stylish & elegant dresses" },
    { id: 4240, img: "https://images-static.nykaa.com/uploads/8139734a-fb9b-40e0-a3a5-270586a7186d.jpg?tr=w-240,cm-pad_resize", title: "Up to 70% off", desc: "Chic dresses & tops" },
    { id: 63680, img: "https://images-static.nykaa.com/uploads/872c74cd-57b7-42e3-bcd1-473bd22329ba.jpg?tr=w-240,cm-pad_resize", title: "Min 30% off", desc: "Stylish ethnicwear" },
    { id: 4886, img: "https://images-static.nykaa.com/uploads/a7a3309d-e433-4e2f-847b-63351fe6d9e7.jpg?tr=w-240,cm-pad_resize", title: "Min 40% off", desc: "Bestselling activewear" },
    { id: 15204, img: "https://images-static.nykaa.com/uploads/e53da35f-45f8-4bbf-bf07-d7bbab193c3c.jpg?tr=w-240,cm-pad_resize", title: "Up to 60% off", desc: "Trendiest global styles" },
    { id: 12071, img: "https://images-static.nykaa.com/uploads/dfc27d41-6e25-4de7-b3d6-d9a1a9eef168.jpg?tr=w-240,cm-pad_resize", title: "Up to 25% off", desc: "Chic printed co-ords" },
    { id: 6559, img: "https://images-static.nykaa.com/uploads/3f114b5f-13cd-438f-9931-138a12b7fd4f.jpg?tr=w-240,cm-pad_resize", title: "Up to 50% off", desc: "Comfort-first styles" },
    { id: 11674, img: "https://images-static.nykaa.com/uploads/431d9325-ad4e-4145-8b89-00a70b2785a4.jpg?tr=w-240,cm-pad_resize", title: "Min 30% off", desc: "Cool casuals" },
    { id: 13161, img: "https://images-static.nykaa.com/uploads/d5d2453f-16b5-4e32-9fa4-1105e3d246ab.jpg?tr=w-240,cm-pad_resize", title: "Min 50% off", desc: "Cute ethnics & casuals" },
    { id: 9543, img: "https://images-static.nykaa.com/uploads/95126df6-b360-476a-b63b-c0ed74c6d6b3.jpg?tr=w-240,cm-pad_resize", title: "Up to 30% off", desc: "Aesthetic home decor" }
  ].map((card) => (
    <div
      key={card.id}
      onClick={() => handleImageClick(card.id, `/rendring?categoryId=${card.id}`)}
      className="relative z-[9999] pointer-events-auto cursor-pointer inline-block"
      style={{ pointerEvents: "auto" }}
    >
      <img
        src={card.img}
        alt={card.desc}
        className="w-36 ml-3 h-45 lg:h-72 lg:w-[220px] lg:-ml-1"
      />
      <div className="mb-5 ml-3 lg:-ml-1">
        <p className="font-semibold">{card.title}</p>
        <p className="text-gray-600 w-[140px] truncate sm:w-auto sm:whitespace-normal">{card.desc}</p>
      </div>
    </div>
  ))}
</div>


                   
                   

                    <div>
                        <img src="https://images-static.nykaa.com/uploads/e1fa220b-4754-494b-92a2-9c91b55cccdb.jpg?tr=w-1200,cm-pad_resize"
                         className="w-[1130px] ml-15 mt-10 hover:cursor-pointer m"
                        />
                    </div>

           
            </div>
           

        
    )
}
export default HomePage;
