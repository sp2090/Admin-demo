import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import AdminDashbord from './AdminDashbord.jsx'
import AdminProfile from './AdminProfile.jsx'
import Login from './Login.jsx'
import Single from './pages/single/Single.jsx'
import List from './pages/list/List.jsx'
import New from './pages/single/NewPage.jsx'
import { productInputs, userInput } from '../services/inputsource.js';
import { DarkModeContext } from './contextAPI/DarkModeContext.js';
import '../style/dark.css'

const AdminRouter = (props) => {

    const {darkMode} = useContext(DarkModeContext)

    return (
        
        <div className={darkMode ? "app dark" : "app"}>
            <Routes>
                
            <Route path='/'>
                <Route index element= {<AdminProfile/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/users'>
                <Route index element={<List/>} />
                <Route path=':useID' element={<Single/>} />
                <Route path='new' element={<New inputs ={userInput} title="Add new User" />} />
            </Route>
            <Route path='/product'>
                <Route index element={<List/>} />
                <Route path=':productId' element={<Single/>} />
                <Route path='new' element={<New inputs ={productInputs} title="Add new Products" />} />
            </Route>
            <Route path='/' exact element={<Navigate replace to="/admin" />} />  
            </Route>
            
            </Routes>
        </div>
    );
};

export default AdminRouter;