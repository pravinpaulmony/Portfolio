import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {

    return (
      <div id="classicformpage">
        
        <MDBView src={process.env.PUBLIC_URL + '/cont.jpg'}>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h3 className="h3-responsive font-weight-bold">
                  Looking forward to hear from you . . .
                  </h3>
                  <hr className="hr-light" />
                  
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center white-text">
                          <MDBIcon icon="envelope" /> Contact Me
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="lime-text"
                          iconClass="white-text"
                          label="Your Name"
                          icon="user"
                        />
                        <MDBInput
                          className="lime-text"
                          iconClass="white-text"
                          label="Your Email"
                          icon="envelope"
                        />
                        <MDBInput
                          className="lime-text"
                          iconClass="white-text"
                          label="Your Message"
                          icon="pencil-alt"
                          type="textarea"
                          rows="5"
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="indigo">Send</MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

      </div>
    );
  }
}

export default Contact;