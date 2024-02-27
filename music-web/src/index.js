import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
var http = require('http');

http.createServer(function (req, res)) {
  res.write('A Monk in a Cloud');
  res.end();
}).listen(3000);
reportWebVitals();
