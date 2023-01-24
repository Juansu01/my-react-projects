import React from "react";
import CartContext from "./cart-context";

function CartProvider(props) {

    function addItemToCartHandler(item) {

    }

    function removeItemFromCart(itemId) {

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
