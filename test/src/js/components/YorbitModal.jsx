import React from 'react';
import {DropdownButton,MenuItem,Button} from 'react-bootstrap';
import YorbitPerson from './YorbitPerson.jsx';

export default class YorbitModal extends React.Component{
    
      constructor(){
        super();
        this.state={
            showDetail: false,
        }; 
          
          this.clear = this.clear.bind(this);
           this.handleSelect = this.handleSelect.bind(this);
    }

  handleSelect(evt) {
     console.log(evt);
    this.setState({showDetail:true});
  }
    
    clear(){
      this.setState({showDetail:false});  
    }

  render() {    

    return (
    <div>
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <DropdownButton bsStyle="primary" bsSize="large" title="List of Team Members" onSelect={this.handleSelect}>
                <MenuItem eventKey='1022169'>Praba</MenuItem>
            </DropdownButton>&nbsp;
                <Button bsStyle="default" onClick={this.clear}>Clear</Button>
            </div>
             
            <div className="col-sm-4"></div>
        </div>
            
        <br/><br/>
            
        
                { this.state.showDetail ? <YorbitPerson /> : null }
            
            
    </div>
    );
  }
}