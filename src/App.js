import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/neumorphism-css/dist/css/neumorphism.css';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import { Component, React} from 'react';
import { Container } from 'reactstrap';
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import LogoComponent from './components/WorkComponent';
import UiuxComponent from './components/UiuxComponent';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import {UIUX, POSTERS, PROJECTS, LOGOS} from './shared/Data';
import PosterComponent from './components/PosterComponent';


class App extends Component {
  componentDidMount(){
    AOS.init();
  }

  render(){
    return (
      <BrowserRouter style={{position: 'relative', minHeight: "100vh"}}>
        <img src="/img/header.png" className="header-img d-none d-md-block" alt="side-elements" />
        <Container style={{position: "absolute", top: 0, left: 0, right: 0}}>
          <NavComponent />
          <Switch>
            <Route path="/" component={HomeComponent} exact />
            <Route path="/about" component={AboutComponent} />
            <Route path="/uiux" component={ () => <UiuxComponent category={UIUX} /> } />
            <Route path="/logos" component={() => <LogoComponent category={LOGOS} title="Logo Design Projects" /> } />
            <Route path="/posters" component={() => <PosterComponent work={POSTERS} /> } />
            <Route path="/projects" component={() => <LogoComponent category={PROJECTS} title="Development Projects" /> } />
            <Redirect to="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }

}

export default App;
