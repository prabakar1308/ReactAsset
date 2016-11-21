import React from 'react';
import {Panel} from 'react-bootstrap';

var text = "";

export default class YorbitStatus extends React.Component{
    
      componentWillMount(){ 
       
console.log('text');
        
        var i;
        for (i = 0; i < this.props.data.length; i++) {
            console.log(this.props.data.length);
            console.log(this.props.data[i].Yorbit101);
            text += "<a>" + this.props.data[i].Yorbit101 + "</a> : <b>"+this.props.data[i].Yorbit101_Status +" </b><br>";
        }
          console.log(text);
       }

  render() {  
      
       

    return (    
        
        <Panel collapsible defaultExpanded header="Yorbit Complete Status" bsStyle="primary" style={{height: "400px"}}>
            <h3>Yorbit Complete Status</h3>
            <a>Yorbit 101 : Completed</a>
            <p>Angular JS</p>
            <a>Yorbit 101 : In Progress</a>
            <p>React JS, C# Basics & MVC</p>
            
            <div dangerouslySetInnerHTML={{__html: text}} />
        </Panel>
            
    );
  }
}