import React from 'react';
import { useStateValue } from '../ReactContextAPI/StateProvider';
import './CheckoutProduct.css';
const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log('Checkout Product');
  const handleRemoveProduct = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', id: id });
  };
  return (
    <div className='checkoutProduct'>
      <img
        src={image}
        alt='Checkout Product'
        className='checkoutProduct__image'
      />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </div>
        <button
          className='checkoutProduct__remove'
          onClick={handleRemoveProduct}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
