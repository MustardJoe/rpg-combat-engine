import React from 'react';
import LayoutComp from '../components/layout/LayoutComp';
import About from '../components/about/About';
/*import EngineWrapper from '../services/combatengine/EngineWrapper';*/
import grindotronlogo from '../assets/grindotronlogo.png';
import styles from './app.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <p className={styles.logop}>
        <a href="./">
          <img src={grindotronlogo} alt="pixelated logo of grind-o-tron logo"
            className={styles.logo}></img>
        </a>
      </p>

      <Router>
        <nav className={styles.inNav}>
          <Link className={styles.link} to="/">A turn-based combat engine</Link>
          {' || '}
          <Link className={styles.link} to="/about">About</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={LayoutComp} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}
