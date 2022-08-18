import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './nav.css';
import { BsStackOverflow } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa';
import { TiTimes } from 'react-icons/ti'
import { IconContext } from 'react-icons/lib';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  });


  return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
              <BsStackOverflow className='navbar-icon' />
              <b style={{color:'red'}}>DBS</b>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <TiTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/User'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link
                  to='/Admin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link>
              </li> */}
              <li className='nav-btn'>
                {button ? (
                  <Link to='/About' className='btn-link'>
                    <Button buttonStyle='btn--outline' id='btnonly'>About</Button>
                  </Link>
                ) : (
                  <Link to='/About' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      About
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
  );
}

export default Nav;