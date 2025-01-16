// step 1

// import React, { useEffect, useState } from 'react'

// function Demo() {
//     const [data, setData] = useState(0)

//     useEffect(()=>{
//         console.log("data",data);
//         console.log("component render"); 
//     })
//     const handlClick = ()=>{
//         setData(prv => prv + 1)
//     }

//   return (
//     <div>
//         <button onClick={handlClick}>
//             Click me !
//         </button>
//     </div>
//   )
// }

// export default Demo

// // step 2 -imp

// import React, { useEffect, useRef } from 'react'

// function Demo() {
//     // const [data, setData] = useState(0)

//     const ref = useRef(0)
//     console.log(ref);


//     useEffect(()=>{
//         console.log("component render");  
//     },[ref.current])
    
//     const handeClick = ()=>{
//         // setData(prev => prev + 1)
//         ref.current++
//         console.log("data",ref.current);

//     }
//   return (
//     <div>
//         <button onClick={handeClick}>
//             Click me !
//         </button>
//     </div>
//   )
// }

// export default Demo

// // step 3 - imp


// import React, { useEffect, useRef } from 'react'

// function Demo() {
 

//     const inputRef = useRef(null)



    
//     const handeClick = ()=>{
//         inputRef.current.focus();
//         // inputRef.current.select();
//         inputRef.current.style.backgroundColor = "yellow";

//     }

//   return (
//     <div>
//         <button onClick={handeClick}>
//             Click me !
//         </button>
//         <input ref={inputRef} type='text'/>
//     </div>
//   )
// }

// export default Demo

// step -4

import React, { useEffect, useRef } from 'react'

function Demo() {
 

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)




    
    const handeClick1 = ()=>{
        inputRef1.current.focus();
        // inputRef.current.select();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";


    }
    const handeClick2 = ()=>{
        inputRef2.current.focus();
        // inputRef.current.select();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";


    }
    const handeClick3 = ()=>{
        inputRef3.current.focus();
        // inputRef.current.select();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";


    }

  return (
    <div>
        <button onClick={handeClick1}>
            Click me1 !
        </button>
        <input ref={inputRef1} type='text'/>
        
        <button onClick={handeClick2}>
            Click me2 !
        </button>
        <input ref={inputRef2} type='text'/>
        <button onClick={handeClick3}>
            Click me3 !
        </button>
        <input ref={inputRef3} type='text'/>
    </div>
  )
}

export default Demo