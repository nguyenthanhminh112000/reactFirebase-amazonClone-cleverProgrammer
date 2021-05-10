import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../ReactContextAPI/StateProvider';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './../ReactContextAPI/reducer';
// import axios from 'axios';
import axios from '../axios';

const Payment = () => {
  console.log('Payment');
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  // state of payment
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabledEmpty, setDisabledEmpty] = useState(true);

  // Still dont know what is this use for
  //---------------------------------------------------
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: `payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data?.clientSecret);
      } catch (error) {
        console.log(error.message);
      }
    };
    getClientSecret();
  }, [basket]);
  //------------------------------------------------------
  const handleSubmitPayment = async (e) => {
    // handle submit payment
    try {
      e.preventDefault();
      setProcessing(true);
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      setSucceeded(true);
      setProcessing(false);
      setError(null);
      history.replace('/orders');
    } catch (error) {}
  };
  const handleChangePayment = (e) => {
    // handle change payment
    //prevent empty CARDID and WRONG CARD ID
    setDisabledEmpty(e.empty);
    setError(e.error ? e.error.message : '');
    console.log({
      card: elements.getElement(CardElement),
    });
  };

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
              <div className='checkoutProduct__paymentUtilities' key={item.id}>
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
          <div className='payment__details'>
            <form onSubmit={handleSubmitPayment}>
              <CardElement onChange={handleChangePayment} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => {
                    return (
                      <>
                        <p>
                          Order total({basket.length} items):{' '}
                          <strong>{value}</strong>
                        </p>
                      </>
                    );
                  }}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button
                  disabled={
                    processing ||
                    (Array.isArray(basket) && basket.length <= 0) ||
                    succeeded ||
                    disabledEmpty ||
                    error
                  }
                >
                  {
                    <span>
                      {disabledEmpty
                        ? 'Empty Payment'
                        : error
                        ? error
                        : processing
                        ? 'Processing Payment'
                        : succeeded
                        ? 'Succeed'
                        : 'Buy Now'}
                    </span>
                  }
                </button>
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
