export const initialState = {
    basket: [],
}

export const getBasketTotal = (basket) => {
    // console.log("basket",basket);
    let basketSubtotal = 0;
    if (basket.length > 0) {
        basket.map((product) => basketSubtotal += product.price)
        // console.log("basketSubtotal", basketSubtotal);
        return basketSubtotal
    } else {
        // console.log("basketSubtotal", basketSubtotal);
       return basketSubtotal;
    }
}

const reducer = (state, action) =>  {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default: 
            return state;
    }
}

export default reducer;