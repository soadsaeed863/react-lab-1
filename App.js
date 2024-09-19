import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import HelpCenter from './HelpCenter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route path="/help-center" component={HelpCenter} />
      </Switch>
    </Router>
  );
};

export default App;
