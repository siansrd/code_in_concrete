var React = require('react');
var List = require('./List');
var Definition = require('./Definition');


var Glossary = React.createClass({

  getInitialState: function() {
    return { contents: [], focusTerm: null }
  }, 

  componentDidMount: function() {
    var url = "api/contents";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({ contents: data })
    }.bind(this);
    request.send();
  }, 

  termClicked: function(termId){
    this.setState({focusTerm: termId})
  },

  render: function(){

    return (
      <div id="wrapper">
        <div id="list">
          <h2>Terms</h2>
          <List contents={this.state.contents} termClicked={this.termClicked}/>
        </div>
        <div id="definition">
          <h2>Definition</h2>
          <Definition contents="Hi"/> 
        </div>
      </div>
    )
  }

});

module.exports = Glossary;