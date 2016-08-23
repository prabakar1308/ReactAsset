import React from 'react';
export default class TeamDetails extends React.Component {

  render() {
    return (
      <div>
        <h3>Team Information</h3>
        <p>List of active team members:</p>
        <p>Delivery Manager - <b>Mahesh T</b></p>
        <p>Project Manager - <b>Jacqulin</b></p>
        <dl>
        <dt>Java Track</dt>
            <dd>- Ramesh</dd>
            <dd>- Mahesh</dd>
            <dd>- Shyjith</dd>
        <dt>MS Track</dt>
            <dd>- Vasanth</dd>
            <dd>- Bhoopathy</dd>
            <dd>- Uma</dd>
        <dt>QA Track</dt>
            <dd>- Venkat</dd>
            <dd>- Vijay</dd>
            <dd>- Abinash</dd>
        <dt>DB Track</dt>
            <dd>- Karthik</dd>
            <dd>- Nithya</dd>
        </dl>
      </div> 
    );
  }

}
