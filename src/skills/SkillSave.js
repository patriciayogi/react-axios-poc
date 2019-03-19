import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/api/v1/skills';

class SkillSave extends Component {

   constructor(props) {
      super(props);
  
      this.state = {
        skill:"",   
        description:"",     
        error: null,
      };      
      
   }

   handleOnChange = (e) => {   
      this.setState({skill: e.target.value});
   }

   handleDescription = event => {
      this.setState({ description: event.target.value });
    }
  


   handleClick = () => {

      const skill = {
         id: this.state.skill,
         description: this.state.description,
       };

      axios.post(API, skill)
        .then(result => this.setState({
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
   }

   render() {
      
      return (
         <div>
            <p></p>
            <table>
               <tr><td><label>Skill:</label></td>
                  <td><input type="text" onChange={this.handleOnChange}/></td>
               </tr>
               <tr><td><label>Description:</label></td>
                  <td><input type="text" onChange={this.handleDescription}/></td>
               </tr>
               <tr><td colSpan="2"></td></tr>
               <tr><td colSpan="2" align="center"><button onClick={this.handleClick}>Save</button></td></tr>
            </table>      
            <p></p>
         </div>
       );
   }
 

}

export default SkillSave;