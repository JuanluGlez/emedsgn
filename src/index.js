import React from 'react';
import ReactDOM from 'react-dom/client';

// import Styles
import './index.css';
import './css/normalize.css';
import './css/tokens.css';

// import App
import App from './App';

// import Routes
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);