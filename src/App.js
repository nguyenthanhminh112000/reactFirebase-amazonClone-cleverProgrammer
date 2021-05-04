import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
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
