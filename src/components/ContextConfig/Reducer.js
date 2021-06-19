export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    const uniqueBasketItems = new Set(basket);
    let basketSubtotal = 0;
    if (uniqueBasketItems.size > 0) {
        uniqueBasketItems.forEach((product) => basketSubtotal += (product.price * product.quantity))
        return basketSubtotal;
    } else {
       return basketSubtotal;
    }
}

export const getBasketCount = (basket) => {

    const uniqueBasketItems2 = new Set(basket);
    let basketCount = 0;
    if (uniqueBasketItems2.size > 0) {
        uniqueBasketItems2.forEach((product) => basketCount += product.quantity);
        return basketCount;
    } else {
       return basketCount;
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

        case "DECREMENT_QUANTITY":
            let newBasket2 = [...state.basket];
            
            const existedBasketItem2 = state.basket.find((basketItem) => 
                                                        basketItem.id === action.item.id);
            
            if(existedBasketItem2 && existedBasketItem2.quantity > 1) {
                existedBasketItem2.quantity = (existedBasketItem2.quantity - 1);
                return {
                    ...state,
                    basket: [...state.basket, existedBasketItem2]
                }

            } else {
                existedBasketItem2.quantity = 0;
                return {
                    ...state,
                    basket: (newBasket2.filter(function(item) {
                        return item.id !== action.item.id;
                    }))
                }
            }

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            return {
                ...state,
                basket: (newBasket.filter(function(item) {
                    return item.id !== action.id;
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