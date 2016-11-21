var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class hoonto extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="work-position" show={this.props.show} text="JavaScript Intern" />
          <Switchwrap className="work-location" show={this.props.show} text="Worked remotely" />
          <Switchwrap className="work-dates" show={this.props.show} text="June 2013 to July 2013" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Prototyped a web application that previewed NPM packages." />
          <Switchbullet show={this.props.show} text="Learned JavaScript and its many frameworks." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: JavaScript, NodeJS, AngularJS" />
        </div>
      </span>
    );
  }
}

module.exports = hoonto;