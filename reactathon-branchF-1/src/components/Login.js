import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions';
import axios from 'axios'
import { bindActionCreators } from 'redux';
import * as actionType from '../actions/ActionType';


class Login extends Component {


    constructor(props) {
        super(props);
        this.value='';
        this.value1 ='';
       
        this.state = {
            tableData: [],
        };

        

            
        var self =  this;
        axios.post('http://localhost:3001/graphql',{
            query: `
            query {
                users{
                 userId
                 password
                  name
                }
              }
              `
          })
          .then(function (response) {         

           
           console.log("{909777777777777777777777777777========"+response.data.data.users);
        
            self.setData(response.data.data.users);
           
          })
          .catch(function (error) {
            console.log("========error============"+JSON.stringify(error));
          });

   }

   setData(str){
    console.log("==atr=="+str);
    if (this.refs.myRef) {
    this.setState({
        tableData: str
      });
    }
    this.arr = str;
    console.log("==this.arr=="+this.arr);
   }

  check(){
    
    console.log("===")
  }



    render(){
        return (         
          
            <div >
                <section >
                    <div className="box"  ref="myRef">
                            <h3 className="box-title">Enter Username</h3>
                                 <input type="text"  value={this.value}  ></input>  <h3 className="box-title">Enter Password</h3>
                                 <input type="text"  value={this.value1}  ></input>
      
                                <div><a href="http://localhost:3000/"   ><button> Login </button></a></div>
                               
                        

                            </div>
                            </section>
                            </div>
                         
                      
        )
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(removeCounter, dispatch) }
  }

  
  export default connect( mapDispatchToProps)(Login);
