import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        const view = {background: 'url("https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg")no-repeat center center', backgroundSize: 'cover', height: '100vh'}
        return (
            <div>
                <header>
                    <Router>
                        <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
                            <NavbarBrand href="/">
                                <strong>Anish Lawrence</strong>
                            </NavbarBrand>
                            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                            <Collapse isOpen = { this.state.collapse } navbar>
                                <NavbarNav left>
                                    <NavItem active>
                                        <NavLink to="#">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Link</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Profile</NavLink>
                                    </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                    <navItem>
                                        <NavLink to="#"><Fa icon="facebook"/></NavLink>
                                    </navItem>
                                    <navItem>
                                        <NavLink to="#"><Fa icon="github"/></NavLink>
                                    </navItem>
                                    <navItem>
                                        <NavLink to="#"><Fa icon="linkedin"/></NavLink>
                                    </navItem>
                                </NavbarNav>
                            </Collapse>
                        </Navbar>
                    </Router>

                    <div style={view}>

                        <Mask overlay="purple-light" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
                            <h2 className="fontsize1">Hi, I'm Anish</h2>
                            <h5 className="fontsize2">WELCOME TO MY PORTFOLIO</h5>
                            <p className="fontsize3">Web Developer/Hacker</p><br/>
                            <p></p>
                        </Mask>
                    </div>
                </header>
                <Container className="text-center my-5">
                    <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Container>
            </div>
        );
    }
}

export default Navigation;