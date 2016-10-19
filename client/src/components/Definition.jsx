var React = require('react');

var Definition = React.createClass({

  render: function(){

    return (
        <p>{this.props.contents}</p>
    )
  }

})

module.exports = Definition;