import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import BookMark from './BookMark.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//index.js, is the entry file or the first JavaScript file that runs in our app.
//BookMark (index.js' child component) is within Router because this tells React "I will be placing Routes in my BookMark component."

ReactDOM.render(
  <Router>
    <BookMark />
  </Router>,
  document.getElementById('root')
);