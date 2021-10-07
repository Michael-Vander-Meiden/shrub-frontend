import PolicyList from "./components/PolicyList";
import AccountSummary from "./components/AccountSummary";
import HomePage from "./components/HomePage"
import PolicyDetails from "./components/PolicyDetails";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useEffect} from "react";
import Web3 from 'web3';
import GlobalStyle from './globalStyles';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <div className="App">
      <Router>
      <GlobalStyle />
        <ScrollToTop />
        <Navbar/>
        <div className="content">
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
        <Switch>
            <Route exact path="/AccountSummary">
              <AccountSummary />
            </Route>
            <Route exact path="/policies">
              <PolicyList />
            </Route>
            <Route path="/policies/:policy_id">
              <PolicyDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      
    </Router>
    </div>
  );
}

export default App;
