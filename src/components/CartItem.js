import React, { useState } from 'react'
import '../assets/css/CartItem.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStateValue } from '../ReactContextApi/StateProvider';
import { actionTypes } from '../ReactContextApi/actionTypes';

const CartItem = ({name , price , url , id , qty, visible}) => {
  // const [quantity , setQuantity] = useState(qty);
  const [ , dispatch] = useStateValue()
  const increment = ()=>{    
      dispatch({
        type: actionTypes.SET_QUANTITY , 
        id: id , 
        quantity : qty+1
      })
      // setQuantity(quantity + 1);      
  }

  const decrement = ()=>{
    if(qty === 1){
      dispatch({
        type: actionTypes.REMOVE_FROM_CART , 
        id: id
      })
      return;
    }    
    dispatch({
      type:actionTypes.SET_QUANTITY , 
      id:id , 
      quantity:qty-1
    })
        
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
            {!visible && <p>Quantity : {qty}x</p>}
            <div className='button-container' style={!visible ? {'display' : 'none'} : {}}>
              <div className='button-counter'>
                <button className='minus' onClick={decrement}><RemoveIcon /></button>
                <p>{qty}</p>
                <button className='plus' onClick={increment}><AddIcon /></button>
              </div>
            </div>          
          </div>        
          <div className='item-price'>
            <p>₹ {price*qty}</p>
          </div>
      </div>
    </>
  )
}

export default CartItem