import React, { Component } from 'react';
import Counter from './counter';
import App1 from './App1';

class App extends Component{
   render(){
      return(
		<div>
			<div>Props: { this.props.name } </div>
			<Counter name="Pls inform your name" />
         <App1/>
		</div>
      );
   }
   
}

export default App;