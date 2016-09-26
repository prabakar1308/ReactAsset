import React from 'react';
import {DropdownButton,MenuItem,Button} from 'react-bootstrap';
import YorbitPerson from './YorbitPerson.jsx';
import TeamDetailStore from '../stores/TeamDetailStore.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


var selectRowProp = {
  mode: "radio", // or checkbox
  clickToSelect: true,
    bgColor: "rgb(135, 206, 250)",
  onSelect: onRowSelect
};

var show = false;
var selectedData = {};
     
 function onRowSelect(row, isSelected){
     
  //this.state.name1 = row.name;
    selectedData.name = row.name;
    selectedData.DOJ = row.DOJ;
    selectedData.Designation = row.Designation;
     show = true;
    console.log('first : ' + show);
    console.log('first : ' + selectedData.name);
}


export default class YorbitModal extends React.Component{
    
      constructor(){
        super();
        this.state={
            showDetail: false,
            employees : TeamDetailStore.getAllEmployees(),
            selectedData : {},
        }; 
          
          this.clear = this.clear.bind(this);
           this.handleSelect = this.handleSelect.bind(this);
    }
       
    
  

    
     componentWillMount(){
       TeamDetailStore.on('change',()=>{
           this.setState({
               employees : TeamDetailStore.getAllEmployees(),
           });
           console.log(this.state.employees);
       });         
      
   }    
    

  handleSelect(evt) {
     console.log(evt);
      var key = this.refs.table.state.selectedRowKeys[0];
      var data = this.refs.table.state.data;
      var selected = data.filter(function ( obj ) {
    return obj.id === key;
})[0];
      console.log(selected);
    this.setState({showDetail:true});
      this.setState({selectedData:selected});
  }
    
    clear(){
      this.setState({showDetail:false});  
    }

  render() {       
 

    return (
    <div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
            
                <BootstrapTable ref='table' data={ this.state.employees } selectRow={selectRowProp} search={true}
        striped={true} hover={true}  height='120' width='150'>
        <TableHeaderColumn width='140' dataField='id' isKey={ true }>Employee Id</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='name'  dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='track'>Track</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='level'>Competency</TableHeaderColumn>
      </BootstrapTable>
                
            </div>
             
            <div className="col-sm-2">
                <div className="row"><br/><br/></div>
                <div className="row">
                    <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleSelect}>Get Details</button>
                </div>
                <div className="col-sm-1"></div>
                </div>
                <div className="row"></div>
            
               
            </div>
        </div>
            
        <br/><br/>
            
        
                { this.state.showDetail ? <YorbitPerson data={this.state.selectedData} show={false}/> : null }
            
            
    </div>
    );
  }
}