import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handelCart }) => {
    const { name, price, img, ratings, seller } = product
    return (
        <div className="single-product">
            <div className="product-thumbnail">
                <img src={img} alt="" />
            </div>
            <div className="card-info">
                <div>
                    <h6 className="product-title">{name}</h6>
                    <p className="product-price">Price: ${price}</p>
                </div>
                <div className="ratings-manufacturer">
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} stars</p>
                </div>
            </div>
            <button onClick={() => handelCart(product)} className="cart-btn">
                Add to Cart
                <FontAwesomeIcon className="cart-icon" icon={faCartPlus} />
            </button>
        </div>
    )
}

export default Product
