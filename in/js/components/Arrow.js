var React = require('react');
var Hypertext = require('./Hypertext');

class Arrow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    var content = (this.props.show) ? ((this.props.show_children) ? '▼ ' : '▶ ') : '';
    return (
      <span className="arrow"><Hypertext text={content} /></span>
    );
  }
}

module.exports = Arrow;