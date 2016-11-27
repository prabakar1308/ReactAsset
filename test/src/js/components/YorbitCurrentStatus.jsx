import React from 'react';
import {Panel,ProgressBar} from 'react-bootstrap';

const now = 100;

export default class YorbitCurrentStatus extends React.Component{
    


  render() {    
      
      var indents = [];
for (var i = 0; i < this.props.data.length; i++) {
    if(!this.props.data[i].IsCompleted){
    indents.push( <span className='indent' key={i}>
            <a><b>Yorbit 101 : </b></a><br></br>
            <a>{this.props.data[i].Yorbit101} : </a><br></br><br></br>
             <ProgressBar striped bsStyle="success" now={this.props.data[i].Yorbit101_Status} label={`${this.props.data[i].Yorbit101_Status}%`}/>
            <br></br>
            <a><b>Yorbit 201 : </b></a>
            <p><a>{this.props.data[i].Yorbit201}</a> : <b>{this.props.data[i].Yorbit201_Status}</b></p>
            <br></br></span>);
    }
}

    return (    
        
        <Panel header="Yorbit Current Status" bsStyle="info" style={{height: "400px"}}>
            {indents}
        </Panel>
            
    );
  }
}