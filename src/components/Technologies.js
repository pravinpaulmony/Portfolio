import React from "react";
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBProgress,MDBAnimation,MDBIcon } from "mdbreact";

const Technologies = () => {
  return (
    <MDBContainer className="py-5">

     <h6 class="text-white float-right"><MDBIcon icon="info-circle"/> Experience based on 10 Year scale</h6>
      <h1 className="h4-responsive blue-text font-weight-bold mb-4">P R O G R A M M I N G </h1>
      <MDBAnimation type="fadeInLeft" delay=".3s">  
        <MDBRow className="justify-content-center">
        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">PHP 7</MDBBtn>
              <MDBProgress material value={60} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >6 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">REACT JS</MDBBtn>
              <MDBProgress material value={10} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >1 Year</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">LARAVEL</MDBBtn>
              <MDBProgress material value={30} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >3 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">CODEIGNITER</MDBBtn>
              <MDBProgress material value={40} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >4 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">JQUERY</MDBBtn>
              <MDBProgress material value={60} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >6 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">JAVASCRIPT</MDBBtn>
              <MDBProgress material value={60} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >6 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">HTML</MDBBtn>
              <MDBProgress material value={60} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >6 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">CSS</MDBBtn>
              <MDBProgress material value={60} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >6 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">BOOTSTRAP</MDBBtn>
              <MDBProgress material value={60} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >6 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">MD-BOOTSTRAP</MDBBtn>
              <MDBProgress material value={20} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >2 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">BULMA</MDBBtn>
              <MDBProgress material value={20} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >2 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">WORDPRESS</MDBBtn>
              <MDBProgress material value={20} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >2 Years</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">MYSQL</MDBBtn>
              <MDBProgress material value={60} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >6 Years</MDBProgress>
            </div>
        </MDBCol>
        
        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">VUE JS</MDBBtn>
              <MDBProgress material value={10} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >1 Year</MDBProgress>
            </div>
        </MDBCol>

        </MDBRow>
        </MDBAnimation>

        <h1 className="h4-responsive blue-text font-weight-bold my-5">S O F T W A R E S</h1>

        <MDBAnimation type="fadeInRight" delay=".3s">  
        <MDBRow className="justify-content-center">     

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">AWS CLOUD</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">IONOS</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">FIREBASE</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">XAMPP</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">WEBFLOW</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">WEBNODE</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">MYSQL WORKBENCH</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">SQL YOG</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">WINSCP</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">FILEZILLA</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">PUTTY</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">VSCODE</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">SUBLIME TEXT</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">NOTEPAD ++</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">ADOBE PHOTOSHOP</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">Figma</MDBBtn>
        </MDBCol>

        </MDBRow>
        </MDBAnimation>
    </MDBContainer>
  );
}

export default Technologies;