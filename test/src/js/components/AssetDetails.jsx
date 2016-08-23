import React from 'react';
export default class AssetDetails extends React.Component {

  render() {
    return (
      <div>
        <h3>Asset Details</h3>
        <table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Device Name</th>
      <th>Device No.(if any)</th>
      <th>Owner</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Laptop</td>
      <td>LT123</td>
      <td>Praba</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Laptop</td>
      <td>LT122</td>
      <td>Ramesh</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>DataCard</td>
      <td>NA</td>
      <td>Jacq</td>
    </tr>
  </tbody>
</table>
      </div> 
    );
  }

}