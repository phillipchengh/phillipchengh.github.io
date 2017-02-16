var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class Ziprecruiter extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="work-position" show={this.props.show} text="Software Engineer" />
          <Switchwrap className="work-location" show={this.props.show} text="Santa Monica, CA" />
          <Switchwrap className="work-dates" show={this.props.show} text="Present" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Working hard." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: JavaScript, ES6, Webpack, jQuery, Perl" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check us out " />
          <Switchlink show={this.props.show} href="https://ziprecruiter.com" text="here" />
        </div>
      </span>
    );
  }
}

module.exports = Ziprecruiter;