export const initialState = {
    basket: [],
    user: null
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
            const existedBasketItem = state.basket.find((basketItem) => 
                                                        basketItem.id === action.item.id);
            
            if(existedBasketItem) {
                existedBasketItem.quantity = (existedBasketItem.quantity + 1);
                return {
                    ...state,
                    basket: [...state.basket, existedBasketItem]
                }

            } else {
                action.item.quantity = 1;
                return {
                    ...state,
                    basket: [...state.basket, action.item]
                }
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            newBasket.filter(function(item) {
                return item.id != action.id;
            });

            return {
                ...state,
                basket: (newBasket.filter(function(item) {
                    return item.id != action.id;
                }))
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default: 
            return state;
    }
}

export default reducer;