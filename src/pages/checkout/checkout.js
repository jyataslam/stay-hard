import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-blocks">
                <span>Product</span>
            </div>
            <div className="header-blocks">
                <span>Description</span>
            </div>
            <div className="header-blocks">
                <span>Quantity</span>
            </div>
            <div className="header-blocks">
                <span>Price</span>
            </div>
            <div className="header-blocks">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((item, index) => (
            <CheckoutItem key={index} cartItem={item} />
        ))}
        <div className="total">
            <span>TOTAL: ${cartTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
