import React from 'react'

function Memochildfour({obj1}) {
  return (
    <div>Memochildfour : {obj1.count}</div>
  )
}

export default React.memo(Memochildfour);