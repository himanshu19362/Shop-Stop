import React from 'react'
import '../assets/css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header-left'>
                <p>Shop Stop</p>
            </div>
            <div className='header-center'>
                <input type={'text'} placeholder={'Search for Products , Brands and More'}/>
                <div className='search-icon'><SearchIcon /></div>
            </div>
            <div className='header-right'>
                <div className='sign-in'>
                    <p className='first-line'>Hello , </p>
                    <p className='second-line'>Sign In</p>
                </div>
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