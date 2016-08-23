import React from 'react';
export default class ProjectDetails extends React.Component {

  render() {
    return (
      <div>
        <h3>Project Information</h3>
        <p></p>
        <p>Time Inc. project is one of the maintenance project which also involves in enhancement activities</p>
        <p>List of tracks involves:</p>
        <dl>
        <dt>Java Track</dt>
            <dd>- belongs to Java & handles CircModel,Data Portal & SAS applications.</dd>
        <dt>MS Track</dt>
            <dd>- belongs to dotnet & handles CircMan, CSU,LUCIE & Jobtracker applications</dd>
        <dt>QA Track</dt>
            <dd>- belongs to testing & handles manual and automative testing for all applications</dd>
        <dt>DB Track</dt>
            <dd>- belongs to database & provides support for all db related activities for all applications</dd>
        </dl>
      </div> 
    );
  }

}