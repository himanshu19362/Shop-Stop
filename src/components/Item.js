import React, { useEffect, useState } from 'react'
import '../assets/css/Item.css'
import { actionTypes } from '../ReactContextApi/actionTypes'
import { useStateValue } from '../ReactContextApi/StateProvider'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Item = ({url , name , price , id}) => {
  const [{cart} , dispatch] = useStateValue()
  

  const [quantity , setQuantity] = useState(0);
  const addToCart = ()=>{   
      dispatch({
        type: actionTypes.ADD_TO_CART , 
        item : {url , price , name , id , quantity : 1}
      })   
      setQuantity(1)    
  } 

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
    setQuantity(0)
    return;
  }    
  dispatch({
    type:actionTypes.SET_QUANTITY , 
    id:id , 
    quantity:quantity-1
  })

  setQuantity(quantity-1)
      
}

  useEffect(()=>{
    for(let i = 0 ; i < cart.length ; i++){
      if(cart[i].id === id){
        setQuantity(cart[i].quantity)
        break
      }
    }
  } , [quantity])
  
  return (
    <div className='item'>
        <div className='item-image'>
            <img src={url} alt={"Fruit"} />
        </div>
        <div className='item-info'>
          <p>{name}</p>
          <p>₹ {price}</p>
          <div>
            {quantity === 0 ? <button className='add-button' onClick={addToCart}>Add To Cart</button> : 
            
            <div className='button-container'>
              <div className='button-counter'>
                <button className='minus' onClick={decrement}><RemoveIcon /></button>
                <p style={{'fontWeight' : '100'}}>{quantity}</p>
                <button className='plus' onClick={increment}><AddIcon /></button>
              </div>
            </div>            
            }            
          </div>  
        </div>
    </div>
  )
}

export default Item

// 'https://him-image-api.herokuapp.com/'

