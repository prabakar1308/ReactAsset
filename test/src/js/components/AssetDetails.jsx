import React from 'react';
import {Thumbnail,Well,Button} from 'react-bootstrap';

export default class AssetDetails extends React.Component {
    
      constructor(){
        super();
        this.state= {
            isLaptop:false,
            isDatacard:false,
        };
    }

  render() {
    return (
    <div>
      <div className="row"><br/>
        <div className="col-sm-2"></div>
        <div className="col-sm-3">
            <Button>
              <img width={200} height={200} onClick={()=> this.setState({ isLaptop: !this.state.isLaptop })} src="../images/laptop.jpg" alt="10x10" border="2">       
              </img>
            </Button>
        </div> 
        <div className="col-sm-2"></div>
        <div className="col-sm-3">
            <Button>
              <img width={200} height={180} src="../images/datacard.jpg" alt="10x10" onClick={()=> this.setState({ isDatacard: !this.state.isDatacard })} thumbnail>
              </img>
            </Button>
        </div>
        <div className="col-sm-2"></div>
      </div><br/><br/>
            
      <div className="row">
        <div className="col-sm-1"></div>
        <div id="laptop" className="col-sm-4">
             {this.state.isLaptop ?
                <div>
                    <Well>
                        <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Company</th>
                                <th>Model</th>
                                <th>Owner</th>
                                <th>Currently with</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Lenovo</td>
                                <td>LT123</td>
                                <td>Ramesh</td>
                                <td>Ramesh</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>HP</td>
                                <td>LT122</td>
                                <td>Praba</td>
                                <td>Praba</td>
                            </tr>   
                        </tbody>
                        </table>
                    </Well>
                </div> : null}
            
                    </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                {this.state.isDatacard ?
          <div>
            <Well>
               <table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Company</th>
      <th>Model</th>
      <th>Owner</th>
      <th>Currently with</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Airtel</td>
      <td>4G</td>
      <td>Ramesh</td>
      <td>Ramesh</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Vodafone</td>
      <td>3G</td>
      <td>Praba</td>
        <td>Praba</td>
    </tr>   
  </tbody>
</table>
            </Well>
          </div> : null}</div>
      
             <div className="col-sm-1"></div>
        </div>
            </div>
    );
  }

}