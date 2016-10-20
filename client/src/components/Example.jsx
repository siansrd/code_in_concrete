var React = require('react');

var Definition = React.createClass({

  render: function(){
    if(!this.props.selectedTerm){
    return <p>Hi</p>
    }
    
    return (
        <div>
          <p>{this.props.selectedTerm.title}</p>
          <img src={this.props.selectedTerm.img} width="480"/>
          <iframe src={this.props.selectedTerm.gif} width="480" height="269"></iframe>

        </div>
    )
    
  }

})

module.exports = Definition;