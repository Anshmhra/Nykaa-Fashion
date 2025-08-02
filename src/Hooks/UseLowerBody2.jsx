// import { useState,useEffect } from "react"
// function UseLowerBody2(){
//    const [Lucus ,setLucus]= useState([]);
//    const [Dracarus,setDracaus]=useState([]);
//    const [Jhon,setJhon]=useState([]);

//    useEffect(()=>{
//     fetch(`
// https://www.nykaa.com/gateway-api/inventory/data/json/?page_type=desktop-homepage&page_section=*&device=desktop&dn_platform=dweb&api_version=V2&inventory_ids=6299ed8d77ea250b10ee2582,622ed7a26668b8358658d35e,6583f3fb1b3075b6f8cfce89,60dc356298d97180a60a6e29,65963db5546a3233275b2a9a,6835851b6fba38aa144d6e1e,612f7281b8b39a6efe004dbf`)
//     .then((Response)=>Response.json())
//     .then((detail)=>{
//         console.log(detail);
//         const cersie=detail.result?.inventory_data[4]?.widget_data?.children || [];
//         setLucus(cersie);

//          const jamie=detail.result?.inventory_data[5]?.widget_data?.children || [];
//          setDracaus(jamie);

//            const tyron=detail.result?.inventory_data[6]?.widget_data?.children || [];
//          setJhon(tyron);
//     })
//    },[])
//     return [Lucus,Dracarus,Jhon];
// }
// export default UseLowerBody2;