import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import './SearchSection.css'
import {useNavigate} from "react-router-dom"
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

export default function SearchSection(){
  const[{},dispatch] = useStateValue();
  const[input,setInput] = useState("");
  
  const history = useNavigate();
  const search = (event)=>{
    event.preventDefault();
    console.log("hit");
    
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
    history('/search');
  }
  return (
    <form className='search' onSubmit={search}>
      <div className='search-input'>
        <SearchIcon className="search-searchInput"/>
        <input value={input} onChange={event=>setInput(event.target.value)}/>
        <MicIcon/>
      </div>
      
    </form>
  )
}

