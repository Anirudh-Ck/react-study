import React, { useContext } from 'react'
import { MainContext } from './MainHome'

function ChildFive() {
    const value = useContext(MainContext)
  return (
    <div>ChildFive: {value}</div>
  )
}

export default ChildFive