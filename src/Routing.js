
import React from "react";
import './styles/main.scss'
import './styles/animation.scss'
import './styles/responsive.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeMain from './home/HomeMain'
import Portfolio from './portfolio/Portfolio'
import SetUp from './setup/SetUp';
import About from './about-me/About';

function Routing() {
  return (
    
      <Router>
        <Switch>
          <Route path="/" exact component={HomeMain}/>
          <Route path="/portfolio"  component={Portfolio}/>
          <Route path="/setup" component={SetUp}/>
          <Route path="/about-me" component={About}/>
        </Switch>
      </Router>
    
  )
}


export default Routing