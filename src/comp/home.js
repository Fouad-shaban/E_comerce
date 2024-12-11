/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import "./home.css"
import { Link } from 'react-router'
import Homeproduct from './home_product'
import { FaRegEye, FaRegHeart, FaFacebookF, FaInstagram, FaOpencart } from "react-icons/fa";
import { CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
function Home() {
    //product Category
    const [newProduct, setNewProduct] = useState([])
    const [featureProduct, setFeatureProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    //trending Products
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    //Filter of trending
    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x
        })
        setTrendingProduct(filterproduct)
    }
    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct)
    }
    useEffect(() => {
        productcategory()
    })
    const productcategory = () => {
        //New Product
        const newCategory = Homeproduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newCategory)
        //Feature Product
        const featuredcategory = Homeproduct.filter((x) => {
            return x.type === 'featured'
        })
        setFeatureProduct(featuredcategory)
        //Top Product
        const topcategory = Homeproduct.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }
    return (
        <>
            <div className='home'>
                <div className='top_banner'>
                    <div className='content'>
                        <h3>silver aluminum</h3>
                        <h2>Smart Watch</h2>
                        <p>30% off at your first order</p>
                        <Link to='/shop' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className='trending'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='header'>
                                <div className='heading'>
                                    <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                                </div>
                                <div className='cate'>
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>top selling</h3>
                                </div>
                            </div>
                            <div className='products'>
                                <div className='container'>
                                    {
                                        trendingProduct.map((curElm) => {
                                            return (
                                                <>
                                                    <div className='box'>
                                                        <div className='img_box'>
                                                            <img src={curElm.img}></img>
                                                            <div className='icon'>
                                                                <div className='box_icon'>
                                                                    <FaRegEye />
                                                                </div>
                                                                <div className='box_icon'>
                                                                    <FaRegHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='info'>
                                                            <h3>{curElm.Name}</h3>
                                                            <p>${curElm.price}</p>
                                                            <button className='btn'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button>Show More</button>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='right_container'>
                                <div className='testimonial'>
                                    <div className='head'>
                                        <h3>Our testimonial</h3>
                                    </div>
                                    <div className='detail'>
                                        <div className='img_box'>
                                            <img src='images/man1.jpg' alt='testimonial'></img>
                                        </div>
                                        <div className='info'>
                                            <h3>Dev Name</h3>
                                            <h4>web developer</h4>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem maiores eos deleniti. Placeat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='newsletter'>
                                    <div className='head'>
                                        <h3>newsletter</h3>
                                    </div>
                                    <div className='form'>
                                        <p>join our mailing list</p>
                                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                        <button>Subscribe</button>
                                        <div className='icon_box'>
                                            <div className='icon'>
                                                <FaFacebookF />
                                            </div>
                                            <div className='icon'>
                                                <FaXTwitter />
                                            </div>
                                            <div className='icon'>
                                                <FaInstagram />
                                            </div>
                                            <div className='icon'>
                                                <CiLinkedin />
                                            </div>
                                            <div className='icon'>
                                                <CiYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banners'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='box'>
                                <img className='img1' src='images/wireless-audio.jpg'></img>
                            </div>
                            <div className='box'>
                                <img className='img2' src='images/bigsale.jpg'></img>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='top'>
                                <img className='img1' src='images/newbanner1.jpg'></img>
                                <img className='img2' src='images/applebanner.jpg'></img>
                            </div>
                            <div className='bottom'>
                                <img src='images/bannerfree.jpg'></img>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='product_type'>
                    <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New Product</h2>
                            </div>
                            {newProduct.map((curElm) => {
                                return (
                                    <>
                                        <div className='productbox'>
                                            <div className='img-box'>
                                                <img src={curElm.img} alt=''></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>$ {curElm.price}</p>
                                                <div className='icon'>
                                                    <button><FaRegEye /></button>
                                                    <button><FaRegHeart /></button>
                                                    <button><FaOpencart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Featured Product</h2>
                            </div>
                            {featureProduct.map((curElm) => {
                                return (
                                    <>
                                        <div className='productbox'>
                                            <div className='img-box'>
                                                <img src={curElm.img} alt=''></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>$ {curElm.price}</p>
                                                <div className='icon'>
                                                    <button><FaRegEye /></button>
                                                    <button><FaRegHeart /></button>
                                                    <button><FaOpencart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Top Product</h2>
                            </div>
                            {topProduct.map((curElm) => {
                                return (
                                    <>
                                        <div className='productbox'>
                                            <div className='img-box'>
                                                <img src={curElm.img} alt=''></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>$ {curElm.price}</p>
                                                <div className='icon'>
                                                    <button><FaRegEye /></button>
                                                    <button><FaRegHeart /></button>
                                                    <button><FaOpencart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home