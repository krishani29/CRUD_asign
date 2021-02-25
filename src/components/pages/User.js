import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const[user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        dob:"",
        bio:""
    })
    const {id} = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3009/users/${id}`);
        //console.log(result);
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="py-2">
            <Link className="btn btn-primary" id="homeb" to="/">Back to Home</Link>
                 <h1>User Details</h1><br/>
                 <h2 className="display-4">User Id: {id}</h2>
                 <hr/>
                 <ul className="list-group w-50">
                     <li className="list-group-item">First Name: {user.firstName}</li>
                     <li className="list-group-item">Last Name: {user.lastName}</li>
                     <li className="list-group-item">Email: {user.email}</li>
                     <li className="list-group-item">Date of birth: {user.dob}</li>
                     <li className="list-group-item">Short Bio: {user.bio}</li>
                 </ul>
               
            </div>

        </div>

    )
}

export default User