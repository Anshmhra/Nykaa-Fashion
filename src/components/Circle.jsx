import useCircles from "../Hooks.jsx/UseCircles";
import { useSearchParams } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";

function Circle(){

    const [searchParams] = useSearchParams();
       const brandId = searchParams.get("brandId");
    const Call=useCircles(brandId);

    if (!brandId || !Call) {
    return <div>Loading brands...</div>;
  }
    return(
        <div>
            <div className="ml-12 mr-15 flex flex-wrap mt-20 justify-center gap-7">
                {
                    Call.map((atom,idx)=>(
                        atom?.imageUrl &&(
                            <div key={idx} className=" w-[230px]  rounded-2xl hover:shadow-2xl object-cover overflow-hidden hover:cursor-pointer hover:scale-95 duration-300 ">
                                <img src={atom.imageUrl}
                                alt={idx}
                                className=" w-full h-[320px]   object-cover rounded"
                                />
                               <div className="flex gap-1 text-[13px]">
                                {
                                  atom?.tag?.[0]?.title && (
                                 <div className="p-2 rounded text-center  mt-1 -ml-1  bg-blue-100">
                                 <p >{atom.tag[0].title}</p>
                                 </div>
                                )}
                                 {atom?.tag?.[1]?.title && (
                        <div className="p-1 rounded text-center mt-1 bg-blue-100">
                        <p className="mt-1">{atom.tag[1].title}</p>
                        </div>
                    )}

                                
                                </div>



                                <p className="text-[15px] ml-2 font-semibold">{atom.title}</p>
                                <p className="text-[15px] ml-2 text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis truncate  max-w-[220px]">{atom.subTitle}</p>
                                <div className="flex gap-2 ml-1">
                                <MdCurrencyRupee className="mt-1 text-gray-700"/><p className=" -ml-1 text-gray-800">{atom.discountedPrice}</p>
                                <MdCurrencyRupee className="text-[14px] mt-1 text-gray-500"/><p className="text-gray-500 line-through text-[14px] -ml-1 ">{atom.price}</p>
                                <p className="text-emerald-600 text-[14px]">{atom.discount}%</p>
                                </div>
                            </div>

                        )

                    ))

                }
            </div>
            {}
        </div>
    )
}
export default Circle;