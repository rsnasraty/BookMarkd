import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import BookMark from './BookMark.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <BookMark />
  </Router>,
  document.getElementById('root')
);