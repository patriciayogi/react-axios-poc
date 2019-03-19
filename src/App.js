import React, { Component } from 'react';
import Counter from './skills/counter';
import SkillList from './skills/SkillList';
import SkillSave from './skills/SkillSave';

//<div>Props: { this.props.name } </div>/
			//<Counter name="Pls inform your name" />
//<SkillList/>
//<SkillSave/>

class App extends Component{
   render(){
      return(
		<div>
         <SkillSave/>
         <SkillList/>
      </div>
      );
   }
   
}

export default App;