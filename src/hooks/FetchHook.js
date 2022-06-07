import {useState, useEffect} from 'react'

export default function FetchHook(url) {
    const [data, setData] = useState(null)
    
    useEffect(()=>{
        const getData = async ()=>{
            const res = await fetch(url)
            const jsondata = await res.json()
            setData(jsondata)
        }
        getData()
    }, [url])

    return {data}

}
