import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import Button from 'react-bootstrap/Button';
import styleClasses from "./BurgerControls.module.css"
const controls = [
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Salae", type: "salad" },
]
const burgerControls = (props) => {
    return (
        <div className={styleClasses.burgerControls}>
            <h3 style={{textAlign:'center'}}>Total price: {props.price}</h3>

            {controls.map(c => (
                <BurgerControl key={c.type} disabled={props.disabledInfo[c.type]} more={() => props.addIngredient(c.type)} less={() => props.removeIngredient(c.type)} label={c.label}></BurgerControl>
            ))}
            <Button variant="primary" disabled={!props.purchasable} onClick={props.order}>Order now</Button> 
        </div>

    )
}
export default burgerControls;