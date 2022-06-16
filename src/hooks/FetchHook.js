import {useState, useEffect} from 'react'

export default function FetchHook(url , method = "GET") {
    const [data, setData] = useState(null)
    const [errors , setErrors] = useState(null)
      const [options, setOptions] = useState("");
      const postingData = (newdata) => {
        setOptions({
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newdata),
        });
      };
    
    useEffect(()=>{
        const controller = new AbortController()
        const getData = async (fetchOption)=>{
            try {

                const res = await fetch(url, {...fetchOption, signal : controller.signal})
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const jsondata = await res.json()
                setData(jsondata)
            } catch(e){
                console.log(e)
                setErrors('Could not fetch data')
            }
        }
        if(method == 'GET'){
            getData();
        }
        if(method == 'POST' && options){
            getData(options);
        }
        return(()=>{
            controller.abort()
        })
    }, [url, method, options])

    return {data , errors,  postingData}

}
