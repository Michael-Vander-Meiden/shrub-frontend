import PolicyList from "./components/PolicyList";
import PolicyDetails from "./components/PolicyDetails";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useEffect} from "react";
import Web3 from 'web3';

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
    window.web3.eth.getAccounts().then( function (result) {  console.log(result[0]) });

  }, []);

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/policies">
              <PolicyList />
            </Route>
            <Route path="/policies/:policy_id">
              <PolicyDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
