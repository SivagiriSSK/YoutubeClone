import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import MenuList from '../MenuList/MenuList';

function Header() {
  const cart = useContext(CartContext);

  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark '>
      <div className='container-fluid pt-1'>
        <a className='navbar-brand' href='/'>
          Youtube
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <MenuList />
          <button className='btn btn-danger me-2' type='button'>
            Cart ({cart.cartState?.length})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
