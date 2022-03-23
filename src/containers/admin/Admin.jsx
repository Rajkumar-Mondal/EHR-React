import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/containers/admin/index.scss';

function Admin() {
    return (
    <div className="main-div">
        <Sidebar/>
        <Navbar/>
        <div className='image-div'>
        <img src="https://i.pinimg.com/originals/00/5e/7b/005e7b665a61d4f71e52ad626dd3ec56.png" alt="Error" class="responsive" width="600" height="400"></img>
        </div>
    </div>
    )
}

export default Admin