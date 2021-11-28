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
            <Navbar expand="md" className="mt-3" light>
                <NavbarBrand href="/">
                   <img src="img/navLogo.png" height="26px" width="200px" className="d-none d-lg-block" alt="Logo" />
                   <img src="img/logo-icon.png" height="26px" width="26px" alt="Logo" className="d-block d-lg-none" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <ScrollableLink className="nav-link" to="other-designs" smooth={true}>Other Designs</ScrollableLink>
                    </NavItem>
                    <NavItem>
                        <ScrollableLink className="nav-link" to="about" smooth={true}>About Me</ScrollableLink>
                    </NavItem>
                    <NavItem>
                        <ScrollableLink className="nav-link" to="contact" smooth={true}>Contact</ScrollableLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        );
    }
}