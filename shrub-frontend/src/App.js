import Navbar from "./components/Navbar";
import About from "./components/About";
import BuyCover from "./components/BuyCover";
import Home from "./components/Home";
import Steak from "./components/Steak";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      
        
        <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/buycover" component={BuyCover}/>
          <Route path="/" exact component={Home}/>
          <Route path="/steak" component={Steak}/>
        </Switch>

        {/* <div className="container-fluid">
          <h1>Hello</h1>  
        </div> */}

      </div>
    </Router>
  );
}

export default App;
