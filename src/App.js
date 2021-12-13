import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import {GridLoader} from 'react-spinners'
import Bounce from 'react-reveal';

export default function App() {

    const [loading, setLoading] = useState(false);

    useEffect( () => {
      setLoading(true);
      setTimeout( () => {
        setLoading(false)
      },2000)
    },[])
    return (
      <React.Fragment>
        <BrowserRouter style={{position: 'relative', minHeight: "100vh"}}>
        <img src="/img/background.jpg" className="header-img d-none d-xl-block" alt="side-elements" />
        {
          loading ?
          <div className="loading-container">
            <GridLoader color={"#FEC86E"} loading={loading} size={15} margin={5} />
          </div>
          :
          <Container style={{maxWidth:"85%"}}>
            <Home />
            <Footer />
          </Container>
        }
        </BrowserRouter>
      </React.Fragment>
    );
  }
