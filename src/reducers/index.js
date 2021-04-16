/** @format */

import { combineReducers } from "redux";
import { showNotification } from "../config/notification";
import {
  ADD_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  INCREASE_QTY_ITEM_CART,
  DECREASE_QTY_ITEM_CART,
  DELETE_ITEM_CART,
} from "../actions/index";

const initialProductsState = {
  items: [],
};

// Handle products
export function products(state = initialProductsState, action) {
  switch (action.type) {
    // Add products to cart
    case ADD_PRODUCTS:
      return { ...state, items: action.items };

    default:
      return state;
  }
}

const initialCartState = {
  items: [],
};

// Handle cart
export function cart(state = initialCartState, action) {
  switch (action.type) {
    //  increase the quantity
    case ADD_PRODUCT_TO_CART:
    case INCREASE_QTY_ITEM_CART: {
      // console.log(state);
      let index = state.items.findIndex(function (element) {
        return element.id === action.item.id;
      });
      if (index === -1) {
        showNotification("1 Item added to cart");
        action.item.qty = 1;
        return { ...state, items: [...state.items, action.item] };
      } else {
        showNotification("Quantity increased by 1");
        const newState = { ...state };
        newState.items[index].qty++;
        return newState;
      }
    }
    //  decrease the quantity
    case DECREASE_QTY_ITEM_CART: {
      let index = state.items.findIndex(function (element) {
        return element.id === action.item.id;
      });
      if (index === -1) {
        return state;
      } else {
        const newState = { ...state };
        if (newState.items[index].qty === 1) {
          return state;
        }
        newState.items[index].qty--;
        showNotification("Qty Decreased by 1");
        return newState;
      }
    }

    // Delete item from cart
    // case DELETE_PRODUCT:
    case DELETE_ITEM_CART: {
      const filteredItems = state.items.filter(function (element) {
        return element.id !== action.item.id;
      });
      showNotification("Removed From Cart");
      return { ...state, items: filteredItems };
    }
    default:
      return state;
  }
}

// Combine reducers
export default combineReducers({
  products,
  cart,
});
