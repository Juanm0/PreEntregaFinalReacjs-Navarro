import { useState } from "react"


function useCount ({initial=1, stock}) {
    
    const [count, setCount] = useState(initial)

    const less = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const add = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    return {
        count,
        less,
        add
    }
}


export default useCount