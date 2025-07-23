// import { useState, useEffect,useRef } from "react"
// import UseMiddleBody from "../Hooks.jsx/UseMiddleBody";


// function MiddleBody(){
   
//   const [fashionCards,handle,Banner,gif,shades,option]=UseMiddleBody();
  
    
//     const info= handle?.[0]?.widget_data?.children;
//      const containerRef = useRef(null);

//      useEffect(()=>{
//           const container = containerRef.current;
//             const interval = setInterval(() => {
//       if (container) {
//         const { scrollLeft, scrollWidth, clientWidth } = container;
//         const isEnd = scrollLeft + clientWidth >= scrollWidth;

//         container.scrollTo({
//           left: isEnd ? 0 : scrollLeft + clientWidth,
//           behavior: "smooth",
//         });
//       }
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);
    

//     // const nextinfo=Banner.children[0]?.children[0]?.source;

//     // const nextInfo= fashionCards.result?.inventory_data[1];

    


//     return(
      
//         <div>
//             <img src="https://images-static.nykaa.com/uploads/24075481-68dc-4e6a-8c5b-696b8cc76b87.jpg?tr=cm-pad_resize,w-1200"
//             className=" h-28 w-340 hover:cursor-pointer"
//             />
//            <div className="flex gap-1">
//             <img src={`${info?.[0]?.children?.[0]?.source?.Web}`}
//              className="w-150 rounded-2xl ml-12 hover:cursor-pointer"
//              />
//              <img src={`${info?.[1]?.children?.[0]?.source?.Web}`}
//              className="w-150 rounded-2xl ml-12 hover:cursor-pointer"
//              />
//            </div>
//                <div  className="flex ml-12 mt-7 mr-13 gap-4 overflow-x-auto scrollbar-hide">
//                  {fashionCards?.map((card, index) => {
//           const img = card?.children?.[0]?.source?.Web;
//           return (
//             img && (
//               <div key={card?.id || index} className="flex-shrink-0 w-[200px]">
//                 <img
//                   src={img}
//                   alt={`Card-${index}`}
//                   className="rounded-xl w-full h-auto hover:cursor-pointer"
//                 />
//               </div>
//             )
//           );
//         })}

//         </div >
//         <p className="text-3xl font-semibold ml-12 mt-10">Beauty, Your Way</p>
//        <div className="flex overflow-x-auto scrollbar-hide gap-4 ml-12 mt-8"  ref={containerRef}>
//         {
//             Banner?.map((toy,idx)=>{
//             const Info=toy?.children?.[0]?.source?.Web;
             
//             return(
//              Info &&(
//                 <div key={toy?.id || idx} className="flex-shrink-0 w-[1248px] ">
//                   <img src={Info}
//                   alt={idx}
//                   className=" rounded-2xl w-1000 h-auto hover:cursor-pointer  " 
//                   />


//                 </div>
//               )
//             )
           
//           })

//         }
//         </div>
//         <img src="https://images-static.nykaa.com/uploads/e4a23c0c-aae6-4e8d-82ff-2b93dfeb3203.jpg?tr=cm-pad_resize,w-1200"
//         className="w-1247 shadow rounded-2xl hover:cursor-pointer"
//         />
      
//         <img src="https://images-static.nykaa.com/uploads/f85f3d9a-fa61-4215-861b-336a1e899eb3.gif"
//         className="w-1200 shadow-2xl hover:cursor-pointer"
//         />
      
//         <div className="flex shadow-2xl w-315  bg-pink-100 -mt-2 ml-12 ">
//           {
//           gif?.map((Polo,idxx)=>{
//             const kanobi=Polo?.children?.[0]?.source?.Web;
//             return(
             
//               kanobi &&(
                
//                  <div key={Polo?.id || idxx}className="">
//                 <img src={kanobi}
//                 alt={idxx}
//                 className="w-42 ml-2 mt-3  rounded-2xl shadow hover:cursor-pointer"
//                 />
//                  </div>
                  
//               )
             
//             )
//           })

//         }
//         </div>
//         <img src="https://images-static.nykaa.com/uploads/4c9c0e98-7787-4021-8fbe-bfcb4f8f53f3.jpg?tr=cm-pad_resize,w-1200"
//         className="w-full"
//         />
//         <div className="flex ml-12 gap-6">
//         {
//           shades?.map((shadow,no)=>{
//             const yakao=shadow.children?.[0]?.source?.Web;
          

//             return(
//               yakao &&(
//                 <div key={shadow?.id || no} className=" ">
//                   <img src={yakao}
//                   alt={no}
//                   className="w-29    rounded-2xl  hover:cursor-pointer"
//                   />


//                 </div>
//               )
//             )
//           })      
//           }
//           </div> 
           
//             <div className="flex gap-3 ml-12 mr-12 overflow-x-auto scrollbar-hide mt-8">
//             {
//               option?.map((rocx,ID)=>{
//                 const wolf=rocx.children?.[0]?.source?.Web;
//                  const lion=rocx.parameters?.title_id;
                  
//                 return(
//                   wolf && lion&&(
                   
                    
//                     <div key={rocx?.id || ID} className="w-[270px] h-[400px] flex-shrink-0 text-center ">
//                     <img src={wolf}
//                     alt={ID}
//                     className="w-full h-[260] object-cover  rounded-b-2xl"
//                     />
//                     <p className="text-xs font-medium">{lion || "No title"}</p>
//                     </div>

                  
                   
                   
                    
                    
                   
//                   )
                  
//                 )
                
//               })

//             }
           
//           </div>
       
        
//         </div>
        
       
//     )
// }
// export default MiddleBody;
// // https://www.nykaafashion.com/rest/appapi/V3/categories
// // https://www.nykaa.com/gateway-api/inventory/data/json/?page_type=desktop-homepage&page_section=*&device=desktop&dn_platform=dweb&api_version=V2&inventory_ids=62b001100d661ff7d9465910,652d30cb5c2dd626992db5e1,66e15920cb9bf4aa0ec3aed2,6583f0741b3075b6f8cfce6e,64244fda04c85e6aa7eda84a,67dfd54d7c6bda1a83fbcef6,67dfd50c0860b96a18731f8c,64359781f5694831274cded3,643597bc92cc0c733f2b407c,62c7be78e3894a7578cf5ff0
// // https://www.nykaa.com/app-api/index.php/react/navigation?forDevice=desktop
// //  Banner.map((toy,idx)=>{
// // 