import React, { useEffect } from 'react'
import '../assets/css/Item.css'
import { actionTypes } from '../ReactContextApi/actionTypes'
import { useStateValue } from '../ReactContextApi/StateProvider'



const Item = ({url , name , price , id}) => {
  const [{cart} , dispatch] = useStateValue()
  
  const addToCart = ()=>{
    dispatch({
      type: actionTypes.ADD_TO_CART , 
      item : {url , price , name , id , quantity : 1}
    })    
  } 
  
  return (
    <div className='item'>
        <div className='item-image'>
            <img src={url} alt={"Fruit"} />
        </div>
        <div className='item-info'>
          <p>{name}</p>
          <p>₹ {price}</p>
          <div>
            <button className='add-button' onClick={addToCart}>Add To Cart +</button>
          </div>  
        </div>
    </div>
  )
}

export default Item

// 'https://him-image-api.herokuapp.com/'