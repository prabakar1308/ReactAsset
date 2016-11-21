import React from 'react';
import {Thumbnail,Button} from 'react-bootstrap';
import YorbitStatus from './YorbitStatus.jsx';
import YorbitCurrentStatus from './YorbitCurrentStatus.jsx';

export default class YorbitPerson extends React.Component{
    
      constructor(){
        super();
        this.state={
            showStatus: false,
            showCurrentStatus: false,
            yorbitDetails: [],
        }; 
          
          this.clear = this.clear.bind(this);
          this.getStatus = this.getStatus.bind(this);
          this.getCurrentStatus = this.getCurrentStatus.bind(this);
    }
    
    clear(){
      this.setState({showStatus:false,
                    showCurrentStatus:false});  
    }
    
    getStatus(){
      this.setState({showStatus:true,
                    showCurrentStatus:false}); 
    }
    
    getCurrentStatus(){
        console.log(this.props.data.yorbit_details);
      this.setState({showStatus:false,
                    showCurrentStatus:true,
                    yorbitDetails:this.props.data.yorbit_details});
    }

  render() {    
      
      

    return (    
        
        <div className="row">
            <div className="col-sm-2"></div>
             <div className="col-sm-4">
                
        <Thumbnail src={this.props.data.ImageUrl} alt="10x10" >
            <h3>{this.props.data.name}</h3>
            <p>{this.props.data.Designation}</p>
            <p>{this.props.data.DOJ}</p>
            <p>
                <Button bsStyle="primary" onClick={this.getStatus}>Complete Status</Button>&nbsp;&nbsp;
                <Button bsStyle="info" onClick={this.getCurrentStatus}>Current Status</Button>&nbsp;&nbsp;
                <Button bsStyle="danger" onClick={this.clear}>Clear</Button>
            </p>
        </Thumbnail>
                
                </div>
            <div className="col-sm-4">
                { this.state.showCurrentStatus ? <YorbitCurrentStatus data={this.state.yorbitDetails}/> : null }
                 { this.state.showStatus ? <YorbitStatus data={this.state.yorbitDetails}/> : null }
            
            </div>
            <div className="col-sm-2"></div>
        </div>
            
    );
  }
}