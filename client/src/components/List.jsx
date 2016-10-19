var React = require('react');
var Term = require('./Term');

var List = React.createClass({

  render: function(){

    var listItems = this.props.contents.map(function(term){
        return (
          <Term 
          termClicked={this.props.termClicked}
          title={term.title} 
          key={term.id} 
          id={term.id} />
        )
      }.bind(this)
    );

    return (
      <div>{listItems}</div>
    )

  }

});

module.exports = List;