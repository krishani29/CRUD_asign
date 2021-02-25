import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container">
                <Link className="navbar-brand" href="#">CRUD Project</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active px-2">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item  px-2">
                            <Link className="nav-link" to="/adduser">Add User </Link>
                        </li>
                        <li className="nav-item  px-2">
                            <Link className="nav-link" to="/viewuserlist">View User List</Link>
                        </li>
                        <li className="nav-item  px-2">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )

}
export default Navbar;
