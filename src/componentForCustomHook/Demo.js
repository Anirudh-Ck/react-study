import React, { useEffect, useState } from 'react'
import { useFetch } from './CustomHookFile';

function Demo() {
    // const [data, setData] = useState(null);
    // console.log("datasadsa", data);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data);
    //     setLoading(false);
    //   })
    // }, [])

    const {data, loading, error} = useFetch('https://fakestoreapi.com/products');
    console.log("main",data);
    console.log("loading",loading);
    console.log("error",error);



  return (
    <div>{
        data?.map(item=><div>{item.title}</div>)
    }</div>
  )
}

export default Demo