var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class NFLExam extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="project-concept" show={this.props.show} text="Analyzed NFL stats to determine the best NFL team. (Not the Chargers)" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Analyzed NFL stats with Python Numpy using Principal Components." />
          <Switchbullet show={this.props.show} text="Visualized the data using D3.js graphs." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: Python, Numpy, NodeJS, ExpressJS, AngularJS, D3JS, Postgres" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check out the code " />
          <Switchlink show={this.props.show} href="https://github.com/phillipchengh/nflexam" text="here" />
        </div>
      </span>
    );
  }
}

module.exports = NFLExam;