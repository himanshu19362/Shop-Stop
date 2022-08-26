import React from 'react'
import '../assets/css/Section.css'
import Item from './Item'

const Section = ({sectionImage , sectionTitle}) => {
  return (
    <div className='section'>
        <div className='section-title'>
            <img src={sectionImage}/>
            <p>{sectionTitle}</p>
        </div>
        <div className='section-items'>
            <Item />
            
        </div>

    </div>
  )
}

export default Section