import React, { Component } from 'react';
import './BackButton.css'

const BackButton = (props) => {
    return (
        <div className="BackButton-Container" onClick={(e) => { props.history.goBack(); }}>
            <div className="BackButton-text"> {' < '} </div>
        </div>
    )
}

export default BackButton