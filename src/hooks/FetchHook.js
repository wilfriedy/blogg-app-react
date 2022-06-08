import {useState, useEffect} from 'react'

export default function FetchHook(url) {
    const [data, setData] = useState(null)
    const [errors , setErrors] = useState(null)
    
    useEffect(()=>{
        const controller = new AbortController()
        const getData = async ()=>{
            try {

                const res = await fetch(url, {signal : controller.signal})
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
        getData()
        return(()=>{
            controller.abort()
        })
    }, [url])

    return {data , errors}

}
