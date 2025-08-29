import { useState } from "react";



export default function Counter (){

    const [count,setCount] = useState(0);

    return(
        <div className="flex gap-4 m-4">
            <button className="px-6 py-2 bg-red-500 text-white rounded-md" onClick={() => {setCount(count + 1 )}}>{`Count is ${count}`} </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md" onClick={() => {setCount(0)}}>{`Reset Count`} </button>
        </div>
    )
}