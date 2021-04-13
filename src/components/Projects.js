import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBAnimation } from "mdbreact";

class ProjectsPage extends Component {

    state = {
        modal: false
      }
      
    toggle = nr => () => {
        let modalNumber = 'modal'
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
        if(nr==="wps_portal"){
            this.setState({ title: "WPS PORTAL" });
        }
        else if(nr==="stone_soup"){
            this.setState({ title: "STONE SOUP" });
        }
        else if(nr==="gocinema"){
            this.setState({ title: "GOCINEMA" });
        }
        else if(nr==="web_scraping"){
            this.setState({ title: "WEB SCRAPING" });
        }
        else if(nr==="weather"){
            this.setState({ title: "WEATHER" });
        }
        else if(nr==="college"){
            this.setState({ title: "COLLEGE PROJECTS" });
        }
        else if(nr==="hobby_geo"){
            this.setState({ title: "HOBBY GEOGRAPHY" });
        }
        else if(nr==="mvs"){
            this.setState({ title: "MVS" });
        }
        else if(nr==="big_cats"){
          this.setState({ title: "BIG CATS" });
      }
        else{
            this.setState({ title: "" });
        }
    }

    render() {
    return (
    <section className="text-center my-5">
        
        <MDBContainer fluid>

        <MDBModal isOpen={this.state.modal} toggle={this.toggle(8)} fullHeight position="right">
            <MDBModalHeader toggle={this.toggle(8)}>{this.state.title}</MDBModalHeader>
            <MDBModalBody>
                
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
            </MDBModalFooter>
         </MDBModal>

        <MDBRow className="d-flex justify-content-center">
          
          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />WPS PORTAL</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Project Management and Tracking</h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("wps_portal")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>
          
          
          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />STONE SOUP</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Online Ticketing & Tracking Tool</h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("stone_soup")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>
          
          
          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />GOCINEMA</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Online Movie Information Website</h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("gocinema")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>
          
          
          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />WEB SCRAPING</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Web Scraping Tool for Jobs</h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("web_scraping")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>

          
          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />WEATHER INFORMATION</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Waether Forecast Tool</h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("weather")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>
          
          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />HOBBY GEOGRAPHY</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Online Geography Quiz and Games Website</h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("hobby_geo")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />MVC</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Ecommerce Website For Bicycle Shopping</h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("mvs")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>


          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/proj.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                {/* <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" alt="Second slide" style={{height:'300px'}} />
                <MDBMask overlay="black-strong" />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" alt="Third slide" style={{height:'300px'}} />
                <MDBMask overlay="black-slight" />
                </MDBView>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />BIG CATS</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Website for Wild Big Cats Information </h5>
              <MDBBtn size="sm" color="indigo" onClick={this.toggle("big_cats")}>More Details<MDBIcon far icon="arrow-alt-circle-right" className="ml-2"/></MDBBtn>
            </MDBCardBody>
            </MDBAnimation>
          </MDBCol>
          

        </MDBRow>
        </MDBContainer>
      </section>
  )
}
}

export default ProjectsPage;