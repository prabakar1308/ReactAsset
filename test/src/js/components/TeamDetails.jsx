import React from 'react';
import Button from 'react-bootstrap';
import axios from 'axios';
import TeamDetailStore from '../stores/TeamDetailStore.jsx';
import * as TeamDetailAction from '../actions/TeamDetailAction.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



var selectRowProp = {
  mode: "radio", // or checkbox
  clickToSelect: true,
    bgColor: "rgb(135, 206, 250)",
  onSelect: onRowSelect
};

var tableOptions = {
    /*onAddRow : onInsertEmployee,
    onDeleteRow : onDeleteEmployee*/
    afterInsertRow: onInsertEmployee,
    afterDeleteRow: onDeleteEmployee
}

function onInsertEmployee(employee){
    TeamDetailAction.insertEmployee(employee);
}

function onDeleteEmployee(employee){
    console.log(employee);
    //var index = getIndex(employee[0]);
    TeamDetailAction.deleteEmployee(employee);
}

var cellEditProp = {
    mode:"dbclick",
    blurToSave:true,
  beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
  afterSaveCell: onAfterSaveCell  // a hook for after saving cell
}

function onBeforeSaveCell(row, cellName, cellValue) {
    console.log('Before');
    console.log(row);
    console.log(cellName);
    console.log(cellValue);
    if(cellValue.length > 0)
        return true;
    else
        return false;
}

function onAfterSaveCell(row, cellName, cellValue) {
    console.log('After');
    console.log(row);
    console.log(cellName);
    console.log(cellValue);
    TeamDetailAction.updateEmployee(row);
}

function onRowSelect(row, isSelected){
  //this.state.name1 = row.name;
}

var getIndex = function(value) {
    const employees = TeamDetailStore.getAllEmployees();
    for(var i = 0; i < employees.length; i++) {
        if(employees[i]["id"] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}



export default class TeamDetails extends React.Component {
    
    constructor(){
        super();
        
        this.state={
            employees : [],
            name1 : 'default',
            showModal: false,
        }; 
        
          TeamDetailStore.getAllEmployees().then(function (res) {
             this.setState({
               employees : res.data,
           });
  }.bind(this));
    
    }
    
   componentWillMount(){    
     
       TeamDetailStore.on('change',()=>{
          TeamDetailStore.getAllEmployees().then(function (res) {
             this.setState({
               employees : res.data,
           });
  }.bind(this));
       });
   
}
    
    
   
  render() {    
      
          
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
       
        <br/>
        <br/>
         
      <BootstrapTable data={ this.state.employees } insertRow={true} deleteRow={true} selectRow={selectRowProp} search={true}
        striped={true} hover={true}  height='120' width='150' cellEdit={cellEditProp} options={tableOptions} /*columnFilter={true}  pagination={true} */>
        <TableHeaderColumn width='140' dataField='id' isKey={ true }>Employee Id</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='name'  dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='track'>Track</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='level'>Competency</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='role'>Role</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='asset'>Asset</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='ip'>Static IP</TableHeaderColumn>
      </BootstrapTable>
        </div>
        <div className="col-sm-1">
        </div>        
        </div>
        </div>
    );
  }

}
