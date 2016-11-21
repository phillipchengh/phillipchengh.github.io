var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class DailyBruin extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="work-position" show={this.props.show} text="Web Intern" />
          <Switchwrap className="work-location" show={this.props.show} text="Westwood, CA" />
          <Switchwrap className="work-dates" show={this.props.show} text="January 2014 to June 2015" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Produced featured pages and website templates with Wordpress." />
          <Switchbullet show={this.props.show} text="Managed and uploaded weekly news articles and social media." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: PHP, JavaScript, WordPress, jQuery, Bootstrap" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check out the Daily Bruin " />
          <Switchlink show={this.props.show} href="http://dailybruin.com" text="here" />
          <Switchtext show={this.props.show} text="!" /> 
        </div>
      </span>
    );
  }
}

module.exports = DailyBruin;