var React = require('react');
var Switchwrap = require('./Switchwrap');

class Switchbullet extends React.Component {

  render() {
    return (
      <span className="switchbullet">
        <Switchwrap className={this.props.className} show={this.props.show} text={"● " + this.props.text} />
      </span>
    );
  }

}

module.exports = Switchbullet;