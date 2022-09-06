import React from 'react'
import '../assets/css/Cart.css'
import { useStateValue } from '../ReactContextApi/StateProvider'
import CartItem from './CartItem'
import truck from '../assets/images/truck.jpg'
import { getTotalItems, getTotalPrice } from '../ReactContextApi/reducer'
const Cart = () => {
  const [{cart} , ] = useStateValue()
  return (
    <div className='cart'>
        <div className='container'>
            <p><strong>Cart</strong> ({getTotalItems(cart)} items)</p>
            <div className='cart-page'>
                <div className='cart-items'>
                    <div className='cart-title'>  
                        <img src={truck} />                      
                        <p>Your order will be delivered by 26th January 2022</p>
                    </div>
                    <div className='item-list'>
                        {cart.map(item => <CartItem price={item.price} name={item.name} id={item.id} url={item.url} />)}
                        {/* <CartItem /> */}
                    </div>
                </div>
                <div className='checkout'>
                    <div className='checkout-title'>
                        <p>Summary</p>                        
                    </div>
                    <div className='price'>
                        <h4>Subtotal</h4>
                        <p>₹{getTotalPrice(cart)}</p>
                    </div>
                    <div className='price'>
                        <h4>Taxes</h4>
                        <p>₹{getTotalPrice(cart)*0.05}</p>
                    </div>
                    <div className='price total'>
                        <h4>Total</h4>
                        <p>₹{getTotalPrice(cart)*1.05}</p>
                    </div>
                    <div className='checkout-button'>
                        <button>Checkout</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart