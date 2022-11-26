import { MDBNavbar,MDBContainer,MDBIcon,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBNavbarToggler,MDBNavbarBrand,
    MDBCollapse } from 'mdb-react-ui-kit';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.jpg'

const Header = () => {


    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    
    return (
        <>
            
            <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <Link to='/'> <img src={logo} width="50" height="50" style={{borderRadius : "50px"}} /> </Link>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 ms-3'>
              <MDBNavbarItem className=''>
             <Link className='nav-link' to='/'> Home </Link>
              </MDBNavbarItem>
              <MDBNavbarItem> <Link className='nav-link' to='/profile'>Profile</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/contact' className='nav-link'> Contact Us </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/Login' className='nav-link'>Login</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/login/regestration' className='nav-link'>Regestration</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

            
        </>
    );
};

export default Header;
