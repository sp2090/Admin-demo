import React from 'react';
import { MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Header from './header/Header';

const Regestration = () => {
    return (
        <>
          <Header />


        <div className="container mt-5">
        <div className="row align-items-center">
        <div className="col-md-4 offset-md-4">
        <div className='card border-grey'>

            <div className="card-header text-center">

              Regestration
            </div>
      
        
        <MDBRow>
        <MDBCol>
          <MDBInput id='form10Example1' label='Name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form10Example2' label='Email address' type='email' />
        </MDBCol>
      </MDBRow>

      <hr />

      <MDBRow>
        <MDBCol>
          <MDBInput id='form10Example3' label='User name' type='text' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form10Example4' label='password' type='password' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form10Example5' label='conform password' type='password' />
        </MDBCol>
      </MDBRow>

      <br />

      <MDBBtn type='submit' label='Submit'> Submit </MDBBtn>

      </div>
      </div>
      </div>  
      </div>

        </>
    );
};

export default Regestration;