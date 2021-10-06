import React, { Component, useEffect, useState }  from 'react';
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

// class App extends Component {

//   async componentWillMount() {
//     await this.loadWeb3()
//     await this.loadBlockchainData()
//   }

//   async loadWeb3() {
//     if (window.ethereum) {
//       window.web3 = new Web3(window.ethereum)
//       await window.ethereum.enable()
//     }
//     else if (window.web3) {
//       window.web3 = new Web3(window.web3.currentProvider)
//     }
//     else {
//       window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
//     }
//   }

//   async loadBlockchainData() {
//     const web3 = window.web3
//     // Load account
//     const accounts = await web3.eth.getAccounts()
//     this.setState({ account: accounts[0] })
//     // Network ID
//     const networkId = await web3.eth.net.getId()
    
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       account: '',
//       }
//   }


// }

// render(){
//   return(
//     <div>
//       <p1 account={this.state.account}/>
//       {this.state.loading}
//     </div>
//   );
// }

const OAccountSummary = () => {

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
    // loadBlockchainData();
    console.log("This is a refresh")
    window.web3.eth.getAccounts().then( function (result) {  console.log(result[0]) });
  
  }, []);

  // async function componentWillMount() {
  //   // this.loadBlockchainData()
  //     await this.loadBlockchainData()
  // }

  // async function loadBlockchainData(){
  //   const web3 = window.web3
  //   // Load Account
  //   const accounts = await web3.eth.getAccounts()
  //   // this.setState({account: accounts[0]})
  //   console.log("This is a new Test YYY")
  //   console.log(accounts)
  //   const balances = await web3.eth.getBalance(accounts[0])
  //   console.log(balances)
    
  //   const etherValue = web3.utils.fromWei(balances,'ether')
  //   console.log(etherValue);
  //   // this.setState({balance: etherValue})
  // }

  const [userAddress, setAddress] = useState("");
  window.web3.eth.getAccounts().then( function (result) {  setAddress(result[0]) });
  console.log(userAddress)

  const [userBalance, setBalance] = useState(0.0);
  window.web3.eth.getBalance("0x760ec21F3a628f03ae4939E2c7820Fdf02d08131")
.then(function(result){setBalance(window.web3.utils.fromWei(result,'ether'))});
console.log(userBalance)
  


  return (
    <>
      <div>
          <h1>OAccount Summary</h1>
          {/* <p1 id="account">Account Number: {this.state.account} </p1>  */}
          <p1 id="account"> Account Number: {userAddress} </p1>
          <br/>  
          
          <p2>SHRB Number</p2>
          <br/>  
          <p2>Eth Number: {userBalance}</p2>
          <br/>  

      </div>

    </>
  );
};

export default OAccountSummary;