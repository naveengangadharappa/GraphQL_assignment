import React, { Component } from 'react';
import './NavBar.css'
import BackButton from './BackButton';

const NavBar = (props) => {
    return (
        <div className="NavBar-Container" style={{ flexDirection: 'row' }}>
            <BackButton {...props} />
            <div className="NavBar-text"> Back to User</div>
        </div>
    )
}

export default NavBar