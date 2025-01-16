import React, { useEffect, useState } from 'react'

function Taining() {
    const [data,setData] = useState(0)
    const [count,setCount] = useState(0)



  useEffect(()=>{
    console.log("compnent rendering");
  },[data])
    const handlclick =()=>{
       
        setData( prev => prev + 1) ; // 0 => 0 + 1 = 1
        setData( prev => prev + 1) // 1 => 1+ 1 = 2
        // setData( data + 1) // 0+ 1= 1
        // setData(data + 1) // 1+ 1= 2
    }

    const handlclickDecre = () =>{
        setCount(prev => prev - 1)
    }

  return (
    <div>
        count : {data}
        count : {count}
        <button  onClick={handlclick}> increment</button>
        <button  onClick={handlclickDecre}> decrement</button>

    </div>
  )
}

export default Taining