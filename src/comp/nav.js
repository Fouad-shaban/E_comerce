
import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import './nav.css'

function Nav() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className='header'>
                <div className='top_header'>
                    <div className='icon'>
                        <MdLocalShipping />
                    </div>
                    <div className='info'>
                        <p>Free Shipping when Shipping up to $1000</p>
                    </div>
                </div>
                <div className='mid_header'>
                    <div className='logo'>
                        <p>PulseTech</p>
                    </div>
                    <div className='search_box'>
                        <input
                            type='text'
                            placeholder='Search for products...'
                        />
                        <button><FaSearch /></button>
                    </div>
                    {
                        isAuthenticated ?
                            <div className='user'>
                                <div className='icon'>
                                    <FiLogOut />
                                </div>
                                <div className='btn'>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
                                </div>
                            </div>
                            :
                            <div className='user'>
                                <div className='icon'>
                                    <FiLogIn />
                                </div>
                                <div className='btn'>
                                    <button onClick={() => loginWithRedirect()}>Login</button>
                                </div>
                            </div>
                    }
                </div>
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            isAuthenticated ?
                                <>
                                    <div className='icon'>
                                        <CiUser />
                                    </div>
                                    <div className='info'>
                                        <h2>{user.name}</h2>
                                        <p>{user.email}</p>
                                    </div>

                                </>
                                :
                                <>
                                    <div className='icon'>
                                        <CiUser />
                                    </div>
                                    <div className='info'>
                                        <p>Please Login</p>
                                    </div>

                                </>
                        }
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/cart' className='link'>Cart</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>

                    </div>
                    <div className='offer'>
                        <p>flat 10% over all iphone</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav
