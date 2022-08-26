import React from 'react'
import '../assets/css/Item.css'



const Item = ({image}) => {
  return (
    <div className='item'>
        <div className='item-image'>
            <img src={image} alt={" "} />
        </div>
        <div className='item-info'>
          <p>Onions (1 Kg)</p>
          <p>₹ 24.56</p>
          <button className='add-button'>Add To Cart +</button>
            
        </div>
    </div>
  )
}

export default Item