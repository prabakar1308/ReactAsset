import React from 'react';
import {Link} from 'react-router';
import Router from 'react-router';
import {button} from 'react-bootstrap';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


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
      <div class="Jumbotron">
        <div className="row">
           <Navbar fixedTop>
            
            <div class="navbar-header">
                <a class="navbar-brand">Project Management</a>
            </div>
                
            <Nav bsStyle="tabs" activeKey={1} pullRight>
                <LinkContainer to="team"><NavItem eventKey={1}>Team Details</NavItem></LinkContainer>
                <LinkContainer to="asset"><NavItem eventKey={1}>Asset Details</NavItem></LinkContainer>
                <LinkContainer to="yorbit"><NavItem eventKey={1}>Yorbit</NavItem></LinkContainer>
                <NavItem onClick={this.navigate.bind(this)}>Home</NavItem>
            </Nav>
                
           </Navbar> 
         </div>
        <div><br/><br/><br/></div>
        <div className="row">{ this.props.children }</div>
    
      </div>
            
    );
  }

}
