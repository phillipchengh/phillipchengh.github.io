var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, Link, browserHistory} = require('react-router');
var Index = require('./Index');
var Container = require('./Container');

class Root extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Index} />
        </Route>
      </Router>
    );
  }

}

module.exports = Root;
