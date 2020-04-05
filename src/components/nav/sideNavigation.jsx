import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideNavigation =({sidenav})=> {
    return (
    <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
        <div className='sidebar-sticky'>
            <ul className='nav flex-column'>
                {sidenav.map(item => <li key={item.id} className='nav-item'><NavLink exact className='nav-link' to={item.url}>{item.name}</NavLink></li>)}
            </ul>
        </div>
    </nav>
    )
}