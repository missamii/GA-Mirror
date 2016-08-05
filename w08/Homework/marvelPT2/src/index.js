import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import About from './About';
import Viewall from './Viewall';
import App from './App';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    {/* all our routes go here */}
    {/*we replaed <App /> with Route <Route /> */}
    <Route path="/" component={App}>
    <Route path="/about" component={About} />
    <Route path="/viewall" component={Viewall} >
    </Route>
    </Route>
    </Router> )
  ,
  document.getElementById('root')
);
