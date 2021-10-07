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

  useEffect(() => {

    async function loadWeb3() {
      if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
      } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
      } else {
          console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
  }

    loadWeb3();
    // window.web3.eth.getAccounts().then( function (result) {  console.log(result[0]) });

  }, []);

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
