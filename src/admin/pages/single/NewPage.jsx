import React, { useState } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import './newpage.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';

const NewPage = ({inputs, title}) => {

        const[file, setFile] = useState('');

        //console.log(file);

    return (
        <div className='newpage'>
            <Sidebar/>
        <div className="newpagecontainer">
            <Navbar/>
        <div className="newpagetop">
            <h3 className='firsttitle'> {title} </h3>
        </div>
        <div className="newpagebottom">
            <div className="newpageleft"> 
            <img className='imgnewpage' src={ file ? URL.createObjectURL(file ) :"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" } alt="No Image" />
             </div>
            <div className="newpageright"> 
            <form>
                <div className="newpageinputcon iconsetup">
                    <label htmlFor="file"> Image: <UploadFileIcon className="icon"/> </label>
                    <input type="file" onChange={event=>setFile(event.target.files[0])} id="file" style={{display:'none'}}/>
                </div>
                {/* <div className="newpageinputcon">
                    <label> Username </label>
                    <input type="text" placeholder='sp2022' />
                </div>
                <div className="newpageinputcon">
                    <label> Full name </label>
                    <input type="text" placeholder='Sagar Patel' />
                </div>
                <div className="newpageinputcon">
                    <label> Email </label>
                    <input type="text" placeholder='sp2022@gmail.com' />
                </div>
                <div className="newpageinputcon">
                    <label> Phone </label>
                    <input type="text" placeholder='+913254352022' />
                </div>
                <div className="newpageinputcon">
                    <label> Password </label>
                    <input type="password" />
                </div>
                <div className="newpageinputcon">
                    <label> Full Address </label>
                    <input type="text"/>
                </div> */}
            {inputs.map((inputs)=> 
            <div className='newpageinputcon' key={inputs.id}>
                <label>{inputs.label} </label> 
                <input type={inputs.type} placeholder={inputs.placeholder}/>
            </div>
            )}


                <div className='buttonwhole'>
                <button className='buttonnewpage'> Send </button>
                </div>
            </form>
            </div>
        </div>
        </div>    
        </div>
    );
};

export default NewPage;