import { useState,useEffect } from "react"

function UseLowerBody(){

    const [Call,setCall]=useState(null);
    const [More,setMore]=useState([]);
    const [Krakan,setKraken]=useState([]);

    useEffect(()=>{
        fetch(`https://www.nykaa.com/gateway-api/inventory/data/json/?page_type=desktop-homepage&page_section=*&device=desktop&dn_platform=dweb&api_version=V2&inventory_ids=67dfd54d7c6bda1a83fbcef6,67dfd50c0860b96a18731f8c,62c7be78e3894a7578cf5ff0,6812438a30c20478f8b74587,682ef1736ecc60c2421d1f52,6475ed78d5b3d98c12bd3740,6299ed8d77ea250b10ee2582,622ed7a26668b8358658d35e,6583f3fb1b3075b6f8cfce89,60dc356298d97180a60a6e29`)
        .then((Response)=>Response.json())
        .then((opcode)=>{
            
             console.log(opcode);
            const yoda=opcode?.result?.inventory_data[3]?.widget_data?.children || [];
            setCall(yoda);

            const mosft=opcode?.result?.inventory_data[4]?.widget_data?.children || [];
            setMore(mosft);
            const mephisto=opcode?.result?.inventory_data[9]?.widget_data?.children || [];
            setKraken(mephisto);
     
        }
    )
    },[]);


    return [Call,More,Krakan];
}
export default UseLowerBody;
// https://www.nykaa.com/gateway-api/inventory/data/json/?page_type=desktop-homepage&page_section=*&device=desktop&dn_platform=dweb&api_version=V2&inventory_ids=6583ea4a1b3075b6f8cfce58,5eaac677b2587d896a88b9d0,64c7a4cce475e5bb1bbf5589,62b001100d661ff7d9465910,652d30cb5c2dd626992db5e1,66e15920cb9bf4aa0ec3aed2,6583f0741b3075b6f8cfce6e,64244fda04c85e6aa7eda84a,64359781f5694831274cded3,643597bc92cc0c733f2b407c
// https://www.nykaa.com/gateway-api/inventory/data/json/?page_type=desktop-homepage&page_section=*&device=desktop&dn_platform=dweb&api_version=V2&inventory_ids=65963db5546a3233275b2a9a,6835851b6fba38aa144d6e1e,612f7281b8b39a6efe004dbf