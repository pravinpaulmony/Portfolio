import React from "react";
import { MDBContainer, MDBCard, MDBCardTitle, MDBCardImage, MDBCardText, MDBCardBody, MDBRow, MDBCol, MDBView, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask } from "mdbreact";



const About = () => {
  return (
    <MDBContainer fluid className="my-3">
     
    <MDBRow>

    <MDBCol md='1'></MDBCol>

    <MDBCol md='3'>
        <MDBCard wide cascade color="black">
          <MDBView cascade waves>
            <img className='rounded mx-auto' src={process.env.PUBLIC_URL + '/profile.jpg'}  alt='Pravin'  style={{height: '350px', width: 'auto'}}/>
          </MDBView>
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
                <strong className='font-weight-bold white-text'>PRAVIN</strong><hr />
                 <strong className='font-weight-bold cyan-text'>Fullstack Web Developer</strong>
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
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
                <h4 className="h4-responsive">Nature Traveller & Wildlife Explorer <br></br> <hr></hr> Space Researcher <br></br></h4>
            </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
    </MDBCol>

    </MDBRow>
    </MDBContainer>
  );
}

export default About;