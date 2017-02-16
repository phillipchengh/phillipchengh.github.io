var React = require('react');
var Switchtext = require('../Switchtext');
var Switchwrap = require('../Switchwrap');
var Switchbullet = require('../Switchbullet');
var Switchlink = require('../Switchlink');

class AboutMe extends React.Component {
  render() {
    return (
      <span>
        <div className="subsection">
          <Switchwrap className="aboutme-headline" show={this.props.show} text="Hi, my name is Phillip Chen" />
        </div>
        <div className="subsection">
          <Switchwrap show={this.props.show} text="I'm a nerd... my favorite color is purple. UCLA '15" />
        </div>
        <div className="subsection">
          <Switchwrap show={this.props.show} text="Languages I speak: Java, JavaScript, PHP, Perl, HTML, CSS, English" />
        </div>
        <div className="subsection">
          <Switchwrap show={this.props.show} text="Technologies I've crashed: jQuery, AngularJS, ReactJS, NodeJS, GulpJS, Xano, WordPress, Spring, LESS, MySQL" />
        </div>
        <div className="subsection">
          <Switchwrap show={this.props.show} text="More buzzwords: git, github, VIM, sublime text, Eclipse, Linux, OSX, Sequel Pro, tmux" />
        </div>
      </span>
    );
  }
}

module.exports = AboutMe;