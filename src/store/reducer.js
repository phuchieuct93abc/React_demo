import { ADD_INGREDIENT, LESS_INGREDIENT } from './action';
const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 20,
    bacon: 30,
    meat: 40,
}
export const ingredientReducer = (state = {}, action) => {
    let ingredients = { ...state };
    if (action.type === ADD_INGREDIENT) {
        let ingredientCount = ingredients[action.val] || 0;
        ingredientCount++;
        ingredients[action.val] = ingredientCount;
        return ingredients
    }
    if (action.type === LESS_INGREDIENT) {
        let ingredientCount = ingredients[action.val] - 1;
        ingredients[action.val] = ingredientCount;
        return ingredients;
    }
    return state;

}
export const priceReducer = (state = 0, action) => {
    if (action.type === ADD_INGREDIENT) {
        return state + INGREDIENT_PRICES[action.val];
    }
    if (action.type === LESS_INGREDIENT) {
        return state - INGREDIENT_PRICES[action.val];
    }

    return state;
}
