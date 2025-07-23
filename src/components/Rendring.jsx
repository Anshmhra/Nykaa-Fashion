
import { useSearchParams } from "react-router-dom";
import useCards from "../Hooks.jsx/UseCards"; 

function Rendring(){

    const cards=useCards();
    if(!cards){
        return <div>Loading...</div>
    }

      const [searchParams] = useSearchParams();
        const categoryId = searchParams.get("categoryId");
    return(
        <div>
            <h1></h1>

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