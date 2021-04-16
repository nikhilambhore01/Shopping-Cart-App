/** @format */

import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  // Calculate total number of items in cart.
  calculateTotalCount = () => {
    const { items } = this.props.cart;
    let total = 0;
    for (const iterator of items) {
      total += iterator.qty;
    }
    return total;
  };

  // Render navbar.
  render() {
    return (
      <div className="navbar">
        <Link className="logo-link" to="/ecommerce-website/">
          <img
            className="logo"
            src="https://thepixelcode.com/oamtoast/2019/10/99.jpg"
            alt="Logo"></img>
        </Link>
        <div className="tabs">
          <Link to="/ecommerce-website/">
            <button className="nav-button">Home</button>
          </Link>

          <Link to="/ecommerce-website/add-product">
            <button className="nav-button">Add Product</button>
          </Link>
        </div>
        <Link className="cart-icon-link" to="/ecommerce-website/cart">
          <div className="cart-icon-container">
            <img
              className="cart-icon"
              src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/1-512.png"
              alt="cartIcon"></img>
            <span className="cart-count">{this.calculateTotalCount()}</span>
          </div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Navbar);
export default withRouter(connectedAppComponent);
