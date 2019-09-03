import React from 'react';
import styleClass from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
        .map(key => {
            let number = props.ingredients[key];
            return [...Array(number)].map((_, index) =>
                <BurgerIngredient key={key + index} type={key}></BurgerIngredient>
            )
        })
        .reduce((accu, curr) => accu.concat(curr), []);
    if (ingredients.length === 0) {
        ingredients = <div>Please add more ingredients</div>
    }
    return (
        <div className={styleClass.burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {ingredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
};
export default burger