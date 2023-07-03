import { useState } from "react";





export const useCount = (init) => {


    const[ count, setCount]=useState(init);

    const increase = () => {
        setCount(count+1)
    }
    
    const decrease = () => {
        setCount(count-1)
    }
    
    const reset = () => {
        setCount(0)
    }


return {count , increase , decrease , reset}

}