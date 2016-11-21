var React = require('react');
var Switchtext = require('./Switchtext');

class Switchlink extends React.Component {

  render() {
    return (
      <a className="switchlink" href={this.props.href}><Switchtext hyper show={this.props.show} text={this.props.text} /></a>
    );
  }

}

module.exports = Switchlink;
