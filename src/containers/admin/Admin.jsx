import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/containers/admin/index.scss';

function Admin() {
    return (
    <div class="main-div">
        <div class="all-Sidebar"><Sidebar/></div>
        <div className="all-Navbar"><Navbar/></div>
        <div className="middle-div">
            <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_960,h_640/v1601408477/assets/cf/01ee39-87a9-4ae6-89b7-321eeb67ad79/original/Hospitality-hero.svg" alt="error"></img>
        </div>
    </div>
    )
}

export default Admin