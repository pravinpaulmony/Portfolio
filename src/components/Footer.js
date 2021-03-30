import React from "react";
import {  MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-medium  mt-5">
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="white-text font-small">
        Copyright &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;