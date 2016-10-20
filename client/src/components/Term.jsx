var React = require('react');

var Term = React.createClass({

  propType: {
    title: React.PropTypes.string.isRequired,
    key: React.PropTypes.number.isRequired
  },

  handleClick: function(){
    var selectedId = this.props.id
    this.props.termClicked(selectedId)
  },

  render: function() {
    return (
      <p className="listItem" onClick={this.handleClick}>{this.props.title}</p>
    )
  }

});

module.exports = Term;