import React from 'react';
import {Panel,ProgressBar} from 'react-bootstrap';

const now = 100;

export default class YorbitCurrentStatus extends React.Component{
    
      

  render() {    

    return (    
        
        <Panel header="Yorbit Current Status" bsStyle="info" style={{height: "400px"}}>
            <a>Yorbit 101 : </a>
            <p>Angular JS : Completed</p>
             <ProgressBar striped bsStyle="success" now={now} label={`${now}%`}/>
            
            <a>Yorbit 201 : </a>
            <p>Angular JS : Approved by CDM & waiting for C2 to process.</p>
        </Panel>
            
    );
  }
}