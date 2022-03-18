import React from 'react';
import '../../styles/components/sidebar/Sidebar.scss';
import { FcAbout } from "react-icons/fc";
export default function Sidebar() {
return (
<div class="sidebar">
<h3 id="first-heading">HER</h3>
<div id="first-img">
<img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="error"></img>
</div>
<div id="add-sidebar-manu">
<ul>
    <li>
    <span class="title"> <FcAbout/><a href="https://www.google.com/">Dashboard</a></span>
    </li>
    <li>
    <span class="title"> <FcAbout/><a href="https://www.google.com/">New Order</a></span>
    </li>
    <li>
    <span class="title"> <FcAbout/><a href="https://www.google.com/">Order History</a></span>
    </li>
    <li>
    <span class="title"> <FcAbout/><a href="https://www.google.com/">Accept Return</a></span>
    </li>
</ul>
</div>
</div>
)
}