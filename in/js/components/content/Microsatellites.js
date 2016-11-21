var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class Microsatellites extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="project-concept" show={this.props.show} text="Map short tandem repeats of a genome!" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Simulated a genome reader and mapped areas with many repeated letters." />
          <Switchbullet show={this.props.show} text="Sped up the program with multithreading." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: Just Java" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check out the code " />
          <Switchlink show={this.props.show} href="https://github.com/phillipchengh/Microsatellites" text="here" />
          <Switchtext show={this.props.show} text="!" /> 
        </div>
      </span>
    );
  }
}

module.exports = Microsatellites;