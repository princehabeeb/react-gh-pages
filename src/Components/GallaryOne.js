import React from 'react'
import '../Styles/GallaryOne.css'

function GallaryOne() {
  return (
    <div className='container-fluid GallaryOne'>
       <div className="row">
        <div className="col-lg-7 col-sm-12">
          <h3>STREET STYLE</h3>
          <div className="circle-contaner">
            <div className="circle">
              Be your Best
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
        <div className="col col-1">
        <h3>FORMAL BOY</h3>
        </div>
        <div className="col col-2 mt-2">
        <h3>CASUAL BOY</h3>
        </div>
        </div>
       </div>
    </div>
  )
}

export default GallaryOne