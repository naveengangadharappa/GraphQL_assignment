import React, { Component, useEffect } from 'react';
import './UserDetails.css';
const UserDetails = (props) => {

    return (
        <div className="User-Container">
            <div className="User-Profile-Container">
                <div className="Profile-picture">
                    {(props.userdetails.username && props.userdetails.name) ? `${props.userdetails.name[0]}${props.userdetails.username[0]}` : null}
                </div>
                <div style={{ margin: "1rem" }}> {props.userdetails.name && props.userdetails.name}</div>
            </div>
            <hr style={{ margin: 10 }} />
            <div className="User-Details-Container">
                <div className="Row1" style={{ flexDirection: 'row' }}>
                    <div className="item">
                        <h3>User Name</h3>
                        <p>{props.userdetails.username && props.userdetails.username}</p>
                    </div>
                    <div className="item">
                        <h3>ID</h3>
                        <p>{props.userdetails.id && props.userdetails.id}</p>
                    </div>
                    <div className="item">
                        <h3>Web site</h3>
                        <p>{props.userdetails.website && props.userdetails.website}</p>
                    </div>
                </div>
                <div className="Row1" style={{ flexDirection: 'row' }}>
                    <div className="item">
                        <h3>Phone</h3>
                        <p>{props.userdetails.phone && props.userdetails.phone}</p>
                    </div>
                    <div className="item">
                        <h3>Phone</h3>
                        <p>{props.userdetails.phone && props.userdetails.phone}</p>
                    </div>
                    <div className="item">
                        <h3>Email</h3>
                        <p>{props.userdetails.email && props.userdetails.email}</p>
                    </div>
                </div>
            </div>
            <hr style={{ margin: 10 }} />
            <div className="User-Address-Container">
                <div className="Row1" style={{ flexDirection: 'row' }}>
                    <div className="item">
                        <h3>Street</h3>
                        {/* <p>{props.userdetails.address.street && props.userdetails.address.street}</p> */}
                    </div>
                    <div className="item">
                        <h3>Suit</h3>
                        {/* <p>{props.userdetails.address.suit && props.userdetails.address.suit}</p> */}
                    </div>
                    <div className="item">
                        <h3>City</h3>
                        {/* <p>{props.userdetails.address.city && props.userdetails.address.city}</p> */}
                    </div>
                    <div className="item">
                        <h3>Zipcode</h3>
                        {/* <p>{props.userdetails.address.zipcode && props.userdetails.address.zipcode}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails