import React from 'react';
import ReactDOM from 'react-dom';

// Stores
import { Provider } from 'mobx-react';
import stores from './stores';

// Other
import './global.css';

// Components
import App from './App';

export const StoreContext = React.createContext();

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('app')
);
