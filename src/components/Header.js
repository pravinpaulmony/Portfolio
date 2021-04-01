import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { Link} from "react-router-dom";
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
      <>
          <MDBNavbar color="unique-color-dark" dark expand="md" className="p-4" >
            <MDBNavbarBrand>
            <Link to="/"><h5 className="font-large font-weight-bold" style={{color: '#03fcc2'}} to="/Home"><MDBIcon icon="feather-alt" />&nbsp;&nbsp;PRAVIN PORTFOLIO</h5></Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>    
              </MDBNavbarNav>
              <MDBNavbarNav right>
              <MDBNavItem className="pr-3">
                  <MDBNavLink to="/Projects"><MDBIcon icon="code" />&nbsp;&nbsp;Projects</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="pr-3">
                  <MDBNavLink to="/Technologies"><MDBIcon icon="gem" />&nbsp;&nbsp;Technologies</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="pr-3">
                  <MDBNavLink to="/Contact"><MDBIcon icon="map-marker-alt" />&nbsp;&nbsp;Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
      </>
    );
  }
}

export default Header;