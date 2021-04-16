/** @format */

import React from "react";
import { connect } from "react-redux";
import {
  increaseQtyItemOfCart,
  decreaseQtyItemOfCart,
  deleteItemOfCart,
} from "../actions/index";
import { withRouter } from "react-router-dom";

class CartItem extends React.Component {
  render() {
    const { product, dispatch } = this.props;

    return (
      <div
        onClick={(event) => {
          if (
            event.target.className === "action-icons" ||
            event.target.className === "action-icons-remove"
          ) {
            return;
          }
          this.props.history.push(
            "/ecommerce-website/product?id=" + product.id,
          );
        }}
        className="cart-item">
        <div className="left-block">
          <img className="cart-item-img" src={product.img} alt="product" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 15, color: "black" }}>{product.title}</div>
          <div style={{ fontSize: 18, color: "black", marginTop: 5 }}>
            Rs. {product.price}
          </div>
        </div>
        <div className="end-block">
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              className="action-icons"
              src="https://freeiconshop.com/wp-content/uploads/edd/minus-flat.png"
              alt="Decrease"
              onClick={() => {
                dispatch(decreaseQtyItemOfCart(product)); //Dispatch decrease item from cart
              }}
            />
            <div style={{ fontSize: 17, color: "black" }}>
              Qty : {product.qty}
            </div>
            <img
              className="action-icons"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSUXmVtzXbJlZLKHjI551t5E5qMbrBu6oxA&usqp=CAU"
              alt="Increase"
              onClick={() => {
                dispatch(increaseQtyItemOfCart(product)); //Dispatch increase item from cart
              }}
            />
          </div>
        </div>
        <div>
          <button
            style={{ margin: "auto", display: "block", marginTop: "10px" }}
            className="action-icons-remove"
            onClick={() => {
              dispatch(deleteItemOfCart(product)); //Dispatch delete item from cart
            }}>
            Remove
          </button>
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

const connectedAppComponent = connect(mapStateToProps)(CartItem);

export default withRouter(connectedAppComponent);
