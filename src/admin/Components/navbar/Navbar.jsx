import React from 'react';
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MessageIcon from '@mui/icons-material/Message';
import Img from '../../../Images/adminlogo.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
                <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='search...' />
                    <SearchIcon />
                </div>
            <div className="items">
                <div className="item"> <LanguageIcon /> </div>
                <div className="item"> <NotificationAddIcon /> <div className="counter">1</div> </div>
                <div className="item"> <MessageIcon /> <div className="counter">2</div> </div>
                <div className="item"> <img src={Img} className='image' />  </div>
            </div>
                </div>
            
            
        </div>
    );
};

export default Navbar;