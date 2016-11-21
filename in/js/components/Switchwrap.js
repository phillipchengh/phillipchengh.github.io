var React = require('react');
var Switchtext = require('./Switchtext');

class Switchwrap extends React.Component {

  render() {
    return (
      <div className="switchwrap">
        <span className={this.props.className}>
          <Switchtext show={this.props.show} hyper={this.props.hyper} text={this.props.text} />
        </span>
      </div>
    );
  }

}


module.exports = Switchwrap;