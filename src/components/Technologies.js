import React from "react";
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBProgress,MDBAnimation } from "mdbreact";

const Technologies = () => {
  return (
    <MDBContainer className="py-5">
      <h1 className="h4-responsive white-text font-weight-bold mb-4">P R O G R A M M I N G</h1>
      <MDBAnimation type="fadeInLeft" delay=".3s">  
        <MDBRow className="justify-content-center">
        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="primary" className="w-50">PHP 7</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="secondary" className="w-50">REACT JS</MDBBtn>
              <MDBProgress material value={50} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >50 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="danger" className="w-50">LARAVEL</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="blue-grey" className="w-50">CODEIGNITER</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="default" className="w-50">JQUERY</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="info" className="w-50">JAVASCRIPT</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="blue-grey" className="w-50">HTML</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="pink" className="w-50">CSS</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light-blue" className="w-50">BOOTSTRAP</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light-green" className="w-50">MD-BOOTSTRAP</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="deep-orange" className="w-50">BULMA</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="light" className="w-50">WORDPRESS</MDBBtn>
              <MDBProgress material value={70} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >70 %</MDBProgress>
            </div>
        </MDBCol>

        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="warning" className="w-50">MYSQL</MDBBtn>
              <MDBProgress material value={100} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >100 %</MDBProgress>
            </div>
        </MDBCol>
        
        <MDBCol md="6">
            <div className="d-flex my-2">
              <MDBBtn size="lg" outline color="mdb-color" className="w-50">VUE JS</MDBBtn>
              <MDBProgress material value={30} height="18px" className="w-50 mt-4 font-weight-bold" color="primary" >30 %</MDBProgress>
            </div>
        </MDBCol>

        </MDBRow>
        </MDBAnimation>

        <h1 className="h4-responsive white-text font-weight-bold my-4">S O F T W A R E S</h1>

        <MDBAnimation type="fadeInRight" delay=".3s">  
        <MDBRow className="justify-content-center">     

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="primary" className="p-3 my-3 w-100">AWS CLOUD</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="info" className="p-3 my-3 w-100">IONOS</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="danger" className="p-3 my-3 w-100">FIREBASE</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="deep-orange" className="p-3 my-3 w-100">XAMPP</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="warning" className="p-3 my-3 w-100">WEBFLOW</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="unique" className="p-3 my-3 w-100">WEBNODE</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light-blue" className="p-3 my-3 w-100">MYSQL WORKBENCH</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light" className="p-3 my-3 w-100">SQL YOG</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="light-green" className="p-3 my-3 w-100">WINSCP</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="cyan" className="p-3 my-3 w-100">FILEZILLA</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="mdb-color" className="p-3 my-3 w-100">PUTTY</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="blue-grey" className="p-3 my-3 w-100">VSCODE</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="purple" className="p-3 my-3 w-100">SUBLIME TEXT</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="success" className="p-3 my-3 w-100">NOTEPAD ++</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="indigo" className="p-3 my-3 w-100">ADOBE PHOTOSHOP</MDBBtn>
        </MDBCol>

        <MDBCol size="6" sm="3">
          <MDBBtn size="lg" outline color="default" className="p-3 my-3 w-100">Figma</MDBBtn>
        </MDBCol>

        </MDBRow>
        </MDBAnimation>
    </MDBContainer>
  );
}

export default Technologies;