var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class PokerBot extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="project-concept" show={this.props.show} text="An automated poker script for Granblue Fantasy!" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Manipulate XHR requests to automate playing poker, winning $$$ with no effort." />
          <Switchbullet show={this.props.show} text="Email me if you are interested in the details..." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: Just JavaScript" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check out the script " />
          <Switchlink show={this.props.show} href="https://gist.github.com/phillipchengh/5e648a57a06cfd95ddb86aa9a403e0f6" text="here" />
          <Switchtext show={this.props.show} text="!" /> 
        </div>
      </span>
    );
  }
}

module.exports = PokerBot;