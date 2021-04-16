/** @format */

import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";

class Cart extends React.Component {
  // Calculate total price for cart.
  calculateTotal(items) {
    let price = 0;
    for (const iterator of items) {
      price += iterator.price * iterator.qty;
    }
    return price;
  }

  render() {
    const { items } = this.props.cart;
    const totalPrice = this.calculateTotal(items);
    return (
      <div className="cart-view">
        <div className="cart">
          {items.map((item) => {
            return <CartItem product={item} key={item.id} />;
          })}
        </div>

        <div className="cart-total">
          {items.length > 0 ? (
            <div>
              <div>Total Price : {totalPrice}</div>
              <button className="cart-checkout-button">Checkout</button>
            </div>
          ) : (
            <h1>Cart Empty!</h1>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Cart);
export default connectedAppComponent;
