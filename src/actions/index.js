/** @format */

// Action Types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const INCREASE_QTY_ITEM_CART = "INCREASE_QTY_ITEM_CART";
export const DECREASE_QTY_ITEM_CART = "DECREASE_QTY_ITEM_CART";
export const DELETE_ITEM_CART = "DELETE_ITEM_CART";

// Action Creators for products

// Add multple products to cart
export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}

// Action creators in cart
// Add products to cart

export function addProductToCart(item) {
  return {
    type: ADD_PRODUCT_TO_CART,
    item,
  };
}

// Increase quantity of cart of an item
export function increaseQtyItemOfCart(item) {
  return {
    type: INCREASE_QTY_ITEM_CART,
    item,
  };
}

// decrese quantity of cart of an item
export function decreaseQtyItemOfCart(item) {
  return {
    type: DECREASE_QTY_ITEM_CART,
    item,
  };
}

// delete item of cart
export function deleteItemOfCart(item) {
  return {
    type: DELETE_ITEM_CART,
    item,
  };
}
