var React = require('react');
var Term = require('./Term');

var List = React.createClass({

  render: function(){

    var listItems = this.props.contents.map(
      function(term){
        return (
          <Term title={term.title} key={term.id}>{term.title}</Term>
        )
      }
    );

    return (
      <div>{listItems}</div>
    )

  }

});

module.exports = List;