import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBAnimation } from "mdbreact";
import "./Projects.css";

class ProjectsPage extends Component {

    state = {
        modal: false,
        images: [],
        piclength: "",
        summary: "",
        technologies: [],
        role: "",
        siteurl: ""
      }

    toggle = nr => () => {
        let modalNumber = 'modal'
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
        if(nr==="wps_portal"){
            this.setState({ title: "WPS PORTAL", piclength: 6 });
            this.setState({ images: ["p1-1.png","p1-2.png","p1-3.png","p1-4.png","p1-5.png","p1-6.png"] });
            this.setState({ summary: "An automated project management tool containing information about e-books, e-journals for a e-publishing company. Features such as automated schedule, timesheet tracking, information management, Dropbox file uploading, User hierarchy management, Report generation were integrated." });
            this.setState({ technologies: ["PHP","MYSQL","JQUERY","JAVASCRIPT","CODEIGNITER","BOOTSTRAP","AWS","REST API" ] });
            this.setState({ role: "FULL-STACK DEVELOPER" });
            this.setState({ siteurl: "" });
        }
        else if(nr==="stone_soup"){
            this.setState({ title: "STONE SOUP", piclength: 7 });
            this.setState({ images: ["p2-1.PNG","p2-2.PNG","p2-3.PNG","p2-4.PNG","p2-5.PNG","p2-6.PNG","p2-7.PNG"] });
            this.setState({ summary: "A ticketing tool for the production users to communicate with the development team and to raise thier issues. Major modules like ticketing system with SLA plan, Task & bug tracking, Timesheet, Email Communication were implemented. " });
            this.setState({ technologies: ["PHP","MYSQL","JQUERY","JAVASCRIPT","LARAVEL","BOOTSTRAP","AWS" ] });
            this.setState({ role: "FULL-STACK DEVELOPER" });
            this.setState({ siteurl: "" });
        }
        else if(nr==="gocinema"){
            this.setState({ title: "GOCINEMA", piclength: 3 });
            this.setState({ images: ["p3-1.png","p3-2.jpg","p3-3.jpg"] });
            this.setState({ summary: "An online movie information site to provide details about movies in 8 different languages. The information includes cast & crew, reviews, posters, trailers, songs and latest news. Also an backend site is developed inorder to add or update data in the database for the movies. Modules like location tracking, Add to favourites, Itunes api and interactive web design were implemented. " });
            this.setState({ technologies: ["PHP","MYSQL","JQUERY","JAVASCRIPT","BOOTSTRAP","AWS", "REST API", "JSON WEB SERVICES" ] });
            this.setState({ role: "BACKEND DEVELOPER" });
            this.setState({ siteurl: "" });
        }
        else if(nr==="web_scraping"){
            this.setState({ title: "WEB SCRAPING", piclength: 4 });
            this.setState({ images: ["p4-1.png","p4-2.png","p4-3.png","p4-4.png"] });
            this.setState({ summary: "A PHP scraping tool to get information from jobsites and exporting them. The job informations are collected from 2 different sites with a date range and features are provided to view, export the content in an interactive way.  " });
            this.setState({ technologies: ["PHP","JQUERY","CODEIGNITER","BOOTSTRAP","AWS", "REST API","HTML DOM Parser" ] });
            this.setState({ role: "FULL-STACK DEVELOPER" });
            this.setState({ siteurl: "" });
        }
        else if(nr==="weather"){
            this.setState({ title: "WEATHER", piclength: 3 });
            this.setState({ images: ["p5-1.png","p5-2.png","p5-3.png"] });
            this.setState({ summary: "A weather forecasting tool for all the cities in germany. Responsive design and providing weather details for the upcoming week. Information fetched through open weather API and generated more visually. " });
            this.setState({ technologies: ["PHP","JQUERY","CODEIGNITER","BOOTSTRAP", "REST API" ] });
            this.setState({ role: "FULL-STACK DEVELOPER" });
            this.setState({ siteurl: "" });
        }
        else if(nr==="college"){
            this.setState({ title: "COLLEGE PROJECTS", piclength: 1 });
            this.setState({ images: ["p2-1.png","p2-2.png"] });
            this.setState({ summary: "Analysed and developed projects from IEEE papers and journals for college students. Developed more than 45 projects for the students along with project documentation. Conducted classes for teaching programming and project development explanation. " });
            this.setState({ technologies: ["PHP","JQUERY","JAVASCRIPT","BOOTSTRAP", "HTML", "CSS", "DOTNET" ] });
            this.setState({ role: "FULL-STACK DEVELOPER" });
            this.setState({ siteurl: "" });
        }
        else if(nr==="hobby_geo"){
            this.setState({ title: "HOBBY GEOGRAPHY", piclength: 5 });
            this.setState({ images: ["p6-1.png","p6-2.png","p6-3.png","p6-4.png","p6-5.png"] });
            this.setState({ summary: "Online game website for ineractive geographical puzzles. The aim is to improve interactive learning for the students and people through some puzzle games. Currently developed and implemented 3 different games. " });
            this.setState({ technologies: ["ANGULAR JS","JQUERY", "TYPESCRIPT", "BOOTSTRAP", "HTML", "CSS", "FIREBASE" ] });
            this.setState({ role: "FULL-STACK DEVELOPER" });
            this.setState({ siteurl: "https://hobbygeography.web.app/" });
        }
        else if(nr==="mvs"){
            this.setState({ title: "MVS", piclength: 1 });
            this.setState({ images: ["p7.jpg"] });
            this.setState({ summary: "Online E-Commerce site for bicycles shopping with various features. This website is developed to purchase your favourite bicycles from online along with providing more neccessary information to the users. Modules like payment gateway, Add to cart were integrated." });
            this.setState({ technologies: ["PHP","MYSQL","JQUERY","WORDPRESS", "HTML", "CSS" ] });
            this.setState({ role: "BACKEND DEVELOPER" });
            this.setState({ siteurl: "" });
        }
        else if(nr==="big_cats"){
            this.setState({ title: "BIG CATS", piclength: 5 });
            this.setState({ images: ["p8-1.png","p8-2.png","p8-3.png","p8-4.png","p8-5.png"] });
            this.setState({ summary: "Online website for awareness and gathering information about different big cats. This site is developed for personal interest inorder to create awareness to people to the big cats and nature from extinction. 12 different big cats are foucsed on the website and its still under development." });
            this.setState({ technologies: ["WEBNODE", "HTML", "CSS" ] });
            this.setState({ role: "FULL-STACK DEVELOPER" });
            this.setState({ siteurl: "https://pravinraw.webnode.com/" });
      }
        else{
            this.setState({ title: "" });
            this.setState({ images: [] });
            this.setState({ summary: "" });
            this.setState({ technologies: [] });
            this.setState({ role: "" });
            this.setState({ siteurl: "" });
        }
    }

    render() {

    return (
    <section className="text-center my-5">
        
        <MDBContainer fluid>

        <MDBModal isOpen={this.state.modal} toggle={this.toggle(8)} fullHeight position="top">
            <MDBModalHeader toggle={this.toggle(8)}><strong className='font-weight-bold text-center text-danger'>{this.state.title}</strong></MDBModalHeader>
            <MDBModalBody>
            <MDBRow className="justify-content-center">
            <MDBCol size="12" lg="6" md="12" sm="12" xs="12">
               <h6 className="font-weight-bold text-left mt-4 text-primary">SUMMARY</h6>
               <p className="font-weight-bolder text-justify">{this.state.summary}</p> 
               
               <h6 className="font-weight-bold text-left mt-4 text-primary">ROLE : <span className="font-weight-bolder text-success">{this.state.role}</span></h6>
              
               {this.state.siteurl!=="" ? (
               <h6 className="font-weight-bold text-left mt-4 text-primary">URL : <a href={this.state.siteurl} target="_blank" rel="noreferrer" className="font-weight-bolder text-success">{this.state.siteurl}</a></h6> ) : ""}

                <h6 className="font-weight-bold text-left mt-4 text-primary">TECHNOLOGIES USED</h6>
                <ul className="font-weight-bolder text-left">
                  {this.state.technologies.map((tech,i) => (
                    <li>{tech}</li> 
                  ))}
                </ul>

            </MDBCol>
            <MDBCol size="12" lg="6" md="12" sm="12" xs="12">
                <MDBCarousel activeItem={1} length={this.state.piclength} showControls={true} showIndicators={true} className="z-depth-1" >
                  <MDBCarouselInner>
                  {this.state.images.map((item,i) => (
                      <MDBCarouselItem itemId={i+1}>
                      <MDBView>
                          <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/'+item} alt="Login" style={ {height:'450px'}} waves/>
                      <MDBMask overlay="black-slight" />
                      </MDBView>
                      </MDBCarouselItem>
                      ))}
                  </MDBCarouselInner>
                </MDBCarousel>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="dark" onClick={this.toggle(8)}>Close</MDBBtn>
            </MDBModalFooter>
         </MDBModal>

        <MDBRow className="d-flex justify-content-center">
          
          <MDBCol md="4" xl="3" className="mb-4">
          <MDBAnimation type="zoomIn" delay=".3s">
          <MDBCarousel activeItem={1} length={1} showControls={false} showIndicators={false} className="z-depth-1">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/p1.png'} alt="Login" style={ {height:'300px'}} waves/>
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
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
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + 'screenshots/p2.PNG'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
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
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/p3.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />GOCINEMA</h4>
              </a>
              <h5 className="font-weight-bold mb-3">Movie Information Website</h5>
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
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/p4.png'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
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
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/p5.png'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />WEATHER INFO</h4>
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
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/p6.png'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
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
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/p7.jpg'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <MDBCardBody className="pb-0 white-text">
              <a href="#!" className="orange-text">
                <h4 className="font-weight-bold mt-2 mb-3"><MDBIcon far icon="file-code" className="mr-2" />MVS</h4>
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
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + '/screenshots/p8.png'} alt="First slide" style={ {height:'300px'}} />
                <MDBMask overlay="black-light" />
                </MDBView>
                </MDBCarouselItem>
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