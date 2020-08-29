import React from 'react';
import './App.scss';
import Layout from "../src/Components/Layout/Layout"
import {Switch, Route} from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import Projects from '../src/Components/Projects/Projects'
import Contact from '../src/Components/Contact/Contact'

function App(props) {
  console.dir(props);
  return (
    <div className="App">
      <Layout>
          <Switch>
            <Route path="/About" component={About}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/Projects" component={Projects}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
