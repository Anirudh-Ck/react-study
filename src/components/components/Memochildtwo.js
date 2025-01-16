import React from 'react'

function Memochildtwo({newFun}) {
  return (
    <div>Memochildtwo : {newFun()}</div>
  )
}

export default React.memo(Memochildtwo)