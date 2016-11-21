var React = require('react');
var Hypertext = require('./Hypertext');

class Hyperlink extends React.Component {

  render() {
    return (
      <a className="directory" href={this.props.href}><Hypertext text={this.props.text} /></a>
    );
  }

}

module.exports = Hyperlink;
