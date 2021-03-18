import { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [isNavOpen, setNavOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.username);
        if (e === null) {
            alert(`Please enter all fields before clicking login.`);
            return;
        }
        alert(`Username: ${e.username} Password: ${e.password} Remember: ${e.remember}`);
        toggleModal();
    }

    return (
        <div id="header">
            <Navbar className="headerbackground p-0 mx-auto " sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto navtitle ml-2" href="/">CRYPTOTRADER</NavbarBrand>
                    <NavbarToggler onClick={toggleNav} className="mr-2" />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar className="ml-auto text-center">
                            <NavItem>
                                <NavLink activeClassName="navactive" className="nav-link navstyle" to="/home">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/software">SOFTWARE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/about">ABOUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="navactive" className="nav-link navstyle ml-md-2 ml-xl-5" to="/contactus">CONTACT US</NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text mx-auto d-flex justify-content-center">
                            <Button outline onClick={toggleModal}>
                                LOGIN
                            </Button>
                        </span>
                    </Collapse>
                </div>
            </Navbar>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal} className="lightgraybackground darkgraytext">Login</ModalHeader>
                <ModalBody className="darkredbackground">
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username" className="brightgraytext">Username</Label>
                            <Input type="text" id="username" name="username" 
                                innerRef={input => input.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password" className="brightgraytext">Password</Label>
                            <Input type="password" id="password" name="password" 
                                innerRef={input => input.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check className="brightgraytext">
                                <Input type="checkbox" name="remember"
                                    innerRef={input => input.remember = input} />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary" className="mt-3">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Header;