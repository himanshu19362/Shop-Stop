import { actionTypes } from "./actionTypes"

export const initialState = {
    user : null , 
    cart : []
}

export const getTotalItems = (cart)=>{
    let sum = 0
    for(let i = 0 ; i < cart.length ; i++){
        sum += cart[i].quantity
    }
    return sum
}

export const getTotalPrice = (cart)=>{
    let price = 0;
    for(let i = 0 ; i < cart.length ; i++){
        price += cart[i].price*cart[i].quantity
    }   
    return price 
}

export const reducer = (state , action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state , 
                user : action.user ,                 
            }
        case actionTypes.ADD_TO_CART:            
            return {
                ...state , 
                cart : [...state.cart , action.item]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state , 
                cart : state.cart.filter(item => item.id !== action.id)
            }
        case actionTypes.SET_QUANTITY:
            const cartList = [...state.cart]
            for(let i = 0 ; i < cartList.length ; i++){
                if(cartList[i].id === action.id)    cartList[i].quantity = action.quantity;
            }
            return {
                ...state , 
                cart : cartList                
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state , 
                cart : []
            }
        default:
            return state
    }
}