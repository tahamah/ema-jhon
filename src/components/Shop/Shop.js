import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'

import Cart from '../Cart/Cart'
import { addToDb, getStorCart } from '../../utilities/fakedb'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStorCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])
    const handelCart = (product) => {
        setCart([...cart, product])
        addToDb(product.id)
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
