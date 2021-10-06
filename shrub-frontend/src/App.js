import PolicyList from "./components/PolicyList";
import PolicyDetails from "./components/PolicyDetails";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import React, { Component, } from 'react'
import Web3 from 'web3'
// import SimpleStorageContract from"./contracts/SimpleStorage.sol"

// For button:
import {useWallet, UseWalletProvider} from 'use-wallet'

class App extends Component {
  // state = {storageValue: 0, web3: null, contract: null};

  // componentDidMount = async() =>{
  //   try{
  //     if(window.ethereum){
  //       Web3 = newWeb3(window.ethereum);
  //       await ethereum.enable();
  //       //can use web3 with metamask

  //     } else if(window.web3){
  //       Web3 = new Web3(window.web3.currentProvider);
  //     }
  //       //can use web3 or metamask
  //   }
  // }


  // for wallet connection button:


    async componentWillMount() {
    // this.loadBlockchainData()
      await this.loadWeb3()
      console.log(window.web3)
      await this.loadBlockchainData()
  }

  async loadWeb3(){
    if (window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detercted. You should consider trying Metamask!')
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3
    // Load Account
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    console.log(accounts)
    const balances = await web3.eth.getBalance(accounts[0])
    console.log(balances)
    
    const etherValue = web3.utils.fromWei(balances,'ether')
    console.log(etherValue);
    this.setState({balance: etherValue})
  }

  // async loadBlockchainData() {
  //   // await ethereum.enable()
  //   const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
  //   const network = await web3.eth.net.getNetworkType()
  //   console.log("network:", network)
  //   const accounts = web3.eth.getAccounts()
  //   console.log("Accounts:", accounts[0]);
  //   var account0;
  //   web3.eth.getAccounts().then(function(result){
  //     account0 = result[0];
  //   })    
  //   console.log("Account0:",account0)
  //   this.setState({ account: accounts[1] })
    
  // }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      balance: 0,
    }

  }


  render() {
    return (
      <div>
        <div>
          <div >
            <h1>Account Summary</h1>
            <h2>Your Account: {this.state.account} </h2>
            <h2>Your Balance: {this.state.balance} ETH</h2>
            {/* <main role="main" className="col-lg-12 d-flex justify-content-center">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <TodoList
                  tasks={this.state.tasks}
                  createTask={this.createTask}
                  toggleCompleted={this.toggleCompleted} />
              }
            </main> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
  
  
//   return (
//     <Router>
//       <div className="App">
//         <div className="content">
//           <Switch>
//             <Route exact path="/policies">
//               <PolicyList />
//             </Route>
//             <Route path="/policies/:id">
//               <PolicyDetails />
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>

//   );
// }

// export default App;
