import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://localhost:8080/skills';

class SkillList extends Component {

   constructor(props) {
      super(props);
  
      this.state = {
        skills: [],
        isLoading: false,
        count: 0,
        error: null,
      };
   }

   componentDidMount() {
      this.setState({ isLoading: true });
  
      axios.get(API)
        .then(result => this.setState({
          skills: result.data.skills,
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
            <p>{count}</p>
            <ul>
            { skills.map(hit =>
               <li key={hit.id}>
                  <a href={hit.id}>{hit.id}-{hit.description}</a>
               </li>
            )}
            </ul>
         </div>
       );
   }
 

}

export default SkillList;