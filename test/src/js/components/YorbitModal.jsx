import React from 'react';
import {DropdownButton,MenuItem,Button} from 'react-bootstrap';
import YorbitPerson from './YorbitPerson.jsx';
import TeamDetailStore from '../stores/TeamDetailStore.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';





export default class YorbitModal extends React.Component{
    
      constructor(){
        super();
        this.state={
            showDetail: false,
            employees : TeamDetailStore.getAllEmployees(),
        }; 
          
          this.clear = this.clear.bind(this);
           this.handleSelect = this.handleSelect.bind(this);
    }
    
    var selectRowProp = {
  mode: "radio", // or checkbox
  clickToSelect: true,
    bgColor: "rgb(135, 206, 250)",
  onSelect: onRowSelect
};
    
    
function onRowSelect(row, isSelected){
     
  //this.state.name1 = row.name;
    selectedData.name = row.name;
    selectedData.DOJ = row.DOJ;
    selectedData.Designation = row.Designation;
    console.log('first : ' + selectedData);
    console.log('first : ' + selectedData.name);
    console.log('first : ' + show);
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
    this.setState({showDetail:true});
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
            
                <BootstrapTable data={ this.state.employees } selectRow={selectRowProp} search={true}
        striped={true} hover={true}  height='120' width='150'>
        <TableHeaderColumn width='140' dataField='id' isKey={ true }>Employee Id</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='name'  dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='track'>Track</TableHeaderColumn>
        <TableHeaderColumn width='140' dataField='level'>Competency</TableHeaderColumn>
      </BootstrapTable>
                
            </div>
             
            <div className="col-sm-2">
            <DropdownButton bsStyle="primary" bsSize="large" title="List of Team Members" onSelect={this.handleSelect}>
                <MenuItem eventKey='1022169'>Praba</MenuItem>
            </DropdownButton>&nbsp;
                <Button bsStyle="default" onClick={this.clear}>Clear</Button>
            </div>
        </div>
            
        <br/><br/>
            
        
                { this.state.showDetail ? <YorbitPerson /> : null }
            
            
    </div>
    );
  }
}