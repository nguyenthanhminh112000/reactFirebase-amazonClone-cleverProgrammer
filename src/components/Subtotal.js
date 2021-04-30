import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../ReactContextAPI/StateProvider';
const Subtotal = () => {
  console.log('Subtotal');
  const [{ basket }, dispatch] = useStateValue();
  const totalPrice = basket.reduce(
    (accumulator, { price }) => accumulator + price,
    0
  );
  console.log(totalPrice);
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length === 0 ? 0 : basket.length} items):{' '}
                <strong>{totalPrice}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' />
                This order contains a subtotal gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
