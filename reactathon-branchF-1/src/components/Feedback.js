import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions';
import axios from 'axios'
import { bindActionCreators } from 'redux';
import * as actionType from '../actions/ActionType';


class Feedback extends Component {


    constructor(props) {
        super(props);
         }

   


    render(){
        return (         
           
            <div className="content-wrapper">
            <section className="content-header">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Dashboard</h3>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-8">
                                    <strong>Feedback</strong>
                                            Please enter your feedback for the overall interview process
                                            <input type="text"/>
                                            <button>Submit</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="row">
                                    <div className="col-sm-3 col-xs-6">
                                        <div className="description-block border-right">
                                          
                                          
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
                         
                      
        )
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(removeCounter, dispatch) }
  }

  
  export default connect( mapDispatchToProps)(Feedback);