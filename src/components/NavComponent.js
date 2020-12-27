import {Component} from 'react';
import {Navbar, NavbarBrand, NavItem, Collapse, Nav, NavbarToggler} from 'reactstrap';
import {Link as NormalLink} from 'react-router-dom';
import {Link as ScrollableLink} from 'react-scroll';

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
                <NavbarBrand>
                   <NormalLink to="/"><img src="img/DMNewLogo.png" height="36px" width="50px" alt="Logo" /></NormalLink>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isOpen} navbar>
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