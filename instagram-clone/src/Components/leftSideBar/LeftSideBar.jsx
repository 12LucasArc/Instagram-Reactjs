import './leftSideBar.css';
import React from 'react';
import ProfileImg from '/src/assets/profile picture.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import instagramLogo from '/src/assets/instagram logo.png';
const leftSideBar = () => {
    return(
    <div className="leftSidePart">
        <div className="logoPart">
            <img className="logoImg" src={instagramLogo} alt="Instagram" />
        </div>
        <div className="navLinkPart">
            <div className="navLink">
                <HomeIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}} /> 
                <div className="navName"> Home</div>
            </div>
            <div className="navLink">
                <SearchIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}} /> 
                <div className="navName"> Search</div>
            </div>
            <div className="navLink">
                <ExploreIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}} /> 
                <div className="navName"> Explore</div>
            </div>
            <div className="navLink">
                <MovieIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}} /> 
                <div className="navName"> Reels</div>
            </div>
            <div className="navLink">
                <EmailOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}} /> 
                <div className="navName"> Messages</div>
            </div>
            <div className="navLink">
                <FavoriteBorderIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}} /> 
                <div className="navName"> Notifications</div>
            </div>
            <div className="navLink">
                <AddBoxOutlinedIcon sx={{fontSize:"30px", margin:"0 20px 0 0"}} /> 
                <div className="navName"> Create</div>
            </div>
            <div className="navLink">
                <img className="profileImg" src={ProfileImg} alt="profile Image" />
                <div className="navName"> Profile</div>
            </div>
        </div>
    </div>
    )
} 
export default leftSideBar