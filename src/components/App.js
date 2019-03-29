// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import UserInformation from './UserInformation';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleUserInmformation = this.toggleUserInmformation.bind(this);
  }

  toggleUserInmformation(e){
    e.preventDefault();
     this.props.mappedToggleUserInmformation();
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Example User Information App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleUserInmformation}>
         <NavItem eventKey={1}>Show User Information</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showUserInformation &&
    <UserInformation userInformation={this.toggleUserInmformation} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}