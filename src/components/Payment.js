import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ReactContextAPI/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';

const Payment = () => {
  console.log('Payment');
  const [{ basket, user }] = useStateValue();
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Checkout({<Link to='/payment'>{basket.length} items</Link>})</h1>
        <div className='payment__section'>
          <h3 className='payment__title'>Payment address</h3>
          <div className='payment__address'>
            <p className='payment__address--email'>{user?.email}</p>
            <p className='payment__address--street'>284, Tran Phu</p>
            <p className='payment__address--city'>Long Khanh city, Dong Nai</p>
          </div>
        </div>
        <div className='payment__section'>
          <h3 className='payment__title'>Review items and delivery</h3>
          <div className='payment__items'>
            {basket.map((item) => (
              <div className='checkoutProduct__paymentUtilities'>
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='payment__section'>
          <h3 className='payment__title'>Payment Method</h3>
          <div className='payment__method'></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
