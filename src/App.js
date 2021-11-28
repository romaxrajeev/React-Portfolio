import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';

export default class App extends Component {
  componentDidMount(){
    AOS.init();
  }

  render(){
    return (
      <BrowserRouter style={{position: 'relative', minHeight: "100vh"}}>
        <img src="/img/background.png" className="header-img d-none d-md-block" alt="side-elements" />
        <Container style={{maxWidth:"85%"}}>
          <Home />
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }

}
