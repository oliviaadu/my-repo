var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
	getInitialState: function() {
		return {
			myStudents: []
		} //return
	}, //getInitialState

	componentDidMount: function(){
		this.serverRequest =  $.get('./js/data.json', function(result){
			var tempData = result;
			this.setState({
				myStudents: tempData
			});
		}.bind(this));
	},

	componentWillUnmount: function(){
		this.serverRequest.abort();
	},

	render: function() {
    var filteredApts = this.state.myStudents;
    filteredApts = filteredApts.map(function(item, index){
      return(
			 <li className="pet-item media" key={index}>
				 <div className="pet-info media-body">
					 <div className="pet-head">
						 <span className="pet-name"> {this.state.myStudents[index].petName} </span>
						 <span className="apt-date pull-right"> {this.state.myStudents[index].aptDate} </span>
					 </div>
					 <div className="owner-name">
						 <span className="label-item"> Owner: </span>
						 {this.state.myStudents[index].ownerName}
					 </div>
					 <div className="apt-notes"> {this.state.myStudents[index].aptNotes} </div>
				 </div>
			 </li>
      ) //return
    }.bind(this)); //filteredApts.map
		return(
			<div className="interface">
				 <ul className ="item-list media-list">{filteredApts}</ul>
			</div> //interface
		)//finish return
	} //render
}); //MainInterface

ReactDOM.render(
	<MainInterface />,
	document.getElementById('petAppointments')
); //render
