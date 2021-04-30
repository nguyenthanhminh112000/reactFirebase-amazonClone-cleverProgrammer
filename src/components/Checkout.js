import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
  console.log('Checkout');
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='Ads'
          className='checkout__ad'
        />
        <div>
          <h2 className='checkout__title'>Shopping Cart</h2>
        </div>
      </div>
      <div className='checkout__right'>{<Subtotal />}</div>
    </div>
  );
};

export default Checkout;
