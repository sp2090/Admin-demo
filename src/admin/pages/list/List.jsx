import React from 'react';
import './list.css'
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar'
import DataTable from '../../Components/datatable/DataTable';

const List = () => {
    return (

        <div className='listlist'>
            <Sidebar/>
            <div className="listCont">
                <Navbar/>
                <DataTable/>
            </div>
        </div>
 
 );
};

export default List;