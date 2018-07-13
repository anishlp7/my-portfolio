import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, Mask,Row, Col, Card, CardBody, Fa, Button, Input , View,Progress } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navigation.css';
import anish from './anish.jpg';
import blockchain from './blockchain1.jpg';
import smartbrain from './smartbrain.png';
import pas from './pas.png'

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
        const view = {background: 'url("http://getwallpapers.com/wallpaper/full/e/f/8/8234.jpg")no-repeat center center', backgroundSize: 'cover', height: '100vh'}
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
                                        <NavLink to="#">Skills</NavLink>
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
                                        <NavLink to="#"><Fa icon="linkedin"/></NavLink>
                                    </navItem>
                                    <navItem>
                                        <NavLink to="#"><Fa icon="github"/></NavLink>
                                    </navItem>
                                </NavbarNav>
                            </Collapse>
                        </Navbar>
                    </Router>

                    <div style={view}>

                        <Mask  style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
                            <h2 className="fontsize1">"Learn To Code"</h2>
                            <h5 className="fontsize2">Welcome to my portfolio</h5>
                            <p className="fontsize3"></p><br/>
                            <p></p>
                        </Mask>
                    </div>
                </header>
                <h1 className="fontsize3">Skills</h1>
                <div className="contactme1">
                    <Row>
                        <Col lg="6">
                          <h6 className="font-weight-bold mb-3 p-0"><strong>HTML &amp; CSS</strong></h6>
                          <Progress value={50} color="success" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>React JS</strong></h6>
                          <Progress value={50} color="info" animated></Progress><br/>
                              <h6 className="font-weight-bold mb-3 p-0"><strong>Node JS</strong></h6>
                          <Progress value={50} color="warning" animated></Progress><br/>
                              <h6 className="font-weight-bold mb-3 p-0"><strong>PHP &amp; MySQL</strong></h6>
                          <Progress value={50} color="danger" animated></Progress><br/>
                            
                            

                        </Col>
                        <Col lg="6 ">
                               <h6 className="font-weight-bold mb-3 p-0"><strong>Javascript</strong></h6>
                          <Progress value={50} color="danger" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>BootStrap</strong></h6>
                          <Progress value={50} color="warning" animated></Progress><br/>
                              <h6 className="font-weight-bold mb-3 p-0"><strong>PostgreSQL</strong></h6>
                          <Progress value={50} color="info" animated></Progress><br/>
                               <h6 className="font-weight-bold mb-3 p-0"><strong>Ethical Hacking</strong></h6>
                          <Progress value={50} color="success" animated></Progress>
                        </Col>
                    </Row>
                </div>
                <h1 className="fontsize3">Projects</h1>
                <div className="contactme1">
                    <Row>
                        <Col lg="5">
                            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img className="img-fluid" src={smartbrain} alt="Sample"/>
                                <a><Mask overlay="white-slight"/></a>
                            </View>
                        </Col>
                        <Col lg="7">
                            <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="fa fa-archive" className="pr-2"></Fa>1</h6></a>
                            <h3 className="font-weight-bold mb-3 p-0"><strong>Smart Brain- Face Recognition</strong></h3>
                            <p>The following project is originally designed by Andrei Neagoie.Later, I just recreated by seeing his tutorials which he was uploaded on Udemy.</p>
                            <p>The whole project is bulit by React</p>
                            <p><a><strong>Duration:</strong></a> 3 Months</p>
                        </Col>
                    </Row>
                    <hr className="my-5"/>
                    <Row>
                        <Col lg="7">
                            <a className="pink-text">
                                <h6 className="font-weight-bold mb-3">
                                    <Fa icon="fa fa-archive" className="pr-2"></Fa>2
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0"><strong>Background Color Generator</strong></h3>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            <p><a><strong>Duration:</strong></a> 1 Day</p>
                        </Col>
                        <Col lg="5">
                            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample "/>
                                <a><Mask overlay="white-slight"/></a>
                            </View>
                        </Col>
                    </Row>
                    <hr className="my-5"/>
                    <Row>
                        <Col lg="5">
                            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img className="img-fluid" src={pas} alt="Sample"/>
                                <a><Mask overlay="white-slight"/></a>
                            </View>
                        </Col>
                        <Col lg="7">
                            <a className="indigo-text"><h6 className="font-weight-bold mb-3"><Fa icon="fa fa-archive" className="pr-2"></Fa>3</h6></a>
                            <h3 className="font-weight-bold mb-3 p-0"><strong>Placement Automation System</strong></h3>
                            <p>The aim of the project is to build a Placement Automation System that will facilitate the interaction between college students and the placement cell.</p>
                            <p> The system will maintain student information such as grades, courses taken etc.. </p>
                            <p>All this student information will be uploaded by the student and will be used by the placement cell.
                            </p>
                            <p>My Final Year College Project</p>
                            <p><a><strong>Duration:</strong></a> 6 Months</p>
                        </Col>
                    </Row>
                </div>
                <h1 className="fontsize3">About me</h1> 
                <div className="contactme1">
                    <Row>
                        <Col lg="7">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </Col>
                        <Col lg="5">
                            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img className="img-fluid" src={anish} alt="Sample "/>
                                <a><Mask overlay="white-slight"/></a>
                            </View>
                        </Col>
                    </Row>
                </div>
                <Container>
                    <section className="contact-section my-5">
                        <Card>
                            <Row>
                                <Col lg="8">
                                    <CardBody className="form">
                                        <h3 className="mt-4">
                                            <Fa icon="envelope" className="pr-2"/>Contact me:
                                        </h3>
                                        <Row>
                                            <Col md="6">
                                                <div className="md-form mb-0">
                                                    <Input type="text" id="form-contact-name" label="Your name"/>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="md-form mb-0">
                                                    <Input type="text" id="form-contact-email" label="Your email"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <div className="md-form mb-0">
                                                    <Input type="text" id="form-contact-phone" label="Your phone"/>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="md-form mb-0">
                                                    <Input type="text" id="form-contact-company" label="Your company"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <div className="md-form mb-0">
                                                    <Input type="textarea" id="form-contact-message" label="Your message"/>
                                                    <Button tag="a" floating color="blue" size="lg">
                                                        <Fa icon="send-o"/>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Col>
                                <Col lg="4">
                                    <CardBody className="contact text-center h-100 white-text contactme">
                                        <h3 className="my-4 pb-2">Contact information</h3>
                                        <ul className="text-lg-left list-unstyled ml-4">
                                            <li>
                                                <p><Fa icon="map-marker" className="pr-2"/>Tamil Nadu, 629003 India</p>
                                            </li>
                                            <li>
                                                <p><Fa icon="phone" className="pr-2"/>+91 9043 57 1929</p>
                                            </li>
                                            <li>
                                                <p><Fa icon="envelope" className="pr-2"/>anishlp7@gmail.com</p>
                                            </li>
                                        </ul>
                                        <hr className="hr-light my-4"/>
                                        <ul className="list-inline text-center list-unstyled">
                                            <li className="list-inline-item">
                                                <a className="p-2 fa-lg w-ic">
                                                    <Fa icon="facebook"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="p-2 fa-lg w-ic">
                                                    <Fa icon="linkedin"/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="p-2 fa-lg w-ic">
                                                    <Fa icon="github"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                </Container>

            </div>
        );
    }
}

export default Navigation;