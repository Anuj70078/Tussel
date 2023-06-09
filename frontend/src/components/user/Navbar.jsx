import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import '../../App.css'
import { useUserContext } from '../../context/UserProvider';
import { useState } from 'react';

const Navbar = () => {

    const { loggedIn, setLoggedIn, logout } = useUserContext();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const showLoggedIn = () => {
        if (!loggedIn) {
            return (
                // <ul className="navbar-nav">
                <>
                    {/* <li className="nav-item"> */}
                    <NavLink className="nav-link" aria-current="page" to="/signin">

                        <button type="button" className="btn btn-success me-3 mb-1">
                            Login
                        </button>
                    </NavLink>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                    <NavLink className="nav-link" aria-current="page" to="/signup">
                        <button type="button" className="btn btn-success me-3 mb-1">
                            SignUp
                        </button>
                    </NavLink>
                    {/* </li> */}
                </>
                // </ul >

            );
        }
    }

    const showLogout = () => {
        if (loggedIn) {
            return (
                <ul className="navbar-nav">
                    {/* // <li className="nav-item"> */}
                    {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                        Logout
                    </button> */}
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/user/organisationPro'
                        >Organisation Profile</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/user/feedback'
                        >Feedback</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/user/displayDetails'
                        >Display Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/user/competitionEntry'
                        >Competition</Link>
                    </li>
                    <button type="button" className="btn btn-danger me-3 mb-2" onClick={logout}>
                        LogOut
                    </button>
                    {/* // </li> */}
                </ul>
            );
        }
    }




    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'green' }}>
                <div className="container">
                    <img src="https://cdn-icons-png.flaticon.com/512/708/708906.png"
                        alt=""
                        height={45}
                        className='mx-1'
                    />
                    <Link className="navbar-brand text-white" to="homepage"><b>TUSSEL</b></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/homepage">Home
                                </Link>
                            </li> */}

                            {/* <li className="nav-item">
                                <Link className="nav-link text-white" to='organisationPro'
                                >Organisation Profile</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to='feedback'
                                >Feedback</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='/displayDetails'
                                >Display Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='/competitionEntry'
                                >Competition</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                    <Link className="nav-link text-white" to={'/updateComp_data/' + currentUser._id}
                                    >Update Comp Data</Link>
                                </li> */}
                        </ul>


                        {showLoggedIn()}
                        {showLogout()}

                        {/* <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="signin">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="signup">SignUp</Link>
                            </li>
                        </ul> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar