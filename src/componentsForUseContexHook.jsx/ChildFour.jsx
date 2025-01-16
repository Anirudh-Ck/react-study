import React, { useContext } from 'react'
import ChildFive from './ChildFive'
import { MainContext } from './MainHome';

function ChildFour() {
    const data = useContext(MainContext)
    console.log("data",data);
    
  return (
    <div>
        ChildFour : {data}
        <ChildFive />
    </div>
  )
}

export default ChildFour