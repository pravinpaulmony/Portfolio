 import React, { Fragment } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge,MDBBtn, MDBIcon, MDBBtnGroup, MDBInput   } from "mdbreact";

const ListGroupPage = () => {
return (

  <MDBListGroup>
    <MDBListGroupItem className="rgba-black-strong" >

    <MDBBtnGroup className="d-flex">
        <MDBBtn size="sm" color="red accent-4" className="my-2 mx-0 px-3 py-2 z-depth-0 w-75 font-weight-bold contact_chips"><MDBIcon icon="envelope" />&nbsp;&nbsp;Email</MDBBtn>
        <label className="my-2 mx-0 px-3 py-2 z-depth-0 w-100 font-weight-bold contact_chips text-uppercase "><a href="mailto:pravinpravin9375@gmail.com" target="_blank" className="white-text">pravinpravin9375@gmail.com <MDBIcon icon="external-link-alt" className="float-right blue-text"/></a></label>
    </MDBBtnGroup>

    <MDBBtnGroup className="d-flex">
        <MDBBtn size="sm" color="indigo accent-4" className="my-2 mx-0 px-3 py-2 z-depth-0 w-75 font-weight-bold contact_chips"><MDBIcon icon="mobile-alt" />&nbsp;&nbsp;Mobile</MDBBtn>
        <label className="my-2 mx-0 px-3 py-2 z-depth-0 w-100 font-weight-bold contact_chips text-uppercase ">+49 15163706445</label>
    </MDBBtnGroup>

    <MDBBtnGroup className="d-flex">
        <MDBBtn size="sm" color="green accent-4" className="my-2 mx-0 px-3 py-2 z-depth-0 w-75 font-weight-bold contact_chips"><MDBIcon fab icon="whatsapp" />&nbsp;&nbsp;Whatsapp</MDBBtn>
        <label className="my-2 mx-0 px-3 py-2 z-depth-0 w-100 font-weight-bold contact_chips text-uppercase ">+91 9944562248</label>
    </MDBBtnGroup>

    <MDBBtnGroup className="d-flex">
        <MDBBtn size="sm" color="blue darken-3" className="my-2 mx-0 px-3 py-2 z-depth-0 w-75 font-weight-bold contact_chips"><MDBIcon fab icon="skype" />&nbsp;&nbsp;Skype</MDBBtn>
        <label className="my-2 mx-0 px-3 py-2 z-depth-0 w-100 font-weight-bold contact_chips text-uppercase ">pravinpravin9375</label>
    </MDBBtnGroup>

    <MDBBtnGroup className="d-flex">
        <MDBBtn size="sm" color="orange darken-3" className="my-2 mx-0 px-3 py-2 z-depth-0 w-75 font-weight-bold contact_chips"><MDBIcon fab icon="telegram-plane" />&nbsp;&nbsp;Telegram</MDBBtn>
        <label className="my-2 mx-0 px-3 py-2 z-depth-0 w-100 font-weight-bold contact_chips text-uppercase "><a href="https://t.me/Pravinraw" target="_blank" className="white-text">@Pravinraw <MDBIcon icon="external-link-alt" className="float-right blue-text"/></a></label>
    </MDBBtnGroup>

    <MDBBtnGroup className="d-flex">
        <MDBBtn size="sm" color="black darken-3" className="my-2 mx-0 px-3 py-2 z-depth-0 w-75 font-weight-bold contact_chips"><MDBIcon fab icon="github" />&nbsp;&nbsp;Github</MDBBtn>
        <label className="my-2 mx-0 px-3 py-2 z-depth-0 w-100 font-weight-bold contact_chips text-uppercase "><a href="https://github.com/pravinpaulmony" target="_blank" className="white-text">@PravinPaulmony <MDBIcon icon="external-link-alt" className="float-right blue-text"/></a></label>
    </MDBBtnGroup>

    <MDBBtnGroup className="d-flex">
        <MDBBtn size="sm" color="grey darken-3" className="my-2 mx-0 px-3 py-2 z-depth-0 w-75 font-weight-bold contact_chips"><MDBIcon fab icon="linkedin" />&nbsp;&nbsp;LinkedIn</MDBBtn>
        <label className="my-2 mx-0 px-3 py-2 z-depth-0 w-100 font-weight-bold contact_chips text-uppercase "><a href="https://www.linkedin.com/in/pravin-paulmony/" target="_blank" className="white-text">@PravinPaulmony <MDBIcon icon="external-link-alt" className="float-right  blue-text"/></a></label>
    </MDBBtnGroup>
        
    </MDBListGroupItem>

  </MDBListGroup>

);
};

export default ListGroupPage;