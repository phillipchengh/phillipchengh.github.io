var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class Sony extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="work-position" show={this.props.show} text="Software Engineer Intern" />
          <Switchwrap className="work-location" show={this.props.show} text="Culver City, CA" />
          <Switchwrap className="work-dates" show={this.props.show} text="June 2014 to December 2014" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Developed front end features for a localization application." />
          <Switchbullet show={this.props.show} text="Gained experience in agile development." />
          <Switchbullet show={this.props.show} text="Optimized Maven build systems to build magnitudes faster." />
          <Switchbullet show={this.props.show} text="Engineered an intern portal at a company Hackathon." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: Java, JavaScript, Spring MVC, Backbone, Maven, jQuery, NodeJS" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check out the company's website " />
          <Switchlink show={this.props.show} href="http://sony.com" text="here" />
        </div>
      </span>
    );
  }
}

module.exports = Sony;