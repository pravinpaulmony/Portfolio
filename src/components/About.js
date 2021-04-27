import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBRow, MDBCol, MDBView, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask, MDBAnimation,MDBBtn, MDBModal, MDBModalBody, MDBModalFooter,MDBIcon,Link,MDBBtnGroup } from "mdbreact";
import { Document,Page,pdfjs } from "react-pdf";
import cv from './cv.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class About extends Component {

  state = { numPages: null, pageNumber: 1, modal: false };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      const { pageNumber } = this.state;

  return (
    <>
  <MDBView src={process.env.PUBLIC_URL + '/cover1.jpg'}>
      <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center" >
      <MDBAnimation type="fadeInDown" delay=".3s">
        <h1>Welcome To My Personal Portfolio</h1>
        </MDBAnimation>
      </MDBMask>
    </MDBView>
<MDBContainer fluid className="my-5">

      <MDBModal className="resume" isOpen={this.state.modal} toggle={this.toggle} fullHeight position="right" size="lg">
        <MDBModalBody className="resume scrollbar">
          <Document file={cv}  >
            <Page pageNumber={pageNumber} />
          </Document>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtnGroup size="sm">
            <MDBBtn color="primary"><Link to={process.env.PUBLIC_URL + '/cv.pdf'} target="_blank" download className="text-white">Download&nbsp;&nbsp;<MDBIcon icon="download" /></Link></MDBBtn>
            <MDBBtn color="dark" onClick={this.toggle}>Close&nbsp;&nbsp;<MDBIcon icon="times" /></MDBBtn>
          </MDBBtnGroup>
        </MDBModalFooter>
      </MDBModal>

    <MDBRow>

    <MDBCol md='1'></MDBCol>

    <MDBCol md='3'>
      <MDBAnimation type="pulse">
        <MDBCard wide cascade color="black">
          <MDBView cascade waves>
            <img className='rounded mx-auto' src={process.env.PUBLIC_URL + '/profile.jpg'}  alt='Pravin'  style={{height: 'auto', width: '200px'}}/>
          </MDBView>
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
                <strong className='font-weight-bold white-text'>PRAVIN</strong><hr />
                 <strong className='font-weight-bold cyan-text'>Fullstack Web Developer</strong><br></br>
                 <MDBBtn color="indigo" onClick={this.toggle}>RESUME&nbsp;&nbsp;<MDBIcon far icon="file-pdf" /></MDBBtn>
            </MDBCardTitle> 
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>

    <MDBCol md='7'>
    <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        >
        <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
            <MDBView>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/web-developer.jpg'}
                alt="First slide" style={{height:'400px'}}
                />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
                <h4 className="h4-responsive">Professional PHP Developer <br></br> <hr></hr> With 5+ years of experience<br></br> </h4>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBView>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/freelancer.jpg'}
                alt="Second slide" style={{height:'400px'}}
                />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
                <h4 className="h4-responsive">Part Time Freelancer <br></br> <hr></hr> For web application development<br></br> </h4>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBView>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/siegen-uni.jpg'}
                alt="Third slide" style={{height:'400px'}}
                />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
                <h4 className="h4-responsive">M.Sc. in Human Computer Interaction <br></br> <hr></hr> @ University of Siegen, Germany<br></br> </h4>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
            <MDBView>
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/travel.jpg'}
                alt="Third slide" style={{height:'400px'}}
                />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
                <h4 className="h4-responsive">Nature Traveller & Wildlife Explorer <br></br> <hr></hr> Space Enthusiast <br></br></h4>
            </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
    </MDBCol>

    </MDBRow>
    </MDBContainer>
    </>
  );
}
}

export default About;