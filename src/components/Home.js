import React from 'react'
import '../assets/css/Home.css'
import vegetables from '../assets/images/vegetable.png'
import dairy from '../assets/images/dairy.png'
import grocery from '../assets/images/grocery.png'
import Section from './Section'

const Home = () => {
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
                <Section sectionImage={vegetables} sectionTitle={'Fruits And Vegetables'} />
                <Section sectionImage={dairy} sectionTitle={'Dairy'} />
                <Section sectionImage={grocery} sectionTitle={'Groceries'} />               
            </div>
        </div>
        
    </div>
  )
}

export default Home