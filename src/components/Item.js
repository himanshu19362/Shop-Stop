import React from 'react'
import '../assets/css/Item.css'



const Item = ({image , name , price}) => {
  return (
    <div className='item'>
        <div className='item-image'>
            <img src={image} alt={"Fruit "} />
        </div>
        <div className='item-info'>
          <p>{name}</p>
          <p>₹ {price}</p>
          <div>
            <button className='add-button'>Add To Cart +</button>
          </div>  
        </div>
    </div>
  )
}

export default Item

// 'https://him-image-api.herokuapp.com/'