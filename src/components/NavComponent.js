import {Component} from 'react';
import {Navbar, NavbarBrand, NavItem, Collapse, Nav, NavbarToggler} from 'reactstrap';
import {Link as NormalLink} from 'react-router-dom';
import {Link as ScrollableLink} from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {Row,Col} from 'reactstrap';

class NavBarComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <Navbar expand="md" className="mt-3" light>
                <NavbarBrand href="/">
                   <img src="img/DMNew.png" height="36px" width="50px" alt="Logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Row className="ml-md-4 mr-md-auto ml-auto mr-auto mt-4 mt-md-0">
                    <Col xs="12">
                    <a href="https://www.facebook.com/romax.rajeev/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} color="#9e9e9e" size="1x" /></a>&emsp;&emsp;
                    <a href="https://www.instagram.com/desmax_designs/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} color="#9e9e9e" size="1x" /></a>&emsp;&emsp;
                    <a href="https://twitter.com/romeo611199" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} color="#9e9e9e" size="1x" /></a>&emsp;&emsp;
                    <a href="https://www.linkedin.com/in/romax-rajeev/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} color="#9e9e9e" size="1x" /></a>&emsp;&emsp;
                    </Col>
                </Row>
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <NormalLink className="nav-link" to="/about" style={{cursor: "pointer"}}>About</NormalLink>
                    </NavItem>
                    <NavItem>
                        <ScrollableLink className="nav-link" to="contact" smooth={true} style={{cursor: "pointer"}}>Contact</ScrollableLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBarComponent;