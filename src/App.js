import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import React, {useState, useEffect} from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import {HashLoader} from 'react-spinners'
import ScrollToTop from 'react-scroll-to-top';

export default function App() {

    const [loading, setLoading] = useState(false);

    useEffect( () => {
      setLoading(true);
      setTimeout( () => {
        setLoading(false)
      },2000)
    },[])
    return (
      <Container style={{padding:"0", overflowX:"hidden"}} fluid>
        <ScrollToTop smooth />
        <BrowserRouter style={{position: 'relative', minHeight: "100vh"}}>
        <img src="/img/background.jpg" className="header-img d-none d-xl-block" alt="side-elements" />
        {
          loading ?
          <div className="loading-container">
            <HashLoader color={"#FEC86E"} loading={loading} size={50} margin={5} />
          </div>
          :
          <React.Fragment>
          <Container style={{maxWidth:"85%"}}>
            <Home />
          </Container>
          <Footer />
          </React.Fragment>
        }
        </BrowserRouter>
      </Container>
    );
  }
