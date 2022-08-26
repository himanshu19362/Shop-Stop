import React from 'react'
import '../assets/css/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className='container'>
            <div className='company-details'>
                <p>Shop Stop</p>
                <p><strong>Address:</strong> Okhla Industrial Estate, Phase III, near Govind Puri Metro Station, New Delhi, Delhi 110020</p>
                <p><strong>Phone No:</strong> +91 XXXXXXXXXX</p>
                <p><strong>Email:</strong> help@shopstop.com</p>
                <p><strong>Follow Us On</strong></p>
                <div className='social'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
                <p>Copyright &#169; ShopStop All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer