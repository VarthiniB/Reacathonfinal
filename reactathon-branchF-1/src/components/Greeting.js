


  import React, { Component } from 'react';
import Content from './Content';
import ContentJob from './ContentJob';
import { connect } from 'react-redux';
import Counter from './Counter';
import Feedback from './Feedback';


class Greeting extends Component {
  constructor(props){
    super(props);
  }


    render() {
        const Search = 1;
        const View = 2;
        const View1 = 3;

        
        if (Search == this.props.count) {
          return <ContentJob />;
        }
        else{
          if(View ==this.props.count ){
            return <Content />;
          }
          else{
            if(View1 == this.props.count){
              return <Feedback />
            }
          }
        }
        return   <Counter />;
      }


}

function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Greeting);
