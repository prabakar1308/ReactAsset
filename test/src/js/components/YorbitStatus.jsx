import React from 'react';
import {Panel,Table} from 'react-bootstrap';

var text = "";

export default class YorbitStatus extends React.Component{
    
      

  render() {  
      
       var indents = [];
for (var i = 0; i < this.props.data.length; i++) {
    if(this.props.data[i].IsCompleted){
    indents.push( <tr>
        <td>{i+1}</td>
        <td>{this.props.data[i].Yorbit101}</td>
        <td>{this.props.data[i].Yorbit101_Date}</td>
        <td>{this.props.data[i].Yorbit201}</td>
            <td>{this.props.data[i].Yorbit201_Date}</td>
      </tr>);
    }
}

    return (    
        <div>
        <Panel collapsible defaultExpanded header="Yorbit Complete Status" bsStyle="primary">
           
      
        
        <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>#101 Course</th>
        <th>Completed Date</th>
          <th>#201 Course</th>
        <th>Completed Date</th>
      </tr>
    </thead>
    <tbody>
      {indents}
    </tbody>
  </Table>
              </Panel>
            </div>
            
    );
  }
}