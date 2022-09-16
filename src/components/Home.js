import React, { useEffect, useState } from 'react'
import '../assets/css/Home.css'
import vegetables from '../assets/images/vegetable.png'
import dairy from '../assets/images/dairy.png'
import grocery from '../assets/images/grocery.png'
import Section from './Section'
import axios from '../axios'




const Home = () => {
  const [vegData , setVegData] = useState([])
  const [dairyData , setDairyData] = useState([])
  const [groceryData , setGroceryData] = useState([])
  useEffect(()=> {
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
    <div className='home'>
        <div className='container'>
            <div className='banner'>
                <div>
                    <p>Welcome to Shop Stop.</p>
                    <p>One stop destination for Grocery shopping.</p>
                </div>
            </div>
            <div className='main'>
                <Section sectionImage={vegetables} sectionTitle={'Fruits And Vegetables'} items={vegData} />
                <Section sectionImage={dairy} sectionTitle={'Dairy'} items={dairyData} />
                <Section sectionImage={grocery} sectionTitle={'Groceries'} items={groceryData} />               
            </div>
        </div>
        
    </div>
  )
}

export default Home

// https://shop-stop-api.herokuapp.com/grocery