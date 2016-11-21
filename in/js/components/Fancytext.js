var React = require('react');
var TextMaster = require('../TextMaster');
var Hypertext = require('./Hypertext');
var Scrambletext = require('./Scrambletext');
var K = require('../Constants');
var Utilities = require('../Utilities');

class Fancytext extends React.Component {

  constructor(props) {
    super(props);
    this.titles = K.TITLES;
    this.index = 0;
    this.target = this.titles[this.index];
    this.title = "";

    this.state = {
      target: this.target,
      title: this.title
    };
  }

  componentDidMount() {
    this.title_handler = setInterval(this.updateTitle.bind(this), 4000); 
  }

  updateTitle() {
    this.title = this.target;
    this.index = (this.index+1) % this.titles.length;
    this.target = this.titles[this.index];
    this.setState({
      target: this.target,
      title: this.title
    });
  }

  componentWillUnmount() {
    this.setState({
      target: "",
      title: this.state.target
    });
  }

  render() {
    return (
      <span onClick={this.updateTitle.bind(this)}>
        <Scrambletext hyper source="" target="phillip: " /><Scrambletext hyper continuous source={this.state.title} target={this.state.target} />
      </span>
    );
  }
}

module.exports = Fancytext;