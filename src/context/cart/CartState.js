import {useReducer} from 'react';
import Context from './Context';
import Reducer from  './Reducer';
import {SHOW_HIDE_CART,ADD_TO_CART,REMOVE_ITEM} from  '../Types.js';
const CartState=({children})=>{
    const initialstate={
        showCart:false,
        cartItems:[]
    };
    const [state,dispatch]=useReducer(Reducer,initialstate);
    const addToCart=(item)=>{
        dispatch({type:ADD_TO_CART,payload:item})
    }
    const showHideCart=()=>{
        dispatch({type:SHOW_HIDE_CART})
    }
    const removeItem=(id)=>[
        dispatch({type:REMOVE_ITEM,payload:id})
    ]
    return(
       <Context.Provider value={{
           showCart:state.showCart,
           cartItems:state.cartItems,
           addToCart,
           showHideCart,
           removeItem
       }}>{children}</Context.Provider>
    )
}
export default CartState;