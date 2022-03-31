import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {
    return (
        <div className="cart-summary ">
            <div className="cart">
                <h5 className="summary-title ">Order Summary</h5>
                <div className="summary-details">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $1140</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
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
