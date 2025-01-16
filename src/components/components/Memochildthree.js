import React from 'react'

function Memochildthree({count}) {
  return (
    <div>Memochildthree : {count}</div>
  )
}
const newFn = React.memo(Memochildthree)
export default newFn