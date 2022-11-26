import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header/Header';

const ForgotPassword = () => {
    return (
        <>
    <Header/>
    
    <div className="container mt-5">
        <div className="row align-items-center">
        <div className="col-md-4 offset-md-4">
        <div className='card border-grey'>
    <div className="card-header text-center font-weight-bold">

        Reset Your Password
  
      </div> 
  
  <div className="row">
    <div className="col-sm-12">
      <label>Current Password</label>
      <div className="form-group pass_show"> 
        <input type="password" defaultValue="" className="form-control" placeholder="Current Password" /> 
      </div> 
      <label>New Password</label>
      <div className="form-group pass_show"> 
        <input type="password" defaultValue="" className="form-control" placeholder="New Password" /> 
      </div> 
      <label>Confirm Password</label>
      <div className="form-group pass_show"> 
        <input type="password" defaultValue="" className="form-control" placeholder="Confirm Password" /> 
      </div> 
    </div>  
  </div>
  <br/> 
  <div className='text-center'>
  <Link to='/'> <button className='btn btn-info'> submit </button> </Link> </div>
</div>
</div>
</div>
</div>

        </>
    );
};

export default ForgotPassword;