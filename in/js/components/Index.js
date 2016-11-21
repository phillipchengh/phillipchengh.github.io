var React = require('react');
var ReactDOM = require('react-dom');
var {Link} = require('react-router');
var Hypertext = require('./Hypertext');
var Fancytext = require('./Fancytext');
var Switchtext = require('./Switchtext');
var Switchlink = require('./Switchlink');
var Directory = require('./Directory');
var Hyperlink = require('./Hyperlink');
var JapaneseAnimationClub = require('./content/JapaneseAnimationClub');
var Zabinet = require('./content/Zabinet');
var Sony = require('./content/Sony');
var DailyBruin = require('./content/DailyBruin');
var PokerBot = require('./content/PokerBot');
var Portfolio = require('./content/Portfolio');
var NFLExam = require('./content/NFLExam');
var Microsatellites = require('./content/Microsatellites');
var Hoonto = require('./content/Hoonto');
var AboutMe = require('./content/AboutMe');

class Index extends React.Component {

  render() {
    return (
      <div className="nav">
        <div className="section phillip">
          <Fancytext />
        </div>
        <div className="section">
          <Directory show name="experience">
            <Directory name="zabinet">
              <Zabinet />
            </Directory>
            <Directory name="sony">
              <Sony />
            </Directory>
            <Directory name="daily bruin">
              <DailyBruin />
            </Directory>
            <Directory name="hoonto">
              <Hoonto />
            </Directory>
          </Directory>
        </div>
        <div className="section">
          <Directory show name="projects">
            <Directory name="japanese animation club">
              <JapaneseAnimationClub />
            </Directory>
            <Directory name="portfolio">
              <Portfolio />
            </Directory>
            <Directory name="nflexam">
              <NFLExam />
            </Directory>
            <Directory name="poker bot">
              <PokerBot />
            </Directory>
            <Directory name="microsatellites">
              <Microsatellites />
            </Directory>
          </Directory>
        </div>
        <div className="section">
          <Directory show name="about me">
            <AboutMe />
          </Directory>
        </div>
        <div className="section directory">
          <Switchlink show href="https://github.com/phillipchengh" text="github" />
        </div>
        <div className="section directory">
          <Switchlink show href="https://www.linkedin.com/in/pchenp" text="linkedin" />
        </div>
        <div className="section directory">
          <Switchlink show href="mailto:phillip.chen@hotmail.com" text="email" />
        </div>
      </div>
    );
  }

}

module.exports = Index;