import React, { useContext } from 'react'
import ChildThree from './ChildThree'
import { SecondContext } from './MainHome'

function ChildTwo() {
    const data = useContext(SecondContext)
  return (
    <div>
        ChildTwo : {data}
        <ChildThree />
    </div>
  )
}

export default ChildTwo