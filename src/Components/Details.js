import React from 'react';
import '../Styles/Details.css'
import {FaTrailer, FaPaypal, FaMoneyBill, FaShip } from 'react-icons/fa'

function Details() {
  return (
    <div className='container dettails pb-2'>
       <div className="row">
            <div className="col details-col-a">
                <div>
                <FaTrailer />
                </div>
               <p>Super fast and free <br /> delievery</p>
            </div>
            <div className="col details-col-b">
                <div className="col">
                <div>
                < FaShip />
                </div>
               <p>Non-contact <br /> shiping</p>
                </div>
                <div className="col">
                <div>
                <FaMoneyBill />
                </div>
               <p>Money-back <br /> guaranteed</p>
                </div>
            </div>
            <div className="col details-col-c">
            <div>
                <FaPaypal />
                </div>
               <p>Super secure payment <br /> system</p>
            </div>
       </div>
    </div>
  )
}

export default Details