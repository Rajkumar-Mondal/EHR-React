import React from 'react';
import '../../styles/components/sidebar/Sidebar.scss';
import { IoIosAttach } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
export default function Sidebar() {
return (
<div class="sidebar">
<h3 id="first-heading">HER</h3>
<img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="error" id="logo" width="120px"></img>
<div id="add-sidebar-manu">
<ul>
    <li>
    <span class="title"> <IoIosAttach/><a href="https://www.google.com/" class="listSize">Dashboard</a></span>
    </li>
    <li>
    <span class="title"> <IoIosAddCircle/><a href="https://www.google.com/" class="listSize">New Order</a></span>
    </li>
    <li>
    <span class="title"> <FcAbout/><a href="https://www.google.com/" class="listSize">Order History</a></span>
    </li>
    <li>
    <span class="title"> <FcAbout/><a href="https://www.google.com/" class="listSize">Accept Return</a></span>
    </li>
</ul>
</div>
</div>
)
}