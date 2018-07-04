import React, {Component} from 'react';
import axios from 'axios'
import ReactTable from 'react-table';
import _ from 'lodash';

export default class ContentJob extends React.Component {
   



    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
        };

     
       var self = this; 
     
      
    //    var zxc = [{"_id":"5b3c5783c208ee0f54382b2a","jobId":"J003","position":"Lead","skills":"Node/SCRUM","hiringManager":"Vetri","date":"11/4/18","schedule":"AM"}];
     //   self.setState({ tableData: zxc });
        axios.post('http://localhost:3001/graphql',{
            query: `
            query {
                getAppliedJobs{
                 userId
                jobId
                }
              }
              `
          })
          .then(function (response) {         

           
           console.log("{909777777777777777777777777777========"+response.data.data.getAppliedJobs);
        
            self.setData(response.data.data.getAppliedJobs);
           
          })
          .catch(function (error) {
            console.log("========error============"+JSON.stringify(error));
          });


         
     
    
    this.columns = [{
    Header: 'Job ID',
    accessor: 'jobId' 
    },{
    Header: 'User ID',
    accessor: 'userId' 
    }] 
    }
      
setData(str){

    console.log("===="+str);
    if (this.refs.myRef) {
    this.setState({
        tableData: str
      });
    }
}

    render(){
        
        return (
            <div className="content-wrapper">

      <ReactTable ref="myRef"
            data={this.state.tableData}
            columns={this.columns} />
                            
            </div>
        )


      
    }

}