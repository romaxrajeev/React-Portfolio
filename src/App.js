import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { Component, React } from 'react';
import { Container } from 'reactstrap';
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import AboutComponent from './components/AboutComponent';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    AOS.init();
  }
  
  render(){
    return (
      <BrowserRouter>
      <Container>
        <NavComponent />
        <Switch>
          <Route path="/" component={HomeComponent} exact />
          <Route path="/about" component={AboutComponent} />
          <Route component={Error}/>
        </Switch>
      </Container>
      <FooterComponent />
      </BrowserRouter>
    );
  }

}

export default App;
