import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux';


import './styles/css/theme.css'
import './styles/css/adminStyles.css'
import "../node_modules/react-loading-skeleton/dist/skeleton.css";

import './styles/js/theme'

import store from './redux/store';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>

  , document.getElementById('root'));

reportWebVitals();

