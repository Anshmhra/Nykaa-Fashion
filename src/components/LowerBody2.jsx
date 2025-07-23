// import { useState,useEffect } from "react"
// import UseLowerBody2 from "../Hooks.jsx/UseLowerBody2"
// function LowerBody2(){
//     const [laila,Dracarus,Jhon]=UseLowerBody2();
//     return(
//         <div>
//             <div className="flex gap-8 ml-12 mt-12  overflow-x-auto scrollbar-hide mr-15">
//                 {
//                      Array.isArray(laila) && laila.map((rat,off)=>{
//                         const samurai=rat.children?.[0]?.source?.Web;
//                         const ninja=rat.parameters?.title;
//                         return(
//                             samurai && ninja &&(
//                                 <div className="flex-shrink-0" key={rat?.id || off}>
//                                     <img src={samurai}
//                                     alt={off}
//                                     className="w-70 h-92 rounded-2xl hover:cursor-pointer hover:scale-108"
//                                     />
//                                     <p className=" font-medium text-[19px] flex justify-center mt-2 hover:cursor-pointer">{ninja}</p>
//                                 </div>
//                             )
//                         )
//                      })
//                 }
//             </div>
//             <div className="mt-15 ml-14 mr-14">
//                 {
//                     Array.isArray(Dracarus) && Dracarus.map((high,low)=>{
//                         const deamon=high.children?.[0]?.source?.Web;
//                         return(
//                             deamon &&(
//                                 <div key={high?.id || low}>
//                                     <img src={deamon}
//                                     alt={low}
//                                     className="hover:cursor-pointer"/>
//                                 </div>
//                             )
//                         )

//                     })
//                 }
//             </div>
//             <div className="mt-5">
//                 {
//                     Array.isArray(Jhon) && Jhon.map((aegon,swim)=>{
//                         const viserious=aegon.children?.[0]?.source?.Web;
//                         return(
//                             viserious &&(
//                                 <div key={aegon?.id || swim}>
//                                     <img src={viserious}
//                                     alt={swim}
//                                     className=""/>
//                                 </div>
//                             )
//                         )
//                     })
//                 }
//                 <p className="font-semibold ml-12 mt-2 text-2xl">Nykaa - The Online Beauty Store</p>
//             </div>

//         </div>
//     )

// }
// export default LowerBody2;