var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class Zabinet extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="work-position" show={this.props.show} text="Back End Developer" />
          <Switchwrap className="work-location" show={this.props.show} text="Culver City, CA" />
          <Switchwrap className="work-dates" show={this.props.show} text="May 2015 to August 2016" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Developed RESTFul API calls using the company's internal web framework." />
          <Switchbullet show={this.props.show} text="Integrated daily syncs with APIs from Etsy, BigCommerce, MindBody, Factual, and others." />
          <Switchbullet show={this.props.show} text="Took the initiative in creating integration tests." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: PHP, MySQL, JavaScript, MochaJS, Xano" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check out the company's website " />
          <Switchlink show={this.props.show} href="https://zabinet.com" text="here" />
        </div>
      </span>
    );
  }
}

module.exports = Zabinet;