/** @format */

import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions/index";
import { withRouter } from "react-router-dom";

class ProductItem extends React.Component {
  // Add an item to cart, dispatch action.
  addToCart = () => {
    const { dispatch } = this.props;
    dispatch(addProductToCart(this.props.product));
  };

  // Render function.
  render() {
    const { product } = this.props;
    return (
      <div
        onClick={(event) => {
          if (event.target.className === "action-icons-addcart") {
            return;
          }
          this.props.history.push(
            "/ecommerce-website/product?id=" + product.id,
          );
        }}
        className="product-item"
        id={"item" + product.id}>
        <div className="left-block-products">
          <img className="product-item-img" src={product.img} alt="product" />
        </div>

        <div className="end-block-products">
          <div className="end-block-products-detials">
            <div style={{ fontSize: 17 }}>{product.title}</div>
            <div style={{ fontSize: 14, color: "black", marginTop: 5 }}>
              Rs. {product.price}
            </div>
            <div style={{ fontSize: 15, color: "#black", marginTop: 5 }}>
              Rating : {product.rating}
            </div>
          </div>
          <div className="products-actions">
            <img
              className="action-icons-addcart"
              src="https://icon-library.com/images/add-to-cart-icon/add-to-cart-icon-4.jpg"
              alt="Edit"
              onClick={this.addToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(ProductItem);
export default withRouter(connectedAppComponent);
