import BuyCover from "./components/BuyCover";
import PolicyDetails from "./components/PolicyDetails";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  
  
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/policies">
              <BuyCover />
            </Route>
            <Route path="/policies/:id">
              <PolicyDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
