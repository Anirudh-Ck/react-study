import { useEffect, useState } from "react";

function useFetch(url){

    const [data, setData] = useState(null);
    console.log("datasadsa", data);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
    }, [url])

    return {data,loading,error};


}

function useTest(){
    console.log("test");
}

export {useFetch,useTest}