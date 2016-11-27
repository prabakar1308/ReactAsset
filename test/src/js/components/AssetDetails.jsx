import React from 'react';
import {Thumbnail,Well,Button} from 'react-bootstrap';
import TeamDetailStore from '../stores/TeamDetailStore.jsx';

export default class AssetDetails extends React.Component {
    
    
    
      constructor(){
        super();
        this.state= {
            assetData:[],
            isLaptop:false,
            isDatacard:false,
        };
          
          TeamDetailStore.getAssetDetails().then(function (res) {
             this.setState({
               assetData : res.data,
           });             
               
              
  }.bind(this));
    }

  render() {
      
      var laptopDetails = [];
      var datacardDetails = [];
      var laptopCount = 0;
      var datacardCount = 0;
      var asset = this.state.assetData;
              console.log(asset);
for (var i = 0; i < asset.length; i++) {
    laptopCount++;
    if(asset[i].Type == 'Laptop'){
    laptopDetails.push( <tr>
        <td>{laptopCount}</td>
        <td>{asset[i].Company}</td>
        <td>{asset[i].Number}</td>
        <td>{asset[i].Model}</td>
            <td>{asset[i].Owner}</td>
            <td>{asset[i].CurrentOwner}</td>
      </tr>);
    }
    else if(asset[i].Type == 'Datacard'){
        datacardCount++;
        datacardDetails.push( <tr>
        <td>{datacardCount}</td>
        <td>{asset[i].Company}</td>
        <td>{asset[i].Number}</td>
        <td>{asset[i].Model}</td>
            <td>{asset[i].Owner}</td>
            <td>{asset[i].CurrentOwner}</td>
      </tr>);
    }
}
     
      
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
                                <th>Laptop No.</th>
                                <th>Model</th>
                                <th>Owner</th>
                                <th>Currently with</th>
                            </tr>
                        </thead>
                        <tbody>
                           {laptopDetails}
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
        <th>Dongle No.</th>
      <th>Model</th>
      <th>Owner</th>
      <th>Currently with</th>
    </tr>
  </thead>
  <tbody>
      {datacardDetails}  
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