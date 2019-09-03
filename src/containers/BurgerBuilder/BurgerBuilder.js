import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 20,
    bacon: 30,
    meat: 40,
}
class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        },
        totalPrice: 0
    }
    addIngredientHandler = (type) => {
        let ingredients = { ...this.state.ingredients }
        ingredients[type]++;
        let additionalPrice = INGREDIENT_PRICES[type];
        this.setState({ ingredients, totalPrice: this.state.totalPrice + additionalPrice })
    }
    removeIngredientHandler = (type) => {
        let ingredients = { ...this.state.ingredients }
        if (ingredients[type] == 0) {
            return
        }
        ingredients[type]--;
        let subPrice = INGREDIENT_PRICES[type];
        this.setState({ ingredients, totalPrice: this.state.totalPrice - subPrice })
    }
    render() {
        let disabledInfo = Object.keys(this.state.ingredients).reduce((acc, cur) => {
            acc[cur] = this.state.ingredients[cur] == 0
            return acc;
        }, {})
        console.log(disabledInfo)
        return (
            <React.Fragment>

                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                price={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                />
            </React.Fragment>
        )
    }
}
export default BurgerBuilder