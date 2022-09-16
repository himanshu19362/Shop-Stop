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


function App() {
  const promise = loadStripe('pk_test_51LVnLDSC4edHBmxLMenhDp3jZ5acKw4BYvKaBr9QZpwsYnDI4RoWbPT3zftUjtu04k0QWLfZR6DpEnSPl2CpgdUq00IqRDHqvR')
  const [ , dispatch] = useStateValue()
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
  } , [])
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes >
          <Route path='/' element={[<Home />]}/>
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
