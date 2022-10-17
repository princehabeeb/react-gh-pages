import React, { useState } from 'react'
import Menu from './Menu'
import '../Styles/Products.css'
import { FaStar } from 'react-icons/fa'
import '../Styles/Tabs.css'


function Products() {
    const [items, setItems] = useState(Menu);
    const filterItem = (categItem) => {
         const updatedItems = Menu.filter((currElem) => {
             return currElem.category === categItem;
         });
         setItems(updatedItems);
         }

  return (
    <> 
    <div className='container-fluid products-container'>
    <div className="row mb-5">
                 <div className="col-lg-3 col-sm-3 tabs" >
                     <button className='active' onClick={() => setItems(Menu)} >All Categories</button>
                 </div>
                 <div className="col-lg-3 col-sm-3 tabs">
                     <button onClick={() => filterItem('Men Products')}>Men Products</button>
                 </div>
                 <div className="col-lg-3 col-sm-3 tabs">
                      <button onClick={() => filterItem('Women Products')}>Women Products</button>
                 </div>
                 <div className="col-lg-3 col-sm-3 tabs">
                      <button onClick={() => filterItem('Accesories')}>Accesories</button>
                 </div>
                </div>


       <div className="row mb-5">
        {items.map((elem) => {
            
            const { id, name, image,  price, alt, reviews } = elem;
            return(
                <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                    <img src={image} alt={alt} />
                    <p>{name}</p>
                    <h5>{price}</h5>
                    <div className="stars">
                    <FaStar className='star' />
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <FaStar />
                    <FaStar /> 
                    ({reviews})
                </div>
        </div>
            )
        })}
        
       </div>
    </div>
    </>
  )
}

export default Products