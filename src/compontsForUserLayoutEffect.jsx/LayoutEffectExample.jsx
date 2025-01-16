import React, { useEffect, useLayoutEffect } from 'react'

function LayoutEffectExample() {

    // useEffect(() => {
    //  console.log("useLayout");
     
    // })
    useLayoutEffect(() => {
        console.log("useLayout");
       })
    
  return (
    <div>LayoutEffectExample</div>
  )
}

export default LayoutEffectExample