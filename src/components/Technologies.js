import React, { Fragment } from "react";
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBListGroup,MDBListGroupItem,MDBBtnGroup,MDBProgress  } from "mdbreact";

const Technologies = () => {
  return (
    <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
        <MDBCol md="12" className="mb-4 py-3">
            <h1 className="h3-responsive orange-text font-weight-bolder">PROGRAMMING</h1>
            <MDBProgress material value={100} height="15px" color="indigo" animated>100%</MDBProgress>
            <Fragment>
            <MDBListGroup>
            <MDBListGroupItem className="rgba-black-strong" >
                <MDBBtnGroup className="d-flex">
                    <MDBBtn size="lg" outline color="primary" className="p-3 m-3">PHP 7</MDBBtn>
                    
                </MDBBtnGroup>
                <MDBBtn size="lg" outline className="p-3 m-3">LARAVEL</MDBBtn>
                <MDBBtn size="lg" outline color="secondary" className="p-3 m-3">CODEIGNITER</MDBBtn>
                <MDBBtn size="lg" outline color="success" className="p-3 m-3">JAVASCRIPT</MDBBtn>
                <MDBBtn size="lg" outline color="info" className="p-3 m-3">JQUERY</MDBBtn>
                <MDBBtn size="lg" outline color="warning" className="p-3 m-3">WORDPRESS</MDBBtn>
                <MDBBtn size="lg" outline color="danger" className="p-3 m-3">WEBFLOW</MDBBtn>
                <MDBBtn size="lg" outline color="danger" className="p-3 m-3">HTML</MDBBtn>
                <MDBBtn size="lg" outline color="danger" className="p-3 m-3">CSS</MDBBtn>
                <MDBBtn size="lg" outline color="danger" className="p-3 m-3">BULMA</MDBBtn>
                <MDBBtn size="lg" outline color="danger" className="p-3 m-3">MYSQL</MDBBtn>
                <MDBBtn size="lg" outline color="danger" className="p-3 m-3">REACT JS</MDBBtn>
                <MDBBtn size="lg" outline color="danger" className="p-3 m-3">VUE JS</MDBBtn>
            </MDBListGroupItem>
            </MDBListGroup>
            </Fragment>
           </MDBCol>

           <MDBCol md="12" className="mb-4 py-3">
            <h1 className="h3-responsive orange-text font-weight-bolder">SOFTWARES</h1>
            <Fragment>
            <MDBBtn size="lg" outline color="primary">AWS CLOUD</MDBBtn>
            <MDBBtn size="lg" outline>IONOS</MDBBtn>
            <MDBBtn size="lg" outline color="secondary">FIREBASE</MDBBtn>
            <MDBBtn size="lg" outline color="success">JAVASCRIPT</MDBBtn>
            <MDBBtn size="lg" outline color="info">XAMPP</MDBBtn>
            <MDBBtn size="lg" outline color="warning">MYSQL WORKBENCH</MDBBtn>
            <MDBBtn size="lg" outline color="danger">SQL YOG</MDBBtn>
            <MDBBtn size="lg" outline color="danger">WINSCP</MDBBtn>
            <MDBBtn size="lg" outline color="danger">FILEZILLA</MDBBtn>
            <MDBBtn size="lg" outline color="danger">PUTTY</MDBBtn>
            <MDBBtn size="lg" outline color="danger">VSCODE</MDBBtn>
            <MDBBtn size="lg" outline color="danger">SUBLIME TEXT</MDBBtn>
            <MDBBtn size="lg" outline color="danger">NOTEPAD ++</MDBBtn>
            <MDBBtn size="lg" outline color="danger">ADOBE PHOTOSHOP</MDBBtn>
            </Fragment>
           </MDBCol>

        </MDBRow>
    </MDBContainer>
  );
}

export default Technologies;