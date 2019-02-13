import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/skills/spring';

class SkillSave extends Component {

   constructor(props) {
      super(props);
  
      this.state = {
        skills: [],
        skill:"",
        isLoading: false,
        count: 0,
        error: null,
      };
      this.stateHandleChange = this.handleChange1.bind(this);
   }

   
   handleChange1(event) {
	   
    //this.setState({ skill: event.target.value });
  }
   

    addSkills() {
      const itemToAdd = this.state.skill;
      axios.put(API)
        .then(result => this.setState({
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }

   render() {
      const { count, skills, isLoading, error } = this.state;

      if (error) {
         return <p>{error.message}</p>;
      }

      if (isLoading) {
         return <p>Loading ...</p>;
      }

      return (
         <div>
            <p></p>
					<label>
						Skills:
						<input type="text" onChange={this.stateHandleChange} /> 
					</label>
               <button onClick={this.addSkills()}>Save</button>
         </div>
       );
   }
 

}

export default SkillSave;