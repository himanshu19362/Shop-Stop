import React from 'react'
import '../assets/css/Item.css'
import onion from '../assets/images/onion.jpg'

const Item = () => {
  return (
    <div className='item'>
        <div className='item-image'>
            <img src={onion} />
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