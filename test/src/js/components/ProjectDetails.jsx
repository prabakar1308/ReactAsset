import React from 'react';
import TeamDetailsChart from './TeamDetailsChart.jsx';
import AssetDetailsChart from './AssetDetailsChart.jsx';
import {Jumbotron,Carousel,CarouselItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class ProjectDetails extends React.Component {

  render() {
    return (
         <Jumbotron>
             <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
            
            <Carousel style={{color: "black", width:"100%", height: "300px"}}>
     <CarouselItem>
         <div className="row">
      <div className="col-sm-12">
      <img width={910} height={300} alt="900x500" src="../images/Time_Inc1.jpg"/>
           </div>
      </div>
    </CarouselItem>
    <CarouselItem>
        <br/>
      <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <h3>Java Track</h3>
          <br/>
        <p>Maintain Java & SAS realted applications.</p>
          <br/>
          <ul>
          <li> CircModel</li>
          <li> Digital Metadata</li>
          <li> DataPortal</li>
          <li> SAS Reports</li>
          </ul>
          </div>
          <div className="col-sm-3"></div>
      </div>
    </CarouselItem>
   <CarouselItem>
       <br/>
      <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <h3>MS Track</h3>
          <br/>
        <p>Maintain .Net realted applications.</p>
          <br/>
          <ul>
          <li> CircMan</li>
          <li> CSU</li>
          <li> LUCIE</li>
          <li> Job Tracker</li>
          </ul>
          <div className="col-sm-3"></div>
          </div>
      </div>
    </CarouselItem>
    <CarouselItem>
        <br/>
      <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <h3>QA Track</h3>
          <br/>
        <p>Handles manual and automative testing for all applications.</p>
          <br/>
          <ul>
          <li> CircMan, CSU, LUCIE, Job Tracker</li>
          <li> CircModel, Digital Metadata, DataPortal & SAS Reports</li>
          </ul>
          </div>
          <div className="col-sm-3"></div>
      </div>
    </CarouselItem>
   <CarouselItem>
       <br/>
      <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <h3>DB Track</h3>
          <br/>
        <p>Handles database related activities.</p>
          <br/>
          <ul>
          <li> Support & maintainence</li>
          <li> Data Load Process</li>
          </ul>
          </div>
          <div className="col-sm-3"></div>
      </div>
    </CarouselItem>
  </Carousel>     
    </div>
        <div className="col-sm-2"></div>
      </div>
            <br/><br/>
            <div className="row">
            <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <a  href="#team">
                <TeamDetailsChart/></a>
                </div>
                <div className="col-sm-4">
                    <a  href="#asset">
                        <AssetDetailsChart /></a>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
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
                <div className="col-sm-2"></div>
            </div>
            </Jumbotron>
    );
  }

}