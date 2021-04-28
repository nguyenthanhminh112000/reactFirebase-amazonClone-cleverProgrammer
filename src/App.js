import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
