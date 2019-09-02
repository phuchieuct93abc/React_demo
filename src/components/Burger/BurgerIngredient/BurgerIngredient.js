import React from 'react';
import styleClasses from './BurgerIngredient.module.css';
const burgerIngredient = (props) => {

    let ingredient = null;
    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className={styleClasses.breadBottom}>Bread bottom</div>;
            break;
        case 'bread-top':
            ingredient = (
                <div className={styleClasses.breadTop}>
                    <div className={styleClasses.seeds1}></div>
                    <div className={styleClasses.seeds2}></div>
                </div>
            );
            break;
        case "meat":
            ingredient = <div className={styleClasses.meat}></div>;
            break;
        case "cheese":
            ingredient = <div className={styleClasses.cheese}></div>;
            break;
        case "bacon":
            ingredient = <div className={styleClasses.bacon}></div>;
            break;
        case "salad":
            ingredient = <div className={styleClasses.salad}></div>;
            break;
    }
    return ingredient;
}
export default burgerIngredient;