
  import React, { Component } from 'react';
  import Login from './Login';
  import Logout from './Logout';
  import { connect } from 'react-redux';

  
  
  class Main extends Component {
    constructor(props){
      super(props);
    }
  
  
      render() {
          const Search = 1;
          const View = 2;
  
          
          if (Search == 1) {
            return <Login />;
          }
          else{
            if(View == 3 ){
              return <Logout />;
            }
          }
          return   <Logout />;
        }
  
  
  }
  
  function mapStateToProps(state){
    return {
      count: state.counterReducer,
    };
  }
  export default connect(mapStateToProps)(Main);