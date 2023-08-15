import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { Link } from 'react-router-dom'
import './SearchPage.css'
import GoogleImage from '../images/Google-Logo.wine.svg'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import SearchSection from './SearchSection'
import DescriptionIcon from '@material-ui/icons/Description'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import ImageIcon from '@material-ui/icons/Image'

function SearchPage(){
  const[{term},dispatch] = useStateValue();
  const {data} = useGoogleSearch(term);
  console.log(data)
  return (
    <div className='searchPage'>
      <div className='search_header'>
        <Link to="/">
        <img className='searchPage_logo' src={GoogleImage} alt=""/>
        </Link>
        <div className='searchHeader_body'>
        <SearchSection/>
        <div className='searchPage_Options'>
          <div className='searchPage_OptionsLeft'>
            <div className='searchPageoptions'>
              <SearchIcon/>
              <Link to="/all">All</Link>
            </div>
            <div className='searchPageoptions'>
              <DescriptionIcon/>
              <Link to="/news">News</Link>
            </div>
            <div className='searchPageoptions'>
              <ImageIcon/>
              <Link to="/images">Images</Link>
            </div>
            <div className='searchPageoptions'>
              <LocalOfferIcon/>
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className='searchPageoptions'>
              <RoomIcon/>
              <Link to="/maps">Maps</Link>
            </div>
            
          </div>
          <div className='searchPage_OptionsRight'>
            <div className='searchPageoptions'>
              <Link to="/settings">Settings</Link>
            </div>
            <div className='searchPageoptions'>
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <hr></hr>
      {term && 
      <div className='search_results'>
        <p className='searchPage_resultCounts'>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.searchTime} seconds) for {term}</p>
        {data?.items.map(item=>(
          <div className='searchPage_results'>
           <a href={item.link} className='links imglink'>
            {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src &&(
              <img className='searchimg' src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src}  alt=''/>
            )}
            {item.displayLink}
           </a>
           <a href={item.link} className='searchPage_resultTitle'>
            <h2>{item.title}</h2>
           </a>
           <p className='searchPage_resultSnippet'>
            {item.snippet}
           </p>
          </div>
        ))}
      </div>
      }
    </div>
  )
}

export default SearchPage
