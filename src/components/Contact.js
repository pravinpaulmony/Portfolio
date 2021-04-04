import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "./Contact.css";
import ListGroupPage from './Contact_list';

class Contact extends React.Component {

  render() {
    return (
      <>
          <MDBMask className="pt-5 justify-content-center align-items-center gradient">
          <MDBContainer>
              <MDBRow>

              <MDBCol lg="6" md="12" sm="12" className="my-5">
                <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center "
                  >
                    <h4 className="h4-responsive font-weight-bolder white-text rgba-black-strong p-3">
                    Looking forward to hear from you . . .
                    </h4>
                    <hr className="hr-light" />
                  <ListGroupPage /> 
                  </MDBAnimation>
              </MDBCol>

               <MDBCol lg="6" md="12" sm="12" className="my-5">
               <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card" className="rgba-black-strong">
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
                          <MDBBtn color="indigo"><MDBIcon far icon="paper-plane" /> Send</MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
               </MDBCol>

              </MDBRow>
            </MDBContainer>
          </MDBMask>
      </>

    );
  }
}

export default Contact;