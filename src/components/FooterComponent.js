import { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <Navbar className="footerbackground p-0" sticky="top" expand="md">
                <div className="container">
                    <Nav navbar className="col-sm-2">
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-3 ml-lg-5 mx-auto text-center mb-4 mb-sm-0" to="/about">ABOUT</NavLink>
                        </NavItem>
                    </Nav>
                    <div className="col-sm-8 d-flex justify-content-center">
                        <a className="btn btn-social-icon btn-instagram sociallink mr-3 mr-md-4" href="http://instagram.com/" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook sociallink mr-3 mr-md-4" href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter sociallink mr-3 mr-md-4" href="http://twitter.com/" target="_blank"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google sociallink mr-3 mr-md-4" href="http://youtube.com/" target="_blank"><i className="fa fa-youtube" /></a> 
                    </div>
                    <Nav navbar className="col-sm-2">
                        <NavItem>
                            <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-3 ml-lg-5 mx-auto text-center mt-4 mt-sm-0" to="/contactus">CONTACT US</NavLink>
                        </NavItem>
                    </Nav>                 
                </div>
            </Navbar>
        </div>
    )
}

export default Footer
