import React from "react";
import Input from "../../UI/Input";

import styles from './MealItemForm.module.css';

function MealItemForm(props) {
    return <form className={styles.form}>
        <Input
            label="Amount"
            input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        <button type="button">+ Add</button>
    </form>
}

export default MealItemForm;