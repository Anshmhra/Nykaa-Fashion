import { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
function HomePage(){
     
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
        <div>
            <div>
                <Link to={`/circle?brandId=74296`}><img src="https://images-static.nykaa.com/uploads/e8e8c9be-714d-4464-83ca-3c40be53fe41.jpg?tr=w-1200,cm-pad_resize"
                className="w-[1270px] ml-10 rounded-2xl mt-4 hover:cursor-pointer"
                /></Link>
                <div className="ml-12 mt-6">
                <p className="text-[18px] font-semibold text-gray-500">Our Stores</p>
                <p className="text-[20px] font-semibold">Find everything for your every need</p>
                </div>
                <div className="overflow-x-auto scrollbar-hide mr-17 whitespace-nowrap ml-15">
                <div className="flex gap-5 ml-1 mt-6 w-360 ">
                    
                    <Link to={`/circle?brandId=6557`}><img src="https://images-static.nykaa.com/uploads/8f13793a-0156-49af-b20c-2323ec6cde3f.jpg?tr=w-120,cm-pad_resize"
                    className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                    
                     <Link to={`/circle?brandId=6823`}><img src="https://images-static.nykaa.com/uploads/c1f68994-bc6d-4fb0-9cac-d0ce47d67838.jpg?tr=w-120,cm-pad_resize"
                     className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/circle?brandId=6266`}><img src="https://images-static.nykaa.com/uploads/49e6ae70-6e96-44d6-8d56-a5359731b8ec.jpg?tr=w-120,cm-pad_resize"
                     className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/circle?brandId=8528`}><img src="https://images-static.nykaa.com/uploads/a66486e0-8eb4-4ef1-a6be-4a135f16432a.jpg?tr=w-120,cm-pad_resize"
                     className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/circle?brandId=57205`}><img src="https://images-static.nykaa.com/uploads/585628e7-8d3a-45b1-aedc-195daff883ff.jpg?tr=w-120,cm-pad_resize"
                     className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/circle?brandId=7266`}><img src="https://images-static.nykaa.com/uploads/d92a7ba6-ed6b-4d4e-a3ed-2524525ee042.jpg?tr=w-120,cm-pad_resize"
                    
                     className="w-45 h-35 hover:cursor-pointer"
                     /></Link>
                     <Link to={`/circle?brandId=6557`}><img src="https://images-static.nykaa.com/uploads/3918fadc-f7d4-4c90-b698-05a083736705.jpg?tr=w-120,cm-pad_resize"
                     className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/circle?brandId=14334`}><img src="https://images-static.nykaa.com/uploads/d2145972-3bfb-4f68-aff1-2b6bb376b59b.jpg?tr=w-120,cm-pad_resize"
                     className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/circle?brandId=13388`}><img src="https://images-static.nykaa.com/uploads/f6a1b761-90bb-483c-ae5d-e17184459fd2.jpg?tr=w-120,cm-pad_resize"
                     className="w-45 h-35 hover:cursor-pointer"
                    /></Link>
                     
 
                    
                </div>
                <div className="flex gap-7 ml-13">
                <p className="font-semibold hover:cursor-pointer">Women</p>
                 <p className="ml-22 font-semibold  hover:cursor-pointer">Men</p>
                  <p className="ml-24 font-semibold  hover:cursor-pointer">Kids</p>
                   <p className="ml-24 font-semibold  hover:cursor-pointer">Home</p>
                    <p className="ml-18 font-semibold w- hover:cursor-pointer"  >Luxs Edit</p> 
                    <p className="ml-15 font-semibold  hover:cursor-pointer">Hidden Gems</p>
                    <p className="ml-12 font-semibold  hover:cursor-pointer">Global Store</p>
                    <p className="ml-12 font-semibold  hover:cursor-pointer">Revolve</p>
                    <p className="ml-12 w-50 font-semibold hover:cursor-pointer ">House of Nykaa</p>
                    </div>

                </div>
            </div>

            <div className="flex overflow-x-auto scrollbar-hide mr-20 ml-15 mt-6 "ref={containerRef}>
            <div className="ml-1 mt-8 flex-shrink-0 w-[1248px] hover:cursor-pointer  ">
             <div className="flex ">
            <Link to={`/circle?brandId=57205`}><img src="https://images-static.nykaa.com/uploads/2c60c4f0-fd46-460a-a549-c68b0511da0d.jpg?tr=w-300,cm-pad_resize"
            className=" "
            /></Link>
            <Link to={`/circle?brandId=57205`}><img src="https://images-static.nykaa.com/uploads/6129c9d8-9b96-4b00-a6ff-d8e1ba059abe.jpg?tr=w-300,cm-pad_resize"
            /></Link>
            <Link to={`/circle?brandId=652`}><img src="https://images-static.nykaa.com/uploads/3e8eaaca-99ea-40c6-9740-f193e1798b37.jpg?tr=w-300,cm-pad_resize"
            /></Link>
            <Link to={`/circle?brandId=3&new_tags_filter=luxe&occasion_filter=31659_31760`}><img src="https://images-static.nykaa.com/uploads/5703d929-e825-4673-819b-e30694640d21.jpg?tr=w-300,cm-pad_resize"
            /></Link>
            </div>
            <div className="flex">
           <Link to={`/circle?brandId=57205`}><img src="https://images-static.nykaa.com/uploads/dc45b5f1-8b81-452d-9b9a-33434377dc61.jpg?tr=w-300,cm-pad_resize"
            /></Link> 
             <Link to={`/circle?brandId=57205`}><img src="https://images-static.nykaa.com/uploads/8286489c-2d2b-4891-aaba-485cac019e92.jpg?tr=w-300,cm-pad_resize"
            /></Link>
            <Link to={`/circle?brandId=3&pattern_filter=1588_333`}><img src="https://images-static.nykaa.com/uploads/bea04ddc-9c81-4c9b-a539-a7642054ce65.jpg?tr=w-300,cm-pad_resize"
            /></Link>
            <Link to={`/circle?brandId=57205&category_filter=10_153_155_156_159_164_3907_3908_3909_4497_4542_4543_5_5040_5262_57387_6264_647_6492_6498_652_66_662_69_7_7623_7630_8522_9237_9729`}><img src="https://images-static.nykaa.com/uploads/0c425ece-4844-41cd-a5d9-d333aa443071.jpg?tr=w-300,cm-pad_resize"
            /></Link>
            </div>
            </div>

            <div className=" mt-8 flex-shrink-0 w-full overflow-x-auto scrollbar-hide -mr-50  hover:cursor-pointer ">
            <div className="flex ">
                <Link to={`/circle?brandId=7266`}><img src="https://images-static.nykaa.com/uploads/93ad2e6f-449b-46ee-a412-03bd46ba46cf.jpg?tr=w-300,cm-pad_resize"
                /></Link>
                <Link to={`/circle?brandId=7266`}><img src="https://images-static.nykaa.com/uploads/a82b7c46-9a0f-458f-aad5-98a3b0590ebe.jpg?tr=w-300,cm-pad_resize"
                /></Link>
                <Link to={`/circle?brandId=7266&category_filter=10_156_164_3907_3908_4543_5040_647_6498_652_662_69_7555_7630_8522`}><img src="https://images-static.nykaa.com/uploads/8555b963-8234-4208-8d61-f0aacbdb9d8e.jpg?tr=w-300,cm-pad_resize"
                /></Link>
                <Link to={`/circle?brandId=7266&currentPage=1&brand_filter=11089_11344_126_16567_17302_17866_18406_18647_18895_18991_4481_51284_51933_52066_53150_53475_53571_53588_53696_9575`}><img src="https://images-static.nykaa.com/uploads/2e67c9bc-4723-4394-8524-45b9605dad67.jpg?tr=w-300,cm-pad_resize"
                /></Link>
             </div>

             <div className="flex">

                <Link to={`/circle?brandId=7266`}><img src="https://images-static.nykaa.com/uploads/3c7f5d87-4153-4a77-86c5-e7e06a4e3d0a.jpg?tr=w-300,cm-pad_resize"
                /></Link>
                <Link to={`/circle?brandId=7266`}><img src="https://images-static.nykaa.com/uploads/9501565b-945c-45c4-bb7b-1e45411f0cef.jpg?tr=w-300,cm-pad_resize"
                /></Link>
                <Link to={`/circle?brandId=7266&currentPage=1&category_filter=153_155_159_3909_4497_4542_5_5262_6264_6492_66_7_7623`}><img src="https://images-static.nykaa.com/uploads/88017de3-00ed-4f2d-9945-947d5e1221a1.jpg?tr=w-300,cm-pad_resize"
                /></Link>
                <Link to={`/circle?brandId=7266&sort=popularity&category_filter=4542`}><img src="https://images-static.nykaa.com/uploads/fa66ba24-b82c-479d-b108-9e7be02188ab.jpg?tr=w-300,cm-pad_resize"
                /></Link>
                </div>
                </div>
                </div>
            

                 <div className="ml-15 mt-5">
                <p className="font-semibold text-gray-500">IN THE SPOTLIGHT</p>
                <p className="text-2xl  font-semibold">Hottest brands on offer</p>
                </div>

                <div className="flex ml-15 gap-5 mt-5">
                    <Link to={`/rendring?categoryId=4495`}><img src="https://images-static.nykaa.com/uploads/4ee71bd4-d592-4667-8a93-821f1bc21e0c.jpg?tr=w-240,cm-pad_resize"
                    className="w-55 h-72 hover:cursor-pointer"
                    /></Link>

                     <Link to={`/rendring?categoryId=4240`}><img src="https://images-static.nykaa.com/uploads/8139734a-fb9b-40e0-a3a5-270586a7186d.jpg?tr=w-240,cm-pad_resize"
                    className="w-55 h-72 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/rendring?categoryId=63680`}><img src="https://images-static.nykaa.com/uploads/872c74cd-57b7-42e3-bcd1-473bd22329ba.jpg?tr=w-240,cm-pad_resize"
                    className="w-55 h-72 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/rendring?categoryId=4886`}><img src="https://images-static.nykaa.com/uploads/a7a3309d-e433-4e2f-847b-63351fe6d9e7.jpg?tr=w-240,cm-pad_resize"
                    className="w-55 h-72 hover:cursor-pointer"
                    /></Link>
                     <Link to={`/rendring?categoryId=15204`}><img src="https://images-static.nykaa.com/uploads/e53da35f-45f8-4bbf-bf07-d7bbab193c3c.jpg?tr=w-240,cm-pad_resize"
                    className="w-55 h-72 hover:cursor-pointer"
                    /></Link>
                   

                </div> 
                 <div className="flex gap-6 ml-15 mt-1">
                        <div><p className="font-semibold">Up to 50% off</p><p className="text-gray-600">Stylish & elegant dresses</p></div>
                        <div className="ml-10"><p className="font-semibold hover:cursor-pointer">Up to 70% off</p><p className="text-gray-600 hover:cursor-pointer">Chic dresses & tops</p></div>
                        <div className="ml-19"><p className="font-semibold hover:cursor-pointer">Min 30% off</p><p className="text-gray-600 hover:cursor-pointer">Stylish ethnicwear</p></div>
                        <div className="ml-23"><p className="font-semibold hover:cursor-pointer">Min 40% off</p><p className="text-gray-600 hover:cursor-pointer">Bestselling activewear</p></div>
                        <div className="ml-15"><p className="font-semibold hover:cursor-pointer">Up to 60% off</p><p className="text-gray-600 hover:cursor-pointer">Trendiest global styles</p></div>
                    </div>

                    <div className="flex gap-5 mt-3 ml-15">
                        <Link to={`/rendring?categoryId=12071`}><img src="https://images-static.nykaa.com/uploads/dfc27d41-6e25-4de7-b3d6-d9a1a9eef168.jpg?tr=w-240,cm-pad_resize"
                        className="w-55 h-72 hover:cursor-pointer"
                        /></Link>
                        <Link to={`/rendring?categoryId=6559`}><img src="https://images-static.nykaa.com/uploads/3f114b5f-13cd-438f-9931-138a12b7fd4f.jpg?tr=w-240,cm-pad_resize"
                        className="w-55 h-72 hover:cursor-pointer"
                        /></Link> 
                         <Link to={`/rendring?categoryId=11674`}><img src="https://images-static.nykaa.com/uploads/431d9325-ad4e-4145-8b89-00a70b2785a4.jpg?tr=w-240,cm-pad_resize"
                        className="w-55 h-72 hover:cursor-pointer"
                        /></Link>
                         <Link to={`/rendring?categoryId=13161`}><img src="https://images-static.nykaa.com/uploads/d5d2453f-16b5-4e32-9fa4-1105e3d246ab.jpg?tr=w-240,cm-pad_resize"
                        className="w-55 h-72 hover:cursor-pointer"
                        /></Link>
                        <Link to={`/rendring?categoryId=9543`}><img src="https://images-static.nykaa.com/uploads/95126df6-b360-476a-b63b-c0ed74c6d6b3.jpg?tr=w-240,cm-pad_resize"
                        
                        className="w-55 h-72 hover:cursor-pointer"
                        /></Link>

                    </div>
                    <div className="flex gap-6 ml-15 mt-1">
                        <div><p className="font-semibold">Up to 25% off</p><p className="text-gray-600">Chic printed co-ords</p></div>
                         <div className="ml-18"><p className="font-semibold hover:cursor-pointer">Up to 50% off</p><p className="text-gray-600 hover:cursor-pointer">Comfort-first styles</p></div>
                          <div className="ml-20"><p className="font-semibold hover:cursor-pointer">Min 30% off</p><p className="text-gray-600">Cool casuals</p></div>
                           <div className="ml-32"><p className="font-semibold hover:cursor-pointer">Min 50% off</p><p className="text-gray-600 hover:cursor-pointer">Cute ethnics & casuals</p></div>
                            <div className="ml-15"><p className="font-semibold hover:cursor-pointer">Up to 30% off</p><p className="text-gray-600 hover:cursor-pointer">Aesthetic home decor</p></div>
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
