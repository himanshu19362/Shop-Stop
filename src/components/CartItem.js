import React, { useState } from 'react'
import '../assets/css/CartItem.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStateValue } from '../ReactContextApi/StateProvider';
import { actionTypes } from '../ReactContextApi/actionTypes';

const CartItem = ({name , price , url , id}) => {
  const [quantity , setQuantity] = useState(1);
  const [ , dispatch] = useStateValue()
  const increment = ()=>{
    
      dispatch({
        type: actionTypes.SET_QUANTITY , 
        id: id , 
        quantity : quantity+1
      })
      setQuantity(quantity + 1);      
  }

  const decrement = ()=>{
    if(quantity === 1){
      dispatch({
        type: actionTypes.REMOVE_FROM_CART , 
        id: id
      })
      return;
    }    
    dispatch({
      type:actionTypes.SET_QUANTITY , 
      id:id , 
      quantity:quantity-1
    })
    setQuantity(quantity-1)    
  }
  return (
    <>
      <div className='cart-item'>
          <div className='cart-item-image'>
            <img src={url}/>
          </div>        
          <div className='item-detail'>
            <p>{name}</p>
            <p>₹ {price}</p>
            <div className='button-container'>
              <div className='button-counter'>
                <button className='minus' onClick={decrement}><RemoveIcon /></button>
                <p>{quantity}</p>
                <button className='plus' onClick={increment}><AddIcon /></button>
              </div>
            </div>          
          </div>        
          <div className='item-price'>
            <p>₹ {price*quantity}</p>
          </div>
      </div>
    </>
  )
}

export default CartItem