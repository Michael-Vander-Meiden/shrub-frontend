import React, { Component }  from 'react';
import Web3 from 'web3';

// class App extends Component {
//   componentWillMount(){
//   this.loadBlockchainData()
//    }

//    async loadBlockchainData() {
//      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
//      const network = await web3.eth.net.getNetworkType()
//      const accounts = await web3.eth.getAccounts()
//      this.setState({ account: accounts[0]})
//    }
//  }

//  constructor(props) {
//    super(props)
//    this.state = {
//      account: '',
//      taskCount: 0,
//      tasks: [],
//      loading: true
//    }

{/* <p1>Account Number: {this.state.account} </p1>  */}

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      }
  }


}

// render(){
//   return(
//     <div>
//       <p1 account={this.state.account}/>
//       {this.state.loading}
//     </div>
//   );
// }

function OAccountSummary() {
  return (
    <>
      <div>
          <h1>OAccount Summary</h1>
          {/* <p1 id="account">Account Number: {this.state.account} </p1>  */}
          <p1 id="account"> Account Number: this.state.account </p1>
          <br/>  
          
          <p2>SHRB Number</p2>
          <br/>  
          <p2>Eth Number</p2>
          <br/>  

      </div>

    </>
  );
};

export default OAccountSummary;