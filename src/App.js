import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './ReactContextAPI/StateProvider';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';

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
            <Payment />
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
