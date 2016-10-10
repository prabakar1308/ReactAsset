import React from 'react';
import {Panel} from 'react-bootstrap';

export default class YorbitStatus extends React.Component{
    
      

  render() {    

    return (    
        
        <Panel collapsible defaultExpanded header="Yorbit Complete Status" bsStyle="primary" style={{height: "400px"}}>
            <h3>Yorbit Complete Status</h3>
            <a>Yorbit 101 : Completed</a>
            <p>Angular JS</p>
            <a>Yorbit 101 : In Progress</a>
            <p>React JS, C# Basics & MVC</p>
            
            <a>Yorbit 201 : Completed</a>
            <p>NA</p>
            <a>Yorbit 201 : In Progress</a>
            <p>Angular JS</p>
        </Panel>
            
    );
  }
}