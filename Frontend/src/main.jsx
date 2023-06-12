import React from 'react'
import ReactDOM from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import App from './App'
import './index.css'

// import 'bootstrap/dist/css/bootstrap.css'; //Bootstrap css
// import 'bootstrap//dist/js/bootstrap.bundle.min.js' //Bootstrap js




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
