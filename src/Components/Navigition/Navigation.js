import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler,
 Collapse, NavItem, NavLink, Container, Mask,Row, Col, Card, CardBody, Fa,
  View,Progress , Footer} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navigation.css';
import anish from './anish.jpg';
import robofriends from './robofriends.png'
import smartbrain from './smartbrain.png';
import pas from './pas.png';
import bgcolor from './bgcolor.png';

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
                                <strong>Anish L</strong>
                            </NavbarBrand>
                            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                            <Collapse isOpen = { this.state.collapse } navbar>
                                <NavbarNav left>
                                    <NavItem active>
                                         <a href="#Home" className="navcolor">Home</a>
                                    </NavItem>
                                    <NavItem >
                                     <a href="#Skills" className="navcolor">Skills</a>          
                                    </NavItem>
                                    <NavItem>
                                     <a href="#Projects" className="navcolor">Projects</a>
                                    </NavItem>
                                    <NavItem>
                                         <a href="#Aboutme" className="navcolor">About me</a>
                                    </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                    <navItem>
                                        <NavLink to="#">  <li className="list-inline-item">
                                            <a className="p-2 fa-lg w-ic bgcolor" href='https://www.facebook.com/anish.lawrence.31'>
                                                <i class="fab fa-facebook-square"></i>
                                            </a>
                                            </li></NavLink>
                                    </navItem>
                                    <navItem>
                                        <NavLink to="#"><li className="list-inline-item">
                                            <a className="p-2 fa-lg w-ic bgcolor" href='https://www.linkedin.com/in/anish-lawrence-434ba4139/'>
                                               <i class="fab fa-linkedin"></i>
                                            </a>
                                            </li></NavLink>
                                    </navItem>
                                    <navItem>
                                        <NavLink to="#"><li className="list-inline-item">
                                            <a className="p-2 fa-lg w-ic bgcolor" href='https://github.com/anishlp7'>
                                               <i class="fab fa-github"></i>
                                            </a>
                                            </li></NavLink>
                                    </navItem>
                                </NavbarNav>
                            </Collapse>
                        </Navbar>
                    </Router>

                    <div style={view} id="Home">

                        <Mask  style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
                            <h2 className="fontsize1">"Learn To Code"</h2>
                            <h5 className="fontsize2">Welcome to my portfolio</h5>
                            <p className="fontsize3"></p><br/>
                            <p></p>
                        </Mask>
                    </div>
                </header>
                <h1 className="fontsize3" id="Skills" name="Skills">Skills</h1>
                <div className="contactme1">
                    <Row>
                        <Col lg="6">
                            <h6 className="font-weight-bold mb-3 p-0"><strong>HTML &amp; CSS</strong></h6>
                            <Progress value={50} color="success" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>React JS/Redux</strong></h6>
                            <Progress value={50} color="info" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>Node JS</strong></h6>
                            <Progress value={50} color="warning" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>PHP &amp; MySQL</strong></h6>
                            <Progress value={50} color="danger" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>Redis</strong></h6>
                            <Progress value={30} color="danger" animated></Progress><br/>



                        </Col>
                        <Col lg="6 ">
                            <h6 className="font-weight-bold mb-3 p-0"><strong>Javascript</strong></h6>
                            <Progress value={50} color="danger" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>BootStrap</strong></h6>
                            <Progress value={50} color="warning" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>PostgreSQL</strong></h6>
                            <Progress value={50} color="info" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>Ethical Hacking</strong></h6>
                            <Progress value={50} color="success" animated></Progress><br/>
                            <h6 className="font-weight-bold mb-3 p-0"><strong>Jest(Testing)</strong></h6>
                            <Progress value={30} color="danger" animated></Progress><br/>
                        </Col>
                    </Row>
                </div>
                <div id="Projects">
                    <h1 className="fontsize3"> Projects</h1>
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
                            <p>The project is used to detect the faces of the persons when we give an url of an image.And based on how many entries he has given by that we give rank for that person.</p>
                            <p>The whole project is bulit by React.</p>
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
                            <h3 className="font-weight-bold mb-3 p-0"><strong>Robofriends</strong></h3>
                            <p>This project is an simple project which is used to fetch data from an JSON file.</p>
                            <p>The Whole project is built by using React & Redux.</p>
                            <p><a><strong>Duration:</strong></a> 15 Days</p>
                        </Col>
                        <Col lg="5">
                            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img className="img-fluid" src={robofriends} alt="Sample "/>
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
                    <hr className="my-5"/>
                    <Row>
                        <Col lg="7">
                            <a className="pink-text">
                                <h6 className="font-weight-bold mb-3">
                                    <Fa icon="fa fa-archive" className="pr-2"></Fa>4
                                </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0"><strong>Background Color Generator</strong></h3>
                            <p>This project is used to give an linear gradient background color which we can later use it on any website as an background color.</p>
                            <p>The Whole project is built by using Javascript.</p>
                            <p><a><strong>Duration:</strong></a> 3 Days</p>
                        </Col>
                        <Col lg="5">
                            <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img className="img-fluid" src={bgcolor} alt="Sample "/>
                                <a><Mask overlay="white-slight"/></a>
                            </View>
                        </Col>
                    </Row>
                </div>
                </div>
            
                <h1 className="fontsize3" id="Aboutme">About me</h1> 
                <div className="contactme1">
                    <Row>
                        <Col lg="7">
                            <p className="textpadding">"I am beginner in learning web-development and ethical Hacking.And still seeking knowledge by watching and practising the tutorials.I am not an experienced candidate.I am just starting my career though i have learned more fundamentals skills which were in my skills section and everything which were in my skills sections are self-learned.And i like to finalize one thing.There is no shortages of developers. However, there is a shortage of good, talented, egoless, developers with ambition to learn along with development of the company."</p>

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
                                 <CardBody className="contact text-center h-100 white-text contactme" >
                                        <h3 className="my-4 pb-2">Contact information</h3>
                                        <ul className="text-lg-left list-unstyled ml-4">
                                            <li>
                                                <p><Fa icon="map-marker" className="pr-2"/>Tamil Nadu, 629003, India</p>
                                            </li>
                                            <li>
                                                <p><Fa icon="phone" className="pr-2"/>+91 9043 57 1929 / 7010 44 9412</p>
                                            </li>
                                            <li>
                                                <p><Fa icon="envelope" className="pr-2"/>anishlp7@gmail.com</p>
                                            </li>
                                        </ul>
                                        <hr className="hr-light my-4"/>
                                        <ul className="list-inline text-center list-unstyled">
                                            <li className="list-inline-item">
                                                <a className="p-2 fa-lg w-ic bgcolor" href='https://www.facebook.com/anish.lawrence.31'>
                                                    <i class="fab fa-facebook-square"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="p-2 fa-lg w-ic bgcolor" href='https://www.linkedin.com/in/anish-lawrence-434ba4139/'>
                                                   <i class="fab fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a className="p-2 fa-lg w-ic bgcolor" href='https://github.com/anishlp7'>
                                                    <i class="fab fa-github"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </CardBody>
                        </Card>
                    </section>
                </Container>



                <Footer color="black" className="font-small pt-0">
                    <div className="footer-copyright text-center py-3">
                        <Container fluid  color='white'>
                            &copy; {(new Date().getFullYear())} Copyright: <a > anishlp7@gmail.com</a>
                        </Container>
                    </div>
                </Footer>
            </div>
        );
    }
}

export default Navigation;