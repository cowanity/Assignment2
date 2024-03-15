import React, { useState } from "react";
import CameraRoundedIcon from '@mui/icons-material/CameraRounded';
import './navbarstyles.css';
import { MenuData } from './menudata.js'; // Import MenuData only once
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Icon from '@mui/material/Icon';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const navigate = useNavigate(); // Use useNavigate hook to navigate between routes

  const handleClick = () => {
    setClicked(!clicked); 
  }

  const handleLogout = () => {
    signOut(); // Call signOut function from useSignOut hook
    navigate('/login'); // Redirect to the login page after logout
  }
  
  return (
    <nav className="Navbaritems">
      <h1 className="logo">
        M4M4 <Link to="/home" style={{ textDecoration: 'none' }}> </Link>
      </h1>

      <div className="menu-icons" >
        {isAuthenticated ? (
          <div className="nav-links" onClick={handleLogout}>Log Out</div>
        ) : (
          <Link to="/login" className="nav-links">Login</Link>
        )}
      </div>

      <div className="menu-icons" onClick={handleClick}>
        <Icon className={clicked ? 'close-icon' : 'menu-icon'}>
          {clicked ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </Icon>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => { // Use updatedMenuData instead of MenuData
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.icon}
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;