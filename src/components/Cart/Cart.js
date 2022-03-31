import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {
    let total = 0
    let shipping = 0

    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = (total * 0.1).toFixed(2)
    return (
        <div className="cart-summary ">
            <div className="cart">
                <h5 className="summary-title ">Order Summary</h5>
                <div className="summary-details">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $ {total}</p>
                    <p>Total Shipping Charge: $ {shipping}</p>
                    <p>Tax: $ {tax}</p>
                    <h5 className="grand-total">Grand Total: $1559</h5>
                </div>
                <div className="summary-btn">
                    <button className="clear-btn">
                        Clear Cart
                        <FontAwesomeIcon
                            className="cart-icon"
                            icon={faTrashCan}
                        />
                    </button>
                    <button className="review-btn">
                        Review Order
                        <FontAwesomeIcon
                            className="cart-icon"
                            icon={faArrowRight}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
