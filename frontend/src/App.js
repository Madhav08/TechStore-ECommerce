import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import CartScreen from './pages/Cart/Cart';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products/:id' component={ProductDescription} />
        <Route exact path='/cart/:id?' component={CartScreen} />
      </Switch>
    </Router>
  );
}

export default App;
