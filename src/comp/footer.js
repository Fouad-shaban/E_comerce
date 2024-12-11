import React from 'react'
import { MdOutlineSavings } from "react-icons/md";
import { CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";

import './footer.css'
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <div className='icon_box'>
                                <CiDeliveryTruck />
                            </div>
                            <div className='detail'>
                                <h3>Free Delivery</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <MdOutlineSavings />
                            </div>
                            <div className='detail'>
                                <h3>Great Saving</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <BiSupport />
                            </div>
                            <div className='detail'>
                                <h3>24/7 Support</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <CiWallet />
                            </div>
                            <div className='detail'>
                                <h3>Money Back</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='header'>
                            <div className='logo'>
                                <p>PulseTech</p>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='box'>
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About US</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Order</li>
                                    <li>New Product</li>
                                    <li>Old Product</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Contact US</h3>
                                <ul>
                                    <li>Mansoura, Egypt</li>
                                    <li>(+20)10 1345 6347</li>
                                    <li>fouad.sh9880@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer