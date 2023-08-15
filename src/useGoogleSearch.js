import {useState, useEffect} from "react"
import API_KEY from "./key"

const CONTEXT_KEY = "e7229cb7e33c74e14";

export default function useGoogleSearch(term){
    const[data,setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res=>res.json())
            .then(res=>{
                setData(res)
            })
        }
        fetchData();
    },[term])

    return {data}
};