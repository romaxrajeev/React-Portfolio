import {Component} from 'react';
import {Navbar, NavbarBrand, NavItem, Collapse, Nav, NavbarToggler} from 'reactstrap';
import {Link as ScrollableLink} from 'react-scroll';

export default class NavBar extends Component{
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
            <Navbar expand="md" className="mt-3" dark>
                <NavbarBrand href="/">
                   <img src="img/RomaxRajeev.svg" height="26px" width="200px" className="d-none d-lg-block" alt="Logo" />
                   <img src="img/RomaxRajeevIcon.svg" height="26px" width="26px" alt="Logo" className="d-block d-lg-none" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar className="ml-lg-auto mt-5 mt-md-0 mr-auto mr-md-0">
                    <NavItem className="mr-auto ml-auto mr-md-0 ml-md-0">
                        <ScrollableLink className="nav-link" to="other-designs" smooth={true}>Other Designs</ScrollableLink>
                    </NavItem>
                    <NavItem className="mr-auto ml-auto mr-md-0 ml-md-0">
                        <ScrollableLink className="nav-link" to="about" smooth={true}>About Me</ScrollableLink>
                    </NavItem>
                    <NavItem className="mr-auto ml-auto mr-md-0 ml-md-0">
                        <ScrollableLink className="nav-link" to="contact" smooth={true}>Contact</ScrollableLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        );
    }
}