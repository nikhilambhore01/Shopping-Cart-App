/** @format */

import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { addProducts } from "./actions";
import firebase from "firebase";

// Add routing and different routes
class App extends React.Component {
  constructor() {
    super();

    this.db = firebase.firestore();
  }
  componentDidMount = () => {
    this.db
      .collection("products")
      .orderBy("price", "asc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        const products = snapshot.docs.map((doc) => {
          // console.log(doc.data());
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        const { dispatch } = this.props;
        // console.log("products.data int", products);
        dispatch(addProducts(products));
      });
  };

  


  render() {
       
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route
            exact
            path="/ecommerce-website/"
            render={(props) => <Products {...props} />}
          />
          <Route path="/ecommerce-website/cart" component={Cart} />
          <Route path="/ecommerce-website/add-product" component={AddProduct} />
          <Route path="/ecommerce-website/product" component={SingleProduct} />
        </Router>
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

 const connectedAppComponent = connect(mapStateToProps)(App);
export default (connectedAppComponent);
