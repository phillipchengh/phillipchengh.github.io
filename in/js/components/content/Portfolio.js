var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class Portfolio extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="project-concept" show={this.props.show} text="Portfolio of a certain Phillip Chen" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Wrote React components to simulate scrambling and rainbow text." />
          <Switchbullet show={this.props.show} text="Developed components to function like directories." />
          <Switchbullet show={this.props.show} text="Inspired by synaesthesia and the Matrix." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: ReactJS, JavaScript, Jekyll, Gulp" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="You're looking at it." />
        </div>
      </span>
    );
  }
}

module.exports = Portfolio;