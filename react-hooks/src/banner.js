import { useEffect } from "react";

const Banner=()=>{

    useEffect(()=>{
        return ()=>{
            console.log("unmounting")
        }
    },[])

    return(
        <h2>Banner</h2>
    )
}

export default Banner;