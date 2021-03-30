import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
          <MDBNavbar color="unique-color-dark" dark expand="md" className="p-4" fixed="top">
            <MDBNavbarBrand>
              <h5 className="font-large font-weight-bold" style={{color: '#03fcc2'}}><MDBIcon icon="feather-alt" />&nbsp;&nbsp;PRAVIN PORTFOLIO</h5>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>            
              </MDBNavbarNav>
              <MDBNavbarNav right>
              <MDBNavItem className="pr-3">
                  <MDBNavLink to="#!"><MDBIcon icon="code" />&nbsp;&nbsp;Projects</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="pr-3">
                  <MDBNavLink to="#!"><MDBIcon icon="gem" />&nbsp;&nbsp;Technologies</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="pr-3">
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon icon="map-marker-alt" />&nbsp;&nbsp;Contact
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          </Router>

          <MDBView src={process.env.PUBLIC_URL + '/cover1.jpg'}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center" >
              <h1>Welcome To My Personal Portfolio</h1>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default Header;