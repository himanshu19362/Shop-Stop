import React from 'react'
import '../assets/css/Order.css'
import CartItem from './CartItem'
import moment from 'moment'
const Order = ({ data , date }) => {
  return (
    <div className='order'>
      <div className='order-title'><strong>Ordered On </strong>: {moment.unix(date).format('MMMM Do YYYY , h:mma')}</div>
      <div className='order-list'>
        {data.map(item => <CartItem name={item.name} url={item.url}  price={item.price} qty={item.quantity} id={item.id} visible={false}/>)}
        <p><strong>Total :</strong> {'$ 25'}</p>
      </div>
    </div>
  )
}

export default Order