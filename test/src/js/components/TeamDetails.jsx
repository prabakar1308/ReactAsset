import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const employees = [];

function addProducts(quantity) {
  const startId = employees.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    employees.push({
      id: id,
      name: 'Name ' + id,
      track: 'MS Track',
      level: 'C1',
      role: 'Developer',
      asset: 'Yes',
      ip: '10.174.128.9',
    });
  }
}

var addEmployee = function(){
    employees.push({
      id: 100,
      name: 'Praba',
      track: 'MS Track',
      level: 'C1',
      role: 'Developer',
      asset: 'Yes',
      ip: '10.174.128.9',
    });
}

addProducts(3);
var selectRowProp = {
  mode: "radio", // or checkbox
  clickToSelect: true,
    bgColor: "rgb(135, 206, 250)",
  onSelect: onRowSelect
};

function onRowSelect(row, isSelected){
  console.log(row);
  console.log("selected: " + isSelected)
}

/*var tableOptions = {
    afterInsertRow: this.onAfterInsertRow.bind(this),
    afterDeleteRow: this.onAfterDeleteRow.bind(this)
}*/


export default class TeamDetails extends React.Component {

  render() {
    return (
        <div>
        <p></p>
      <BootstrapTable data={ employees } insertRow={addEmployee} deleteRow={true} selectRow={selectRowProp} search={true}
        striped={true} hover={true}  height='120' width='150' /*columnFilter={true}  pagination={true} */>
          <TableHeaderColumn width='140' dataField='id' isKey={ true }>Employee Id</TableHeaderColumn>
          <TableHeaderColumn width='140' dataField='name'  dataSort={true}>Name</TableHeaderColumn>
          <TableHeaderColumn width='140' dataField='track'>Track</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='level'>Competency</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='role'>Role</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='asset'>Asset</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='ip'>Static IP</TableHeaderColumn>
      </BootstrapTable>
        </div>
    );
  }

}
