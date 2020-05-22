import React from 'react';

// Other
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Pages
import Companies from './pages/Companies';

const App = () => (
  <Router>
    <Switch>
      <Route path='/'>
        <Companies />
      </Route>
    </Switch>
  </Router>
);

export default App;
