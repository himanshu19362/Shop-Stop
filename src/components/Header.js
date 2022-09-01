import React from 'react'
import '../assets/css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from '../ReactContextApi/StateProvider';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
const Header = () => {
  
  const [{ user } , ] = useStateValue()
  const handleSignOut = () => {
    if(user){
        auth.signOut()
    }
  }    
  return (
    <div className='header'>
        <div className='container'>            
            <div className='header-left'>
                <Link to={'/'}><p className='title' >Shop Stop</p></Link>
            </div>
            <div className='header-center'>
                <input type={'text'} placeholder={'Search for Products , Brands and More'}/>
                <div className='search-icon'><SearchIcon /></div>
            </div>
            <div className='header-right'>
                <Link to={!user && '/login'}>
                    <div className='sign-in' onClick={handleSignOut}>
                        <p className='first-line'>Hello , </p>
                        <p className='second-line'>{user ? 'Sign Out' : 'Sign In'}</p>
                    </div>
                </Link>
                <div className='order-history'>
                    <p className='first-line'>View</p>
                    <p className='second-line'>Order History</p>
                </div>
                <div className='cart-count'>
                    <AddShoppingCartIcon />
                    <p className='second-line'>0</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header