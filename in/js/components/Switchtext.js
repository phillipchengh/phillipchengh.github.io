var React = require('react');
var Scrambletext = require('./Scrambletext');

class Switchtext extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.show) {
      this.state = {
        source: "",
        target: this.props.text
      };
    } else {
      this.state = {
        source: "",
        target: ""
      };
    }
  }

  shouldComponentUpdate(next_props, next_state) {
    return this.props.show != next_props.show; 
  }

  componentWillReceiveProps(next_props) {
    if (next_props.show) {
      this.setState({
        source: this.state.target,
        target: this.props.text
      });
    } else {
      this.setState({
        source: this.state.target,
        target: ""
      });
    }
  }

  render() {
    return (
      <Scrambletext hyper={this.props.hyper} continuous source={this.state.source} target={this.state.target} />
    );
  }

}


module.exports = Switchtext;