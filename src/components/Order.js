import React from 'react'
import '../assets/css/Order.css'
import CartItem from './CartItem'
import moment from 'moment'
const Order = ({ data , date , total , id }) => {
  return (
    <div className='order'>
      <div className='order-title'><strong>Ordered On </strong>: {moment.unix(date).format('MMMM Do YYYY , h:mma')}</div>
      <div className='order-list'>
        {data.map(item => <CartItem name={item.name} url={item.url}  price={item.price} qty={item.quantity} id={item.id} key={item.id + 4} visible={false} />)}
        <p><strong>Total :</strong> ₹ {total/100}</p>
      </div>
    </div>
  )
}

export default Order