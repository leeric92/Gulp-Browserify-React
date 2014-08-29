/**
 * @jsx React.DOM
 */

var React = require('react');
var Testing = require('./apple');

var Hello = React.createClass({

  render: function() { 
    return (
		<div>
			<h1>Hello {this.props.name} </h1>
			<Testing />
		</div>
  	);
  }
});

React.renderComponent(<Hello name="World" />, document.body);