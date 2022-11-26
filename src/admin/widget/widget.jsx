import React from 'react';
import './widget.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const widget = ({ saga }) => {
        let data;

        // whene will we fetch data it will now temp.
        const amount = 100;
        const diff = 50;

        switch (saga) {
            case "user":
                data={
                    title:"USERS",
                    isMoney: false,
                    link: "see all users",
                    icon: <PersonOutlineIcon className='picon' style={{color:"crimson",
                backgroundColor:"rgba(255, 0, 0, 0.2)"}} />,
                }; 
                break;                     
            case "order":
                data={
                    title:"ORDER",
                    isMoney: false,
                    link: "see all order",
                    icon: <ShoppingCartIcon className='picon'  style={{color:"goldenrod",
                    backgroundColor:"rgba(218, 165, 32, 0.2)"}}/>,
                };
                break;                      
            case "earning":
                data={
                    title:"EARNING",
                    isMoney: false,
                    link: "Net Earning",
                    icon: <CurrencyRupeeIcon className='picon' style={{color:"green",
                    backgroundColor:"rgba(0, 128, 0, 0.2)"}} />,
                };
                break;                      
            case "balance":
                data={
                    title:"BALANCE",
                    isMoney: false,
                    link: "see details",
                    icon: <AccountBalanceWalletIcon className='picon' style={{color:"purple",
                    backgroundColor:"rgba(128, 0, 128, 0.2)"}}/>,
                };
                break;                    
        }


    return (
        <div className='widget'>
           <div className="wleft"> 
           <span className="wtitle"> {data.title} </span>
           <span className="wcounters"> {data.isMoney && "$" } {amount} </span>
           <span className="wlink"> {data.link} </span>
           </div> 
           <div className="wright"> 
           <div className="wpercentage positive"> {diff} %
           <KeyboardArrowUpIcon />
           </div>
            {data.icon}
            </div> 
        </div>
    );
};

export default widget;