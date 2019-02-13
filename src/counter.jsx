import React, { Component } from 'react'; 

export default class Counter extends Component { 
   
  constructor(props) {
    super(props);
    this.state = {
		newName: "",
		tempName: "",
		oldName: "",
		value: 1
	};
	this.stateHandleChange = this.handleChange1.bind(this);
  }
  
   handleChange1(event) {
	   
    this.setState({ tempName: event.target.value });
  }
   
   
   render() {
	   // <!-- value={this.props.name} -->
    return (
        <div>
          <div>Id: { this.state.value }    Name: {this.state.newName}</div>
					<div>Previous Name: {this.state.oldName}</div>
					<p></p>
					<label>
						Name:
						<input type="text"  onChange={this.stateHandleChange} /> 
					</label>
					<p></p>
					<button onClick={(props) => { this.setState({ oldName: this.state.newName, value: this.state.value + 1, newName: this.state.tempName }); }}>Increment</button>
					<button onClick={(props) => { this.setState({ value: 0, newName: "", oldName:"", tempName:"" }); }}>Reset</button>
        </div>
    )
	}
	
}