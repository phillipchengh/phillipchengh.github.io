var React = require('react');
var ReactDOM = require('react-dom');
var Hyperchar = require('./Hyperchar');

class Hypertext extends React.Component {

  render() {
    var chars = this.props.text.split('');
    return (
      <span className="hypertext">
        {chars.map(function(c, i) {
          return <Hyperchar char={c} key={i} />;
        })}
      </span>
    );
  }

}

module.exports = Hypertext;
