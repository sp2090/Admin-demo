import React, { useEffect, useRef, useState } from 'react';
import Header from './header/Header';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox}
from 'mdb-react-ui-kit';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { retrieveUserslogin } from './action/users';
import { useDispatch } from 'react-redux';

function Box({ children, timeline, index }) {
  const el = useRef();
  useEffect(() => {
    timeline.to(el.current, { x: -100 }, index * 0.1);
  }, [timeline]);
  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
}


const Login = () => {
const [tl, setT1] = useState(() => gsap.timeline());
const [state, setState] = useState({});
const dispatch = useDispatch ();

function submitData(e) {
  e.preventDefault();
  dispatch(retrieveUserslogin(state))
}

    return (
        <>
        <Header />

            <div className="container mt-3 gradient-custom">
                <div className="row">
                    <div className="col app">
                    <Box timeline={tl} index={0}>
        
                    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='User Name' id='formControlL' type='text' name="username"
              onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value}); }} size="lg"/>

              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' name="password" onChange={(e) => { setState
              ({ ...setState, [e.target.name]: e.target.value}); }} size="lg"/>

              <MDBBtn size='lg' onClick={submitData} >
                Login
              </MDBBtn>

            <br />
              
    <p className='text-center'> Forgot <Link className='mb-4' label='Forgot password' to='passwordchange'> password </Link> ?</p>

      <Link className='mb-4 text-center' to='regestration'> Create New Account  </Link>


              <hr className="my-4" />


              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>
              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
              </Box>
                   </div>
                </div>
            </div>
         </>
    );
};

export default Login;