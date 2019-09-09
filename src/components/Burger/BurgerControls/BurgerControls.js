import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import Button from 'react-bootstrap/Button';
import styleClasses from "./BurgerControls.module.css"
import { connect } from 'react-redux'
import { strictEqual } from 'assert';
import { ADD_INGREDIENT, LESS_INGREDIENT } from '../../../store/action';

const controls = [
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Salae", type: "salad" },
]
const burgerControls = (props) => {
    let isPurchasble = Object.keys(props.ingredients).reduce((acc, cur) => {
        return acc + props.ingredients[cur];
    }, 0) > 0;

    let disabledInfo = Object.keys(props.ingredients).reduce((acc, cur) => {
        acc[cur] = props.ingredients[cur] === 0 
        return acc;
    }, {})
    return (
        <div className={styleClasses.burgerControls}>
            <h3 style={{textAlign:'center'}}>Total price: {props.price}</h3>

            {controls.map(c => (
                <BurgerControl key={c.type} disabled={!(disabledInfo[c.type] ==false )} more={() => props.addMore(c.type)} less={() => props.less(c.type)} label={c.label}></BurgerControl>
            ))}
            <Button variant="primary" disabled={!isPurchasble} onClick={props.order}>Order now</Button> 
        </div>

    )
}
let mapStateToProps=(state)=>{
    return {
        ingredients:state.ingredients,
        price:state.price
    }
}
let mapDispatchToProps = dispatch=>{
    return {
        addMore:(ingredient)=>{dispatch({type:ADD_INGREDIENT,val:ingredient})},
        less:(ingredient)=>{dispatch({type:LESS_INGREDIENT,val:ingredient})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(burgerControls);