var React = require('react');
var TextMaster = require('../TextMaster');
var Hypertext = require('./Hypertext');
var K = require('../Constants');
var Utilities = require('../Utilities');

class Scrambletext extends React.Component {

  constructor(props) {
    super(props);
    this.text = (this.props.source == null) ? "" : this.props.source;
    this.target = this.props.target;
    this.state = {
      text: this.text
    };
  }

  componentDidMount() {
    this.startTransform();
  }

  componentWillReceiveProps(next_props) {
    if (this.props.continuous) {
      this.text = (next_props.source == null) ? "" : next_props.source;
      this.setState({
        text: this.text
      });
      this.target = next_props.target;
      this.startTransform();
    }
  }

  componentWillUnmount() {
    if (this.adjust_handler) {
      clearInterval(this.adjust_handler);
    }
    if (this.scramble_handler) {
      clearInterval(this.scramble_handler);
    }
  }

  adjustAcclerations() {
    this.adjust_acceleration = (Math.abs(this.target.length - this.text.length) > K.DIFF_TO_ADJUST_FAST) ? K.ACCELERATION : 1;
    this.unscramble_acceleration = (this.target.length > K.LEN_TO_UNSCRAMBLE_FAST) ? K.ACCELERATION : 1;
  }

  startTransform() {
    this.adjust_time = 0;
    this.scramble_wavelength = 0;

    if (this.adjust_handler) {
      clearInterval(this.adjust_handler);
    }
    if (this.scramble_handler) {
      clearInterval(this.scramble_handler);
    }

    this.adjustAcclerations();

    this.adjust_handler = setInterval(this.scrambleAndAdjustLength.bind(this), 1);
  }

  scrambleAndAdjustLength() {
    this.adjust_time += 0.001 * this.adjust_acceleration;
    this.scramble_wavelength += 0.001 * this.adjust_acceleration;

    if (this.adjust_time >= K.ADJUST_FREQ) {
      // if correct length, then begin unscrambling for real, else adjust next char
      if (this.text.length === this.target.length) {
        clearInterval(this.adjust_handler); 
        this.adjust_handler = null;
        return this.unscrambleText();
      } else if (this.text.length < this.target.length) {
        this.text += TextMaster.randomChar();
      } else {
        this.text = this.text.substring(0, this.text.length-1);
      }
      this.adjust_time = 0;
    }

    if (this.scramble_wavelength >= K.SCRAMBLE_FREQ) {
      this.text = TextMaster.scrambleRandomChar(this.text, this.target);
      this.scramble_wavelength = 0;
    }

    this.setState({
      text: this.text
    });
  }

  unscrambleText() {
    this.scramble_time = this.adjust_time; 
    this.scramble_wavelength = 0;
    this.unscramble_wavelength = 0;
    var order = Utilities.randomOrder(this.text.length);
    this.scramble_handler = setInterval(this.unscrambleChar.bind(this, order), 1); 
  }

  unscrambleChar(order) {
    this.scramble_wavelength += 0.001 * this.unscramble_acceleration;
    this.unscramble_wavelength += 0.001 * this.unscramble_acceleration;

    if (this.scramble_wavelength >= K.SCRAMBLE_FREQ) {
      this.text = TextMaster.scrambleRandomChar(this.text, this.target);
      this.scramble_wavelength = 0;
    }

    if (this.unscramble_wavelength >= K.UNSCRAMBLE_FREQ) {
      var index = order.pop();
      this.text = TextMaster.setCharAt(this.text, this.target, index);
      this.setState({
        text: this.text
      });
      this.unscramble_wavelength = 0;
    }

    this.setState({
      text: this.text
    });

    if (order.length === 0) {
      clearInterval(this.scramble_handler);
      this.scramble_handler = null;
    }

  }

  render() {
    var component = this.props.hyper ? <Hypertext text={this.state.text} /> : <span>{this.state.text}</span>;
    return (
      <span className="scrambletext">
        {component}
      </span>
    );
  }
}

module.exports = Scrambletext;