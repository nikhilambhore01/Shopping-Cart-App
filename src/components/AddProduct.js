/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { showNotification } from "../config/notification";
import firebase from "firebase";

class AddProduct extends Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
    this.desRef = React.createRef();
    this.priceRef = React.createRef();
    this.ratingRef = React.createRef();
    this.imageRef = React.createRef();
    this.db = firebase.firestore();
  }

  // Handle adding a new product to firebase
  addNewProduct = () => {
    const newProduct = {};
    newProduct.title = this.nameRef.current.value;
    newProduct.description = this.desRef.current.value;
    newProduct.price = this.priceRef.current.value;
    newProduct.rating = this.ratingRef.current.value;
    newProduct.img = this.imageRef.current.value;
    if (
      newProduct.title === "" ||
      newProduct.description === "" ||
      newProduct.price === "" ||
      newProduct.rating === "" ||
      newProduct.img === ""
    ) {
      showNotification("No field can be blank");
      return;
    }
    this.db
      .collection("products")
      .add(newProduct)
      .then((docRef) => {
        docRef.get().then((snapshot) => {
          console.log("Product has been added", snapshot.data());
          showNotification("Product has been added");
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log("newProduc", newProduct);
    this.props.history.push(
      "/ecommerce-website/#item" + (this.props.products.items.length + 1),
    );
  };
  render() {
    return (
      <div className="add-prod-div">
        <h2>Add a Product</h2>
        <div className="form-add-prod">
          <div className="form-add-prod-input-case">
            <label>Name</label>
            <input type="text" id="name" ref={this.nameRef}></input>
          </div>
          <div className="form-add-prod-input-case">
            <label>Description</label>
            <input type="text" id="description" ref={this.desRef}></input>
          </div>
          <div className="form-add-prod-input-case">
            <label>Price</label>
            <input type="text" id="price" ref={this.priceRef}></input>
          </div>
          <div className="form-add-prod-input-case">
            <label>Rating</label>
            <input type="text" id="rating" ref={this.ratingRef}></input>
          </div>
          <div className="form-add-prod-input-case">
            <label>Image Link</label>
            <input type="text" id="img" ref={this.imageRef}></input>
          </div>
          <button
            className="action-button"
            onClick={() => this.addNewProduct()}>
            Add
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

const connectedAppComponent = connect(mapStateToProps)(AddProduct);
export default connectedAppComponent;
