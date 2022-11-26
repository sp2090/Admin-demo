import React from 'react';
import Sidebar from './Components/sidebar/Sidebar';
import './profile.css'
import Navbar from './Components/navbar/Navbar'
import Widget from './widget/widget'
import Feature from './Components/featurechart/feature'
import Chart from './Components/chart/chart'
import AdminTable from './Components/Table/AdminTable';

const AdminProfile = () => {

    
    return (
        <>

        <div className='profile'>
            <Sidebar />
            <div className="profileContainter"> 
            <Navbar />
            <div className="widgets">
                <Widget saga='user' />
                <Widget saga="order" />
                <Widget saga="earning" />
                <Widget saga="balance" />
            </div>

                <div className="pcharts">
                <Feature/>
                <Chart title=" Last Year " aspect={2/1}/>
                </div>
                
                <div className="listcontainer">
                    <div className="listtitle"> List Transaction </div>
                    <AdminTable />
                </div>

            </div>
        </div>
        </>
    );
};

export default AdminProfile;