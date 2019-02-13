import React, { Component } from 'react';
import Counter from './counter';
import SkillList from './SkillList';
import SkillSave from './SkillSave';

//<div>Props: { this.props.name } </div>/
			//<Counter name="Pls inform your name" />
//<SkillList/>

class App extends Component{
   render(){
      return(
		<div>
         <SkillSave/>
      </div>
      );
   }
   
}

export default App;