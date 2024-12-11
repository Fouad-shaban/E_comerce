import React, { useState } from 'react';
import { FaRegEye, FaRegHeart } from 'react-icons/fa';
import './shop.css';
import Homeproduct from './home_product';

function Shop() {
    const [filteredProducts, setFilteredProducts] = useState(Homeproduct);

    // دالة الفلترة بناءً على الفئة
    const filterProducts = (category) => {
        if (category === 'all') {
            setFilteredProducts(Homeproduct);
        } else {
            const cateFilter = Homeproduct.filter((product) => product.cat === category);
            setFilteredProducts(cateFilter);
        }
    };

    return (
        <>
            <div className='shop'>
                <h2># Shop</h2>
                <p onClick={() => filterProducts('all')}>Home . Shop</p>
                <div className='container'>
                    <div className='left_box'>
                        <div className='category'>
                            <div className='header'>
                                <h3>All Category</h3>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => filterProducts('laptop')}># Laptop</li>
                                    <li onClick={() => filterProducts('mobile')}># Mobile</li>
                                    <li onClick={() => filterProducts('headphone')}># Headphone</li>
                                    <li onClick={() => filterProducts('smartwatch')}># Smartwatch</li>
                                    <li onClick={() => filterProducts('airpods')}># Airpods</li>
                                    <li onClick={() => filterProducts('speakers')}># Speakers</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='/images/applebanner.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='/images/applebanner2.jpg' alt='' />
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Shop product</h2>
                            <div className='product_container'>
                                {filteredProducts.map((product) => {
                                    return (
                                        <div className='box' key={product.id}>
                                            <div className='img_box'>
                                                <img src={product.img} alt={product.Name} />
                                                <div className='icon'>
                                                    <li>
                                                        <FaRegEye />
                                                    </li>
                                                    <li>
                                                        <FaRegHeart />
                                                    </li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{product.Name}</h3>
                                                <p>{product.cat}</p>
                                                <p>$ {product.price}</p>
                                                <button>ADD TO CART</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
