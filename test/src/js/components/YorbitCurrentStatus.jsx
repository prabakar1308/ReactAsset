import React from 'react';
import {Panel,ProgressBar} from 'react-bootstrap';

const now = 100;

export default class YorbitCurrentStatus extends React.Component{
    


  render() {    

    return (    
        
        <Panel header="Yorbit Current Status" bsStyle="info" style={{height: "400px"}}>
            <a><b>Yorbit 101 : </b></a><br></br>
            <a>{this.props.data[0].Yorbit101} : </a><br></br><br></br>
             <ProgressBar striped bsStyle="success" now={this.props.data[0].Yorbit101_Status} label={`${this.props.data[0].Yorbit101_Status}%`}/>
            <br></br>
            <a><b>Yorbit 201 : </b></a>
            <p><a>{this.props.data[0].Yorbit201}</a> : <b>{this.props.data[0].Yorbit201_Status}</b></p>
        </Panel>
            
    );
  }
}