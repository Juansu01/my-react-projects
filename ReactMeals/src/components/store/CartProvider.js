import React, { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0,
};

function cartReducer(state, action) {

    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item => item.id === action.item.id)
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    } else if (action.type === "REMOVE_ITEM") {

        const existingCartItemIndex = state.items.findIndex(
            (item => item.id === action.id)
        );
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => {
                return item.id !== existingCartItem.id
            })
        } else {
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex].amount -= 1
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    return defaultCartState
};

function CartProvider(props) {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCartHandler(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    };

    function removeItemFromCart(itemId) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: itemId })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
