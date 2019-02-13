import React, { Component } from 'react';


const API = 'https://hn.algolia.com/api/v1/search?query=';
//const API = 'http://api.indeed.com/ads/apisearch?publisher=5730525017407848&l=vancover%2C+bc&sort=&format=json&radius=&st=&jt=&start=&limit=50&fromage=20&filter=0&latlong=1&co=ca&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2';
//const API = 'http://localhost:8080/jobs/skills/1';
const DEFAULT_QUERY = 'redux';
//const DEFAULT_QUERY = 'redux';

class App1 extends Component {

   constructor(props) {
      super(props);
  
      this.state = {
        hits: [],
        isLoading: false,
        error: null,
      };
   }

   componentDidMount() {
      this.setState({ isLoading: true });
  
      fetch(API + DEFAULT_QUERY)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ hits: data.hits, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

   render() {
      const { hits, isLoading, error } = this.state;

      if (error) {
         return <p>{error.message}</p>;
      }

      if (isLoading) {
         return <p>Loading ...</p>;
      }

      return (
         <ul>
           {hits.map(hit =>
             <li key={hit.objectID}>
               <a href={hit.url}>{hit.title}</a>
             </li>
           )}
         </ul>
       );
   }
 

}

export default App1;