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
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import {UIUX} from "./shared/Uiux";
import {LOGOS} from "./shared/Logos";
import {TSHIRTS} from "./shared/Tshirts";
import {POSTERS} from "./shared/Posters";
import {PROJECTS} from "./shared/Projects";

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
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/uiux" component={() => <WorkComponent category={UIUX} title="UI/UX Design Projects" /> } />
          <Route exact path="/logos" component={() => <WorkComponent category={LOGOS} title="Logo Design Projects" /> } />
          <Route exact path="/posters" component={() => <WorkComponent category={POSTERS} title="Poster Designs" /> } />
          <Route exact path="/tshirts" component={() => <WorkComponent category={TSHIRTS} title="T-shirt Designs" /> } />
          <Route exact path="/projects" component={() => <WorkComponent category={PROJECTS} title="Development & UI/UX Projects" /> } />
          <Redirect to="/" />
        </Switch>
      </Container>
      <FooterComponent />
      </BrowserRouter>
    );
  }

}

export default App;
