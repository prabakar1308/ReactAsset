import React from 'react';
import Button from 'react-bootstrap';
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
    console.log(employee[0]);
    var index = getIndex(employee[0]);
    console.log(index);
    TeamDetailAction.deleteEmployee(index);
}

var cellEditProp = {
    mode:"dbclick",
    blurToSave:true
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
            employees : TeamDetailStore.getAllEmployees(),
            name1 : 'default',
            showModal: false,
        }; 
       // this.handleClick = this.handleClick.bind(this);
    }
    
   componentWillMount(){
       TeamDetailStore.on('change',()=>{
           this.setState({
               employees : TeamDetailStore.getAllEmployees(),
           });
           console.log(this.state.employees);
       });
   }
    
//    handleClick() {
//    console.log(this.state.showModal);
//           this.setState({ showModal: true });
//        console.log(this.state.showModal);
//  }
    
   
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
