{/*import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';

import Greeting from './components/Greeting';


class App extends Component {



  constructor(props){

    super(props);
    this.contentValue = '0'; 
    console.log("=======constructor======"+this.contentValue);
   
  }
  
  
  handleLanguage  (langValue)  {

    console.log("======appjs===handle lang"+langValue);

    this.setState( { contentValue : langValue });
   
  }  


  render() {
    return (
      <div>
        <Header name="Raji"/>
        <SideBar name="Raji" onSelectLanguage={this.handleLanguage}/>


        <h1>{this.contentValue }</h1>
        <Greeting isLoggedIn={this.contentValue} />

      </div>
    );
  }
}

export default App; */}



import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';

import Greeting from './components/Greeting';
import Main from './components/Main';

const App = () => {
  return (
   
    
     <div>
    <Header />
      <SideBar name="Raji"/>
    
      <Greeting  />
     
    </div> 


    /*  <Main /> */

     
  )
}
export default App;