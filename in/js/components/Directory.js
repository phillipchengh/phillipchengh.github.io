var React = require('react');
var Scrambletext = require('./Scrambletext');
var Switchtext = require('./Switchtext');
var Arrow = require('./Arrow');

class Directory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      show_children: false
    };
  }

  componentWillReceiveProps(next_props) {
    this.state = {
      show: next_props.show,
      show_children: false
    };
  }

  onClick() {
    this.setState({
      show_children: !this.state.show_children
    });
  }

  render() {
    var that = this;
    var components = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {show: that.state.show_children});
    });
    return (
      <div>
        <span className="directory" onClick={this.onClick.bind(this)}>
          <Arrow show={this.props.show} show_children={this.state.show_children} /><Switchtext show={this.props.show} hyper text={this.props.name} />
        </span>
        <div className="directory-content">
          {components}
        </div>
      </div>
    );
  }

}

module.exports = Directory;