
import { useSearchParams } from "react-router-dom";
import useCards from "../Hooks.jsx/UseCards"; 
import { useState,useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

function Rendring(){

    
   
  

      const [searchParams] = useSearchParams();
        const categoryId = searchParams.get("categoryId");
     



         const Detail=useCards(categoryId);
         


  if (!categoryId) {
    return <div>Loading category...</div>;
  }

        
        

    return(
        <div>
            <div className=" ml-12 mr-15 flex flex-wrap mt-20 justify-center gap-7">
          {Detail.map((item,id)=>(

            

            item?.imageUrl &&(
              <Link  to="/product" key={id}   state={{ itemData: item }} >
                <div key={id} className="rounded-2xl hover:shadow-2xl object-cover overflow-hidden hover:cursor-pointer hover:scale-95 duration-300 ">
                 <img src={item.imageUrl}
                 alt={id}
                 className="w-full h-[320px]  object-cover rounded"
                 /> 
                 <div className="ml-1 mb-4 ">
                    <div className="flex gap-1 text-[13px]">
                         {item?.tag?.[0]?.title && (
                      <div className="p-2 rounded text-center  mt-1 -ml-1  bg-blue-100">
                      <p >{item.tag[0].title}</p>
                    </div>
                    )}
                      {item?.tag?.[1]?.title && (
                        <div className="p-1 rounded text-center mt-1 bg-blue-100">
                        <p className="mt-1">{item.tag[1].title}</p>
                        </div>
                    )}
                   
                    </div>
                 <p className="text-[15px] font-semibold">{item.title}</p>
                 <p className="text-[15px] text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis truncate  max-w-[220px]">{item.subTitle}</p>

                  {
                                    item?.sibling_colour_codes?.length > 0 &&(
                                         <div className="flex gap-1 ml-1 mt-1 items-center">
                                            {item.sibling_colour_codes?.slice(0, 4).map((color,Id)=>(
                                                <div
                                                key={Id}
                                                className="w-4 h-4 rounded-full border border-gray-300"
                                                style={{ backgroundColor: color }}
                                               ></div>
                                            ))
                                            }
                                            {
                                                item?.sibling_colour_codes?.length > 4 &&(
                                                    <span className="text-xs text-gray-500">+{item.sibling_colour_codes.length - 4} more</span>
                                                )
                                            }
                                            </div>
                                    )
                                }

                 <div className="flex gap-2">
                 <MdCurrencyRupee className="mt-1 text-gray-700"/><p className=" -ml-1 text-gray-800">{item.discountedPrice}</p>
                 <MdCurrencyRupee className="text-[14px] mt-1 text-gray-500"/><p className="text-gray-500 line-through text-[14px] -ml-1 ">{item.price}</p>
                 <p className="text-emerald-600 text-[14px]">{item.discount}%</p>
                 </div>
                 <p className="text-[14px] text-emerald-600">{item.dynamic_text?.title}</p>
                 </div>
                 </div>
                 </Link>
            )
           
           
         ))

          }
          </div>

        </div>
    )
}
export default Rendring;










// import UseLowerBody from "../Hooks.jsx/UseLowerBody";
// function LowerBody(){
//     const [data,More,Krakan]=UseLowerBody();
//       if (!data) {
//     return <div>Loading...</div>;
//   }
    

//     return(
//    <div>
//     <h1 className="text-2xl font-semibold mt-4 ml-12">Your Beauty BFF Is Here!</h1>
//     <div>
//         {
//             Array.isArray(data) &&  data?.map((tay,is)=>{
//                 const pot=tay.children?.[0]?.source?.Web;
            

//                 return(
//                     pot &&(
//                         <div key={tay?.id || is}>
//                         <img src={pot}
//                         alt={pot?.id || is}
//                         className="w-300 ml-12 mt-4 rounded-2xl hover:cursor-pointer"
//                         />
                        
//                         </div>
                        
//                     )
//                 )

//             })
//         }

//     </div>
//     <div className="flex gap-4 ml-12 mt-4  overflow-x-auto scrollbar-hide mr-15 ">
//       {
//         Array.isArray(data) &&   More.map((itom,log)=>{
//             const lort=itom.children?.[0]?.source?.Web;
//             return(
//                 lort &&(
//                     <div className="flex-shrink-0" key={log}>
//                         <img src={lort}
//                         alt={log}
//                         className="w-55 h-50 hover:cursor-pointer"
//                         />
//                     </div>
//                 )
//             )
//         })
//       }
//       </div>
//       <img src="https://images-static.nykaa.com/uploads/1b69ee93-e58b-42f1-ae9e-086e72950c61.jpg?tr=cm-pad_resize,w-1200"
//       className="mt-8 w-full "
//       />
//       <div className="flex gap-6 ml-12 mt-4  overflow-x-auto scrollbar-hide mr-15">
//         {
//              Array.isArray(data) && Krakan.map((demon,tully)=>{
//                 const valyrian=demon.children?.[0]?.source?.Web;

//                 return(
//                     valyrian &&(
//                         <div className="flex-shrink-0" key={tully}>
//                             <img src={valyrian}
//                             alt={tully}
//                             className="w-50 h-45 rounded-2xl hover:cursor-pointer"
//                             />
//                         </div>
//                     )
//                 )
//              })
//         }
//       </div>
      
//    </div>
//     )
// }
// export default LowerBody;