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

function App() {
  
  const [ , dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {      
      if(auth){
        console.log(authUser)
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

        </Routes>        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
