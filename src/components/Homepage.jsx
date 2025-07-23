import { useState,useEffect,useRef } from "react";
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
                <img src="https://images-static.nykaa.com/uploads/e8e8c9be-714d-4464-83ca-3c40be53fe41.jpg?tr=w-1200,cm-pad_resize"
                className="w-full"
                />
                <div className="ml-12 mt-4">
                <p className="text-[18px] font-semibold text-gray-500">Our Stores</p>
                <p className="text-[20px] font-semibold">Find everything for your every need</p>
                </div>
                <div className="overflow-x-auto scrollbar-hide mr-12 whitespace-nowrap">
                <div className="flex gap-5 ml-12 mt-6 ">
                    <img src="https://images-static.nykaa.com/uploads/8f13793a-0156-49af-b20c-2323ec6cde3f.jpg?tr=w-120,cm-pad_resize"
                    className="w-35 h-35"
                    />
                    
                     <img src="https://images-static.nykaa.com/uploads/c1f68994-bc6d-4fb0-9cac-d0ce47d67838.jpg?tr=w-120,cm-pad_resize"
                     className="w-35 h-35"
                    />
                     <img src="https://images-static.nykaa.com/uploads/49e6ae70-6e96-44d6-8d56-a5359731b8ec.jpg?tr=w-120,cm-pad_resize"
                     className="w-35 h-35"
                    />
                     <img src="https://images-static.nykaa.com/uploads/a66486e0-8eb4-4ef1-a6be-4a135f16432a.jpg?tr=w-120,cm-pad_resize"
                     className="w-35 h-35"
                    />
                     <img src="https://images-static.nykaa.com/uploads/585628e7-8d3a-45b1-aedc-195daff883ff.jpg?tr=w-120,cm-pad_resize"
                     className="w-35 h-35"
                    />
                     <img src="https://images-static.nykaa.com/uploads/d92a7ba6-ed6b-4d4e-a3ed-2524525ee042.jpg?tr=w-120,cm-pad_resize"
                    
                     className="w-35 h-35"
                     />
                     <img src="https://images-static.nykaa.com/uploads/3918fadc-f7d4-4c90-b698-05a083736705.jpg?tr=w-120,cm-pad_resize"
                     className="w-35 h-35"
                    />
                     <img src="https://images-static.nykaa.com/uploads/d2145972-3bfb-4f68-aff1-2b6bb376b59b.jpg?tr=w-120,cm-pad_resize"
                     className="w-35 h-35"
                    />
                     <img src="https://images-static.nykaa.com/uploads/f6a1b761-90bb-483c-ae5d-e17184459fd2.jpg?tr=w-120,cm-pad_resize"
                     className="w-35 h-35"
                    />
                     

                    
                </div>
                <div className="flex gap-7 ml-23">
                <p className="font-semibold">Women</p>
                 <p className="ml-22 font-semibold ">Men</p>
                  <p className="ml-24 font-semibold ">Kids</p>
                   <p className="ml-24 font-semibold ">Home</p>
                    <p className="ml-18 font-semibold w-"  >Luxs Edit</p> 
                    <p className="ml-15 font-semibold ">Home Gems</p>
                    <p className="ml-12 font-semibold ">Global Store</p>
                    <p className="ml-12 font-semibold ">Revolve</p>
                    <p className="ml-12 w-50 font-semibold ">House of Nykaa</p>
                    </div>

                </div>
            </div>

            <div className="flex overflow-x-auto scrollbar-hide  mt-6 "ref={containerRef}>
            <div className="ml-17 mt-8 flex-shrink-0 w-[1248px]">
             <div className="flex ">
            <img src="https://images-static.nykaa.com/uploads/2c60c4f0-fd46-460a-a549-c68b0511da0d.jpg?tr=w-300,cm-pad_resize"
            className=" "
            />
            <img src="https://images-static.nykaa.com/uploads/6129c9d8-9b96-4b00-a6ff-d8e1ba059abe.jpg?tr=w-300,cm-pad_resize"
            />
            <img src="https://images-static.nykaa.com/uploads/3e8eaaca-99ea-40c6-9740-f193e1798b37.jpg?tr=w-300,cm-pad_resize"
            />
            <img src="https://images-static.nykaa.com/uploads/5703d929-e825-4673-819b-e30694640d21.jpg?tr=w-300,cm-pad_resize"
            />
            </div>
            <div className="flex">
            <img src="https://images-static.nykaa.com/uploads/dc45b5f1-8b81-452d-9b9a-33434377dc61.jpg?tr=w-300,cm-pad_resize"
            />
            <img src="https://images-static.nykaa.com/uploads/8286489c-2d2b-4891-aaba-485cac019e92.jpg?tr=w-300,cm-pad_resize"
            />
            <img src="https://images-static.nykaa.com/uploads/bea04ddc-9c81-4c9b-a539-a7642054ce65.jpg?tr=w-300,cm-pad_resize"
            />
            <img src="https://images-static.nykaa.com/uploads/0c425ece-4844-41cd-a5d9-d333aa443071.jpg?tr=w-300,cm-pad_resize"
            />
            </div>
            </div>

            <div className=" mt-8 flex-shrink-0 w-[1248px]">
            <div className="flex">
                <img src="https://images-static.nykaa.com/uploads/93ad2e6f-449b-46ee-a412-03bd46ba46cf.jpg?tr=w-300,cm-pad_resize"
                />
                <img src="https://images-static.nykaa.com/uploads/a82b7c46-9a0f-458f-aad5-98a3b0590ebe.jpg?tr=w-300,cm-pad_resize"
                />
                <img src="https://images-static.nykaa.com/uploads/8555b963-8234-4208-8d61-f0aacbdb9d8e.jpg?tr=w-300,cm-pad_resize"
                />
                <img src="https://images-static.nykaa.com/uploads/2e67c9bc-4723-4394-8524-45b9605dad67.jpg?tr=w-300,cm-pad_resize"
                />
             </div>

             <div className="flex">

                <img src="https://images-static.nykaa.com/uploads/3c7f5d87-4153-4a77-86c5-e7e06a4e3d0a.jpg?tr=w-300,cm-pad_resize"
                />
                <img src="https://images-static.nykaa.com/uploads/9501565b-945c-45c4-bb7b-1e45411f0cef.jpg?tr=w-300,cm-pad_resize"
                />
                <img src="https://images-static.nykaa.com/uploads/88017de3-00ed-4f2d-9945-947d5e1221a1.jpg?tr=w-300,cm-pad_resize"
                />
                <img src="https://images-static.nykaa.com/uploads/fa66ba24-b82c-479d-b108-9e7be02188ab.jpg?tr=w-300,cm-pad_resize"
                />
                </div>
                </div>
                </div>

           
            </div>
           

        
    )
}
export default HomePage;
