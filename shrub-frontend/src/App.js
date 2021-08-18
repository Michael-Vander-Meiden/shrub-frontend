import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import BuyCover from "./components/BuyCover"
import Home from './components/Home';

function App() {

  return(
    <Router>       
      <Navbar />
    <div className="container-fluid">
      <Switch>
        <Route path="/buycover" component={BuyCover}/>
        <Route path="/" exact component={Home}/>
      </Switch>

    </div>
    </Router>
  )
}

export default App;
