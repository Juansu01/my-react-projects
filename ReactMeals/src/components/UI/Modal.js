import React, { Fragment } from "react";
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

function Backdrop(props) {
    return <div onClick={props.onClickHideCart} className={styles.backdrop}></div>
}

function ModalOverlay(props) {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

function Modal(props) {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClickHideCart={props.onClickHideCart} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    )

}

export default Modal;