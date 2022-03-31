import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'

import Cart from '../Cart/Cart'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    const handelCart = (product) => {
        setCart([...cart, product])
    }
    return (
        <div className="main-container">
            {/* cart container */}
            <div className="cart-container">
                {products.map((product) => (
                    <Product
                        handelCart={handelCart}
                        key={product.id}
                        product={product}
                    ></Product>
                ))}
            </div>
            {/* Order Summary */}
            <Cart cart={cart}></Cart>
        </div>
    )
}

export default Shop
