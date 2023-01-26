import React, { useContext } from "react";
import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItem from './CartItem'

function Cart(props) {

    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    function cartItemRemoveHandler(itemId) {

    }

    function cartItemAddHandler(item) {

    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )

    return (
        <Modal onClickHideCart={props.onClickHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onClickHideCart} className={styles['button--alt']}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )

}

export default Cart;