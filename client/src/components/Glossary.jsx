var React = require('react');
var List = require('./List');

var contents = [
  {id: 1, title: "Infinite Loop", class: "infiniteLoop"}, 
  {id: 2, title: "Parameter", class: "parameter"}, 
  {id: 3, title: "Anonymous Function", class: "anonymous"}
]

var Glossary = React.createClass({

  getInitialState: function() {
    return { contents: contents }
  },

  render: function(){
    return (
      <div>
        <h2>List</h2>
        <List contents={this.state.contents}/>
      </div>
    )
  }

});

module.exports = Glossary;