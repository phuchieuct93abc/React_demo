import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Salac", type: "salad" },
]
const burgerControls = (props) => {
    return (
        <div>
            <h3 style={{textAlign:'center'}}>Total price: {props.price}</h3>

            {controls.map(c => (
                <BurgerControl disabled={props.disabledInfo[c.type]} more={() => props.addIngredient(c.type)} less={() => props.removeIngredient(c.type)} label={c.label}></BurgerControl>
            ))}
        </div>

    )
}
export default burgerControls;