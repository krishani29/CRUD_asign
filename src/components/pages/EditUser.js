import React, { useState, useEffect } from 'react';
import Link from 'react-router-dom';
import {useHistory,useParams} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

const EditUser = () => {

    const history = useHistory();
    const {id} = useParams();

    const[user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        dob:"",
        bio:""
    })
    const {firstName,lastName, email, dob, bio} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
     //console.log(e.target.value);
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3009/users/${id}`,user);
        history.push("/viewuserlist");   
    }

    useEffect(() => {
        loadUser();
    }, []);
    
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3009/users/${id}`);
        console.log(result);
        setUser(result.data);
    }
    
    return (
        <div className="container editform">
            <div className="py-4 ">
                <h1 id="edit" >Edit User </h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" 
                            value={firstName} 
                            name="firstName"
                            className="form-control" 
                            id="firstName" required 
                            placeholder="Enter Your First Name" 
                            onChange={e => onInputChange(e)}
                            />
                            
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"  
                          value={lastName}
                          name="lastName" 
                          className="form-control" 
                          id="lastName" required 
                          onChange={e => onInputChange(e)}
                          placeholder="Enter Your Last Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email"  
                          value={email}  
                          name="email"
                          className="form-control" 
                          id="email" required 
                          onChange={e => onInputChange(e)}
                          placeholder="abc@gmail.com" />
                    </div>
                    <div class=" form-group md-form">
                        <label htmlFor="dob" >Date Of Birth</label>
                        <input type="date"  
                            value={dob}  
                            id="picker" 
                            name="dob"
                            onChange={e => onInputChange(e)}
                            className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Short Bio</label>
                        <textarea className="form-control"  
                          value={bio}  
                          name="bio"
                          id="bio" rows="3" required 
                          onChange={e => onInputChange(e)}
                          placeholder="Enter Short Bio here"></textarea>
                    </div>
                    <button type="button" onClick={onSubmit} className="btn btn-dark submitb bg-warning"  ><h4 id="eb">Update User</h4></button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;