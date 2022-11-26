import React, { useContext } from 'react';
import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReorderIcon from '@mui/icons-material/Reorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contextAPI/DarkModeContext';


const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className='sidebar'>
           <Link to="/admin"> <div className="top"> <p className="logo"> logo </p> </div> </Link>
            <hr />
            <div className="center"> 
                        <ul>
                            <p className='titels'> MAIN </p>
                          <Link to="/admin"> <li> <DashboardIcon className=' icon' /> <span className='sides'>dashbord</span></li> </Link>
        
              <p className='titels'> LIST </p>
              <Link to="/admin/users"><li> <PeopleIcon className=' icon' /> <span className='sides'> Users </span></li> </Link>
             <Link to="/admin/product"> <li> <InventoryIcon className=' icon' /> <span className='sides'> Products </span></li></Link>
              <li> <ReorderIcon className=' icon' /> <span className='sides'> Orders </span></li>
              <li> <LocalShippingIcon className=' icon' /> <span className='sides'> Delivery </span></li>
              <p className='titels'> USER </p>
              <li> <PersonOutlineIcon className=' icon' /> <span className='sides'> Login </span> </li>
              <li> <QueryStatsIcon className=' icon' /> <span className='sides'> Stats </span> </li>
              <li> <NotificationsNoneIcon className=' icon' /> <span className='sides'> Notification </span></li>
              <li> <AccountCircleIcon className=' icon' />  <span className='sides'> Profile </span></li>
              <li> <LogoutIcon className=' icon' /> <span className='sides'> LogOut </span></li>
                        </ul>
                         </div>
            <div className="bottom">
                <div className="coloroption" onClick={()=> dispatch({type:"LIGHT"})} style={{backgroundColor:"white"}}>  </div>
                <div className="coloroption" style={{backgroundColor:'#222'}} onClick={()=> dispatch({type:"DARK"})}>  </div>
                 </div>
        </div>
    );
};

export default Sidebar;