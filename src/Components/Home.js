import React from 'react';
import Navbar from './Navbar';
import '../Styles/Home.css'
import {FaArrowUp} from 'react-icons/fa'

function Home() {
  return (
    <div className='container-fluid home'>
        <Navbar />

        <div className="home-contents row">
           <div className="col-lg-8 col-sm-12">
             <h1>WEAR THE <span>BEST</span></h1> 
           </div>
           <div className="col-lg-4 col-sm-12 inner-divs">
            <div className='inner-divs-1'>
              <a href="/">Show Now</a> 
              <FaArrowUp />
            </div>
            <div className='inner-divs-2'>
              <a href="/">See Promo</a> 
              <FaArrowUp />
            </div>
           </div>
        </div>
    </div>
  )
}

export default Home