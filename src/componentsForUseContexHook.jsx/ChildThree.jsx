import React, { useContext } from 'react'
import ChildFour from './ChildFour'
import { ThirdContext } from './MainHome'

function ChildThree() {
    const value = useContext(ThirdContext)
  return (
    <div>
        ChildThree : {value}
        <ChildFour />
    </div>
  )
}

export default ChildThree