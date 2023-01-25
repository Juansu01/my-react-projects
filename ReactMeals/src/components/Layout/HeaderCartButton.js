import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";

function HeaderCartButton(props) {

    const ctx = useContext(CartContext);

    const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )

}

export default HeaderCartButton;