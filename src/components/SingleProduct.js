/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    const { products } = this.props;
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    let ind = products.items.findIndex(function (element) {
      return element.id + "" === id;
    });
    this.item = products.items[ind];
  }

  // Add item to cart and dispatch action
  addToCart = () => {
    const { dispatch } = this.props;
    dispatch(addProductToCart(this.item));
  };

  render() {
    const item = this.item;
    return (
      <div className="single-product">
        <div className="upper-block">
          <img src={item.img} alt="product"></img>
          <div>
            <div>{item.title}</div>
            <div>Rs. {item.price}</div>
            <div>Rating: {item.rating}</div>
          </div>
        </div>
        <div className="lower-block">
          <div>Description: {item.description}</div>
          <button
            style={{ margin: "auto", display: "block", marginTop: "10px" }}
            className="action-button"
            onClick={this.addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const connectedAppComponent = connect(mapStateToProps)(SingleProduct);
export default connectedAppComponent;
