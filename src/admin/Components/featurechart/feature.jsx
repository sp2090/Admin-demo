import React from 'react';
import './feature.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const feature = () => {
    return (
        <div className='featuref'>
            <div className="topf">
                <h1 className="titlef"> Total Revenue </h1> <MoreVertIcon className='verti' fontSize='medium'/>
            </div>
            <div className="bottomf">
                <div className="feturechartf">
                    <CircularProgressbar value={80} text={"80%"} strokeWidth={5} /> </div>
                <p className='titlep'> Total sales made today </p>
                <p className='amountp'> $ 420 </p>
                <p className='descp'> Transaction processing soon. All iteams will shown in details of product chart. </p>
           <div className='summaryf'>
                <div className="itemf">
                <div className="itemftitle"> Target </div>
                <div className="itemfresult negativef"> 
                <KeyboardArrowDownIcon fontSize='small' />
                <div className="resultfamount">$12.4k</div>
                 </div>
                 </div>
                <div className="itemf">
                <div className="itemftitle"> Last Week </div>
                <div className="itemfresult positivef"> 
                <KeyboardArrowUpIcon fontSize='small' />
                <div className="resultfamount">$12.4k</div>
                 </div>
                 </div>
                <div className="itemf">
                <div className="itemftitle"> Last Month </div>
                <div className="itemfresult positivef"> 
                <KeyboardArrowUpIcon fontSize='small' />
                <div className="resultfamount">$12.4k</div>
                 </div>
                 </div>
           </div>
            </div>
        </div>
    );
};

export default feature;