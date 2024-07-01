import { useEffect, useState } from "react"

function useFetch(url) {
    
const [data, setData] = useState(null);
const [loader, setLoader] = useState(false);
const [error, setError] = useState(null);


useEffect(()=>{
    const fetchData = async ()=>{
        try{
            setLoader(true);

            const request = await fetch(url);
            if(!request.ok){
                throw new Error('something went wrong :( ')
            }
            const response = await request.json();
            setData(response)
            setLoader(false);
           

        } 
        catch(error){
            setLoader(false);
            setError(true)
           
        }
    }
    fetchData()
}, [url])

  return (
    {data, loader, error}
  )
}

export default useFetch