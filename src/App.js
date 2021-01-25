import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/neumorphism-css/dist/css/neumorphism.css';
import AOS from 'aos';
import '../node_modules/neumorphism-css/dist/js/neumorphism';
import '../node_modules/aos/dist/aos.css';
import { Component, React } from 'react';
import { Container } from 'reactstrap';
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import AboutComponent from './components/AboutComponent';
import WorkComponent from './components/WorkComponent';
import TestComponent from './components/TestComponent';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {UIUX} from "./shared/Uiux";
import {LOGOS} from "./shared/Logos";
import {TSHIRTS} from "./shared/Tshirts";
import {POSTERS} from "./shared/Posters";

class App extends Component {
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
          <Route path="/uiux" component={() => <WorkComponent category={UIUX} title="UI/UX Design Projects" /> } />
          <Route path="/logos" component={() => <WorkComponent category={LOGOS} title="Logo Design Projects" /> } />
          <Route path="/posters" component={() => <WorkComponent category={POSTERS} title="Poster Designs" /> } />
          <Route path="/tshirts" component={() => <WorkComponent category={TSHIRTS} title="T-shirt Designs" /> } />
          <Route path="/test" component={TestComponent} />
          <Route component={Error} />
        </Switch>
      </Container>
      <FooterComponent />
      </BrowserRouter>
    );
  }

}

export default App;
