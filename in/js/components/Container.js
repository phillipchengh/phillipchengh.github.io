var React = require('react');
var {Link} = require('react-router');
var {RouteTransition} = require('react-router-transition');
var ReactTransitionGroup = require('react-addons-transition-group');

class Container extends React.Component {

  render() {
    console.log('rendering container');
    console.log(this.props.children);
    return (
      <div className="container">
        <div className="content">
          <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
            {this.props.children}
          </RouteTransition>
        </div>
      </div>
    );
  }

}

module.exports = Container;