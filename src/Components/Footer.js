import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer-section pt-5 pb-5 mt-5'>
       <div className="container">
        <div className="row">
            <div className="col-lg-3 col-sm-12">
                <h1>Quick Links</h1>
                <ul>
                    <li><a href="/">-Category</a></li>
                    <li><a href="/">-Promo</a></li>
                    <li><a href="/">-Men Products</a></li>
                    <li><a href="/">-Women Products</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
                <h1>Services</h1>
                <ul>
                    <li><a href="/">-Men Products</a></li>
                    <li><a href="/">-Women Products</a></li>
                    <li><a href="/">-Category</a></li>
                    <li><a href="/">-Promo</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
                <h1>Social Media</h1>
                <ul>
                    <li><a href="https://instagram.com/techiesupdate">-Instagram</a></li>
                    <li><a href="https://twitter.com/princehabeeeb">-Twitter</a></li>
                    <li><a href="/">-Facebook</a></li>
                    <li><a href="/">-Linkedin</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
                <h1>About</h1>
                <ul>
                    <li><a href="/">-Company</a></li>
                    <li><a href="/">-Career</a></li>
                    <li><a href="/">-Legal</a></li>
                    <li><a href="/">-Help</a></li>
                </ul>
            </div>
        </div>
       </div>
       <center>
       <div className="center pt-5 pb-5">
        <h6>Website developed by <a href="wa.me/2348149040309">Prince</a></h6>
       </div>
       </center>
    </div>
  )
}

export default Footer