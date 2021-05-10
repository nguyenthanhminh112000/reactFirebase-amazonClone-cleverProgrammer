import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../ReactContextAPI/StateProvider';
import { getBasketTotal } from '../ReactContextAPI/reducer';
import { useHistory } from 'react-router';

const Subtotal = () => {
  console.log('Subtotal');
  const history = useHistory();
  const [{ basket }] = useStateValue();
  const goToPayment = (e) => {
    if (Array.isArray(basket) && basket.length > 0) {
      history.push('/payment');
    } else {
      console.log('You have an empty BASKET!');
    }
  };
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' />
                This order contains a subtotal gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={goToPayment}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
