import React from 'react';
import {Link} from 'react-router';
import {button} from 'react-bootstrap';


export default class Layout extends React.Component {
    
   /* constructor(){
        super();
        this.state= {
            Title:"Asset Management1",
            Info:"Info about project1",
            personInfo:"Info about person",
        };
    }*/
    
    navigate(){
        //console.log(this.props);
        this.props.history.pushState(null,"/");
    }

  render() {
    return (
      <div>
        <h1>Project Management</h1>
        <Link to='team'><button class="btn btn-primary">Team Details</button></Link>
        <Link to='asset'><button class="btn btn-info">Asset Details</button></Link>
        <button class="btn btn-outline-success btn-xs" onClick={this.navigate.bind(this)}>Project Details</button>
        {this.props.children}
      </div>
    );
  }

}
