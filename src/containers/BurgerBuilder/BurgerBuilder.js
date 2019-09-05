import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';
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
        totalPrice: 0,
        purchasable: false,
        showModal: false
    }
    updatePurchasable() {
        let isPurchasble = Object.keys(this.state.ingredients).reduce((acc, cur) => {
            return acc + this.state.ingredients[cur];
        }, 0) > 0;
        this.setState({ purchasable: isPurchasble });
    }
    addIngredientHandler = (type) => {
        let ingredients = { ...this.state.ingredients }
        ingredients[type]++;
        let additionalPrice = INGREDIENT_PRICES[type];
        this.setState({ ingredients, totalPrice: this.state.totalPrice + additionalPrice }, () => {
            this.updatePurchasable();
        });
    }
    removeIngredientHandler = (type) => {
        let ingredients = { ...this.state.ingredients }
        if (ingredients[type] === 0) {
            return
        }
        ingredients[type]--;
        let subPrice = INGREDIENT_PRICES[type];
        this.setState({ ingredients, totalPrice: this.state.totalPrice - subPrice }, () => {
            this.updatePurchasable();
        })
    }
    order = () => {
        this.setState({ showModal: true })
    }
    onClose = () => {
        this.setState({ showModal: false })
    }
    render() {
        let disabledInfo = Object.keys(this.state.ingredients).reduce((acc, cur) => {
            acc[cur] = this.state.ingredients[cur] === 0
            return acc;
        }, {})
        return (
            <React.Fragment>

                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    price={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    purchasable={this.state.purchasable}
                    order={this.order}
                />
                {this.state.showModal && <Modal onClose={this.onClose}>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>}
            </React.Fragment>
        )
    }
}
export default BurgerBuilder