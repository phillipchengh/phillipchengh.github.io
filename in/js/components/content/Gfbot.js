var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class Gfbot extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="project-concept" show={this.props.show} text="Guild Discord bot" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Sends stickers on command." />
          <Switchbullet show={this.props.show} text="Simulates a gashapon from Granblue Fantasy." />
          <Switchbullet show={this.props.show} text="Sends nice memes." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: ES6, redis" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="I am maintaining this project " />
          <Switchlink show={this.props.show} href="https://github.com/phillipchengh/gfbot" text="here" />
        </div>
      </span>
    );
  }
}

module.exports = Gfbot;