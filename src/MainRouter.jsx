import React from "react";
import {Routes, Route, Link,BrowserRouter as Router} from 'react-router-dom';
import HomePage from './HomePage.jsx'
import AllUsers from './AllUsers.jsx'
import Profile from './Profile.jsx'
import Login from './Login.jsx'
import Regestration from './Regestration.jsx'
import Contact from './Contact.jsx'
import ChangePassword from './ForgotPassword.jsx'

function MainRouter() {
const AdminPanel = React.lazy(() => import("./admin/AdminRouter.jsx"))


    return(
        <>
        <Router>
        <Routes>
           <Route path='/'>
            <Route index element = {<HomePage />}/>
            <Route path="allusers" element ={<AllUsers />} />
            <Route path="/profile" element ={<Profile />} />
            <Route path="/contact" element ={<Contact />} />
            <Route path="/Login" element ={<Login />} />
            <Route path="/login/regestration" element ={<Regestration />} />
            <Route path="/login/passwordchange" element={<ChangePassword/>} />

            <Route path="*" element={<NoMatch />} />
            <Route path="/admin/*" element={<React.Suspense fallback={<h2>Loading...</h2>}><AdminPanel /></React.Suspense>} />
            </Route>
        </Routes>
        </Router>
        </>
    );
}

function NoMatch () {
  return (
    <div>
        <h2>Nothing to see!</h2>
        <p>
            <Link to="/"> Home Page </Link>
        </p>
    </div>
  )

}

export default MainRouter;