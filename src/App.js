import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './ReactContextAPI/StateProvider';

function App() {
  const [state, dispatch] = useStateValue();
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
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
