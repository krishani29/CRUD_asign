import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div className="container mt-4">
            <div className="p-4">
                <img src="home2.svg" style={{ width: 400 }} className="img-fluid home" alt="" />
                <div className="userbtn">
                    <label className="user-l"><h3>Add User using </h3></label><br />
                    <Link to="/adduser" className="btn btn-dark" style={{ fontSize: 25 }} >Create</Link>
                    <br /><br />
                    <label className="user-l"><h3>View list of  users</h3> </label><br />
                    <Link to="/viewuserlist" className="btn btn-dark" style={{ fontSize: 25 }}>View</Link><br />
                </div>
            </div>

        </div>

    )
}

export default Home