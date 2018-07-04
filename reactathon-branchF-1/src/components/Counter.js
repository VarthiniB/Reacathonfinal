import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props){
    super(props);

    this.date = '10/7/18';
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
                              <strong>Welcome</strong>
                                  
                                      <div>
                                      <img src="public/img/vzDash.jpg"  alt=" Image" height="200" width="1200" />
                                      </div>
                                  
                              </div>
                          </div>
                      </div>
                      <div className="box-footer">
                          <div className="row">
                              <div className="col-sm-3 col-xs-6">
                                  <div className="description-block border-right">
                                    
                                      <h5 className="description-header">You have Job Interview Scheduled on</h5>
                                      <span className="description-text">{this.date}</span>
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
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Counter);