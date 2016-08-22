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
        this.props.history.push(null,"/");
    }

  render() {
    return (
      <div>
        <h1>Asset Management</h1>
        <Link to='person'><button class="btn btn-success">person</button></Link>
        <Link to='project'><button class="btn btn-danger">Project</button></Link>
        {this.props.children}
      </div>
    );
  }

}
