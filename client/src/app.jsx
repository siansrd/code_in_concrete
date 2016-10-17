var React = require('react');
var ReactDOM = require('react-dom');
var Term = require('./components/Term');
var List = require('./components/List');
var Glossary = require('./components/Glossary');

window.onload = function(){
  ReactDOM.render(<Glossary/>, document.getElementById('app'));
};