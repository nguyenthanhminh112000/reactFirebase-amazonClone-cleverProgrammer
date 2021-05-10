import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './ReactContextAPI/StateProvider';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51IoO69AMsZia2BH8zSoBmkAlOenCNeZjyos4q3u5uc0sxXIlcDNyNHecbFcj9S7ln9blyBYKuQ3lT4ms5SerEHoo007vfZJaF9'
);

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    // add Event-Listener for
    auth.onAuthStateChanged((user) => {
      // the user just logged in / the user was logged in before.
      dispatch({ type: 'SET_USER', user: user ? user : null });
    });
  }, []);
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
