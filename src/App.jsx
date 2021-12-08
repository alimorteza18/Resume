import React, {Component} from 'react';

import Sectionone from './sections/Sectionone';
import Sectionthre from './sections/Sectionthre';
import Sectiontwo from './sections/Sectiontwo';


import './App.css';

class App extends Component {
  render() {
    return (
     
      <div className="App">
      
         <Sectionone/>  
         <Sectiontwo/>
         <Sectionthre/>
        
      </div>
    );
  }
}


export default App;