import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './OrderSummary.module.css'
const orderSummary = props => (
    <div className={classes.orderSummary}>
        <h3>Your order</h3>
        <div>Ingredients:</div>
        <ul>
            {Object.keys(props.ingredients)
                .filter(k => props.ingredients[k] > 0)
                .map(k => (

                    <li key={k}>{props.ingredients[k]} {k}</li>

                ))}
        </ul>
        <div className={classes.footer}>
            <p className={classes.footerText} >Continue to checkout?</p>

            <Button className={classes.cancelBtn} variant="outline-danger" onClick={props.perchaseCanceled}>Cancel</Button>
            <Button  className={classes.checkoutBtn} variant="outline-success" onClick={props.perchaseCheckedout}>Checkout</Button>
        </div>

    </div>
);
export default orderSummary;