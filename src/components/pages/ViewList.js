import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const ViewList = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3009/users");
        console.log(result);
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3009/users/${id}`);
        loadUsers();
    }

    return (
        <div className="container-fluid w-auto ">
            <div className="table py-2">
                <form class="form-inline my-2 my-lg-0" id="searchbar" onChange={event => {setSearchTerm(event.target.value)}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <Link className="btn btn-primary py-2" id="homeb" to="/">Back to Home</Link>

                <h1>User List</h1><br />
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Birth Date</th>
                            <th scope="col">Bio</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.filter((val, key)=>{
                                if(searchTerm==""){
                                    return val
                                    } else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return val
                                    }
                                }).map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.bio}</td>
                                    <td>
                                        <Link className="btn btn-success mr-2" to={`/User/${user.id}`}>View</Link>
                                        <Link className="btn btn-primary mr-2" to={`/user/edituser/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewList;

