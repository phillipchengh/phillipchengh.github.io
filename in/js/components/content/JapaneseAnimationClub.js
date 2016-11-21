var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class JapaneseAnimationClub extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="project-concept" show={this.props.show} text="A club website for Anime nerds!" />
        </div>
        <div className="subsection">
          <Switchbullet show={this.props.show} text="Developed front end club website while learning AngularJS, Less, Gulp" />
          <Switchbullet show={this.props.show} text="Integrated with Google Picasa to lessen server load with images." />
          <Switchbullet show={this.props.show} text="Accomodated for SEO disabled JavaScript by using noscript." />
        </div>
        <div className="subsection">
          <Switchwrap className="technologies" show={this.props.show} text="Technologies used: AngularJS, LESS, Gulp, WordPress, PHP, MySQL" />
        </div>
        <div className="subsection">
          <Switchtext show={this.props.show} text="Check out the club website " />
          <Switchlink show={this.props.show} href="http://jacatucla.org" text="here" />
          <Switchtext show={this.props.show} text="!" /> 
        </div>
      </span>
    );
  }
}

module.exports = JapaneseAnimationClub;