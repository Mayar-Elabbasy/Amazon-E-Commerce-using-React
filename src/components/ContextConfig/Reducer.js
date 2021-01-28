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

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

                if (index >= 0) {
                    newBasket.splice(index, 1);
                } else {
                    // console.log("Product not found"); 
                }

            return {
                ...state,
                basket: newBasket
            }

        default: 
            return state;
    }
}

export default reducer;