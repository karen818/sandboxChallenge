var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

//Load foundation

$(document).foundation();

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <p>Boilerplate 3</p>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>

      </Route>
    </Router>
  </div>,
    document.getElementById('app')
);
