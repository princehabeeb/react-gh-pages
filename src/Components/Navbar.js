import { useRef } from 'react';
import Logo from '../img/logo.png'
import '../Styles/Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';


function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <div className='container-fluid header'>
      <img src={Logo} alt="nav logo" className='logo' />
       <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Category</a>
        <a href="/#">Prome</a>
        <a href="/#">About</a>
        <a href="/#" className='active'>Contact me</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
       </nav>
       <button className='nav-btn ' onClick={showNavbar}>
          <FaBars />
        </button>
    </div>
  )
}

export default Navbar