import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Cover from "./component/Cover";
import Stake from "./component/Stake";
import Swap from "./component/Swap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> 
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cover" component={Cover}>
            <Cover />
          </Route>
          <Route path="/swap" component={Swap}>
            <Swap />
          </Route>
          <Route path="/stake" component={Stake}>
            <Stake />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
