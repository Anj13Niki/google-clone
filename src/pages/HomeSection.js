import React from "react";
import GoogleImage from '../images/Google-Logo.wine.svg'
import { Link } from "react-router-dom";
import './HomeSection.css'
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from "@material-ui/core";
import SearchSection from "./SearchSection";

export default function HomeSection() {
    return (
        <>
            <div className='home'>
                <div className='home-header'>
                    <div className='home-header-left'>
                        <Link to='/about'>About</Link>
                        <Link to='/store'>Store</Link>
                    </div>
                    <div className='home-header-right'>
                        <Link to='/about'>Gmail</Link>
                        <Link to='/store'>Images</Link>
                        <Link to='/about'><AppsIcon/></Link>
                        <Link to='/store'><Avatar/></Link>
                    </div>
                </div>
                <div className='home-body'>
                    <img src={GoogleImage} alt=""/>
                    <SearchSection/>
                </div>
            </div>
        </>
    )
}