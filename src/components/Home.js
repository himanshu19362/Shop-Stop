import React from 'react'
import '../assets/css/Home.css'
import carrot from '../assets/images/carrot.png'
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
                <Section sectionImage={carrot} sectionTitle={'Fruits And Vegetables'} />
                
            </div>

        </div>
        
    </div>
  )
}

export default Home