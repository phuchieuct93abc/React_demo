import React from 'react';

const orderSummary = props => (
    <div>
        <h3>Your order</h3>
        <div>Ingredients:</div>
        <ul>
            {Object.keys(props.ingredients)
                .filter(k => props.ingredients[k] > 0)
                .map(k => (

                    <li key={k}>{props.ingredients[k]} {k}</li>

                ))}
        </ul>
    </div>
);
export default orderSummary;