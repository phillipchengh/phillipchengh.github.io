var React = require('react');
var ReactDOM = require('react-dom');
var Hypertext = require('./components/Hypertext');
var $ = require('jquery');

module.exports = {
  
  renderTextNodes: function() {
    var nonWhitespaceMatcher = /\S/;

    // http://stackoverflow.com/questions/298750/how-do-i-select-text-nodes-with-jquery
    function renderTextNodesInNode(node) {
      if (node.nodeType == 3) {
        if (nonWhitespaceMatcher.test(node.nodeValue)) {
          ReactDOM.render(<Hypertext text={node.textContent}></Hypertext>, node.parentElement);
        }
      } else {
        for (var i = 0, len = node.childNodes.length; i < len; ++i) {
          renderTextNodesInNode(node.childNodes[i]);
        }
      }
    }

    $('a').each(function() {
      renderTextNodesInNode(this);
    });
  }

};
