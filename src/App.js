import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './ReactContextApi/StateProvider';
import { actionTypes } from './ReactContextApi/actionTypes';
import Cart from './components/Cart';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './components/Orders';
import { useState } from 'react';
import axios from './axios'

function App() {
  const promise = loadStripe('pk_test_51LVnLDSC4edHBmxLMenhDp3jZ5acKw4BYvKaBr9QZpwsYnDI4RoWbPT3zftUjtu04k0QWLfZR6DpEnSPl2CpgdUq00IqRDHqvR')
  const [ , dispatch] = useStateValue()

  const [vegData , setVegData] = useState([])
  const [dairyData , setDairyData] = useState([])
  const [groceryData , setGroceryData] = useState([])

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {      
      if(auth){
        
        dispatch({
          type: actionTypes.SET_USER , 
          user : authUser
        })
      }
      else{
        dispatch({
          type: actionTypes.SET_USER , 
          user: null
        })
      }
    })


    const getData = async ()=> {
      const veg = await axios({
          method: 'GET' , 
          url: '/veg'
      })
      setVegData(veg.data)

      const dairy = await axios({
          method: 'GET' , 
          url: '/dairy'
      })
      setDairyData(dairy.data)
      
      const grocery = await axios({
          method: 'GET' , 
          url: '/grocery'
      })
      setGroceryData(grocery.data)        
  }

  getData()
  } , [])
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes >
          <Route path='/' element={[<Home vegData={vegData} dairyData={dairyData} groceryData={groceryData}/>]}/>
          <Route path='/login' element={[<Login />]}/>
          <Route path='/cart' element={[<Cart />]}/>
          <Route path='/payment' element={[<Elements stripe={promise}><Payment /></Elements>]}/>
          <Route path='/orders' element={[<Orders />]}/>

        </Routes>        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
