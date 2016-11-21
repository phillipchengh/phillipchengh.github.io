var React = require('react');
var ReactDOM = require('react-dom');
var K = require('../Constants');
var Color = require('../Color');
var classNames = require('classnames');

class Hyperchar extends React.Component {

  constructor(props) {
    super(props);
    var color = Color.randomColor();
    this.state = {
      color: color
    };
  }

  componentDidMount() {
    var thisChar = this;
    this.intervalHandler = setInterval(function() {
      thisChar.setState({color: Color.randomColor()});
    }, K.LONG_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandler); 
  }

  render() {
    var classSet = {
      hyperchar: true
    };
    for (var i = 0; i < K.CHAR.COLORS.length; i++) {
      classSet[K.CHAR.COLORS[i]] = this.state.color === K.CHAR.COLORS[i];
    }
    var classes = classNames(classSet);
    return <span className={classes}>{this.props.char}</span>;
  }

}

module.exports = Hyperchar;
