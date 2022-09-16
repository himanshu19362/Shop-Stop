import React, { useEffect, useState } from 'react'
import '../assets/css/Payment.css'
import { getTotalPrice } from '../ReactContextApi/reducer'
import { useStateValue } from '../ReactContextApi/StateProvider'
import CartItem from './CartItem'
import { CardElement , useStripe , useElements } from '@stripe/react-stripe-js'
import axios from '../axios2'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { actionTypes } from '../ReactContextApi/actionTypes'

const Payment = () => {
  const [{cart , user} , dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error , setError] = useState(null);
  const [disabled , setDisabled] = useState(true);
  const [processing , setProcessing] = useState(false);
  const [succeeded , setSucceeded] = useState(false)
  const [clientSecret , setClientSecret] = useState('');
  
  const navigate = useNavigate()
  useEffect(()=>{

    const getClientSecret = async()=>{
        const response = await axios({
            method: 'POST' , 
            url: `payments/create?total=${105*getTotalPrice(cart)}`
        })
        setClientSecret(response.data.clientSecret);          
    }    
    getClientSecret()

  } , [])




  const handlePayment = async(event) => {
    event.preventDefault()
    setProcessing(true);

    const payload = stripe.confirmCardPayment(clientSecret , {
        payment_method : {
            card : elements.getElement(CardElement)
        }
    }).then(({ paymentIntent })=>{
        db.collection('user').doc(user?.uid).collection('order').doc(paymentIntent.id).set({
            cart : cart , 
            amount : paymentIntent.amount , 
            created : paymentIntent.created
        })

        setSucceeded(true)
        setError(null)
        setProcessing(false)
        dispatch({
            type: actionTypes.CLEAR_CART
        })

        navigate('/orders' ,  { replace: true })
    })

  }

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')  
  }

  return (
    <div className='payment'>
        <div className='container'>
            <div className='payment-left'>
                <h2>Summary</h2>            
                <div className='item-list'>
                    {cart.length === 0 && <h3>Cart Is Empty</h3>}
                    {cart.map(item => <CartItem price={item.price} name={item.name} id={item.id} url={item.url} visible={false} qty={item.quantity} key={item.id + 1}/>)}                        
                </div>
            </div>                        
            <div className='payment-section'>
                
                <div className='payment-form'>
                    <h3>Card Details</h3>
                    <p><strong>Total : ₹</strong> {getTotalPrice(cart)*1.05}</p>
                    <form onSubmit={handlePayment} >
                        <CardElement onChange={handleChange} />
                        <button disabled={processing || disabled || succeeded || getTotalPrice(cart)*1.05 < 250} type={'submit'}>{processing ? 'Processing' : 'Buy Now' }</button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>

            
              
        </div>

    </div>
  )
}

export default Payment