import React, { useCallback, useMemo, useState } from 'react'
import Memochildone from './components/Memochildone';
import Memochildtwo from './components/Memochildtwo';
import Memochildthree from './components/Memochildthree';
import Memochildfour from './components/Memochildfour';


function UseMemoFile() {
    console.log("render main");
    const [count, setCount] = useState(0)

    // const obj1 ={
    //     'key': 'value'
    // }


    // const obj1 = useMemo(()=>{
    //     return {
    //             'key': 'value',
    //             'count': count
    //     }
    // }, [])

    const obj1 = useMemo(()=>{
        return {
                'key': 'value',
                'count': count
        }
    }, [count])
    

    const newFun = useCallback(()=>{
        return console.log("returned a function", count);
        
    },[count])
    
  return (
    <div>
         <h1>MemoFile: Main</h1>


         <button style={{ padding: '10px', marginRight: '5px' }} onClick={() => setCount(prevcount => prevcount + 1)}>+</button>

         <span style={{ margin: '0 10px', fontSize: '20px', fontWeight: 'bold' }}>{count}</span>
        
         <button style={{ padding: '10px' }} onClick={() => setCount(prevcount => prevcount - 1)}>-</button>


         <Memochildone/>
         <Memochildtwo newFun={newFun}/>
         <Memochildthree count={count}/>
         <Memochildfour obj1={obj1}/>
    </div>
  )
}

export default UseMemoFile