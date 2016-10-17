var React = require('react');

var Term = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }

});

module.exports = Term;