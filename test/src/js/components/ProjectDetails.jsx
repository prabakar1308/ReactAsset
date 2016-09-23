import React from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class ProjectDetails extends React.Component {

  render() {
    return (
         <Jumbotron>
             <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
           
        <h2>Project Information</h2>
        <p></p>
        <p>Time Inc. project is one of the maintenance project which also involves in enhancement activities</p>
        <p>List of tracks involves:</p>
        <dl>
        <dt>Java Track</dt>
            <dd>- belongs to Java & handles CircModel,Data Portal & SAS applications.</dd>
            <br/>
        <dt>MS Track</dt>
            <dd>- belongs to dotnet & handles CircMan, CSU,LUCIE & Jobtracker applications</dd>
            <br/>
        <dt>QA Track</dt>
            <dd>- belongs to testing & handles manual and automative testing for all applications</dd>
            <br/>
        <dt>DB Track</dt>
            <dd>- belongs to database & provides support for all db related activities for all applications</dd>
        </dl>
                
             </div>
        <div className="col-sm-1"></div>
      </div> 
            </Jumbotron>
    );
  }

}