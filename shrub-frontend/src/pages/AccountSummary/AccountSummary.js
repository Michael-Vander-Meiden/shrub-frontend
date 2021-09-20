import React, { Component } from 'react';
import { InfoSection } from '../../component';
import { homeObjOne, homeObjTwo } from './Data';
// import Web3 from 'web3'


// class App extends Component {
//   componentWillMount(){
//     this.loadBlockchainData()
//   }

//   async loadBlockchainData() {
//     const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
//     const network = await web3.eth.net.getNetworkType()
//     const accounts = await web3.eth.getAccounts()
//     this.setState({ account: accounts[0]})
//   }
// }

// constructor(props) {
//   super(props)
//   this.state = {
//     account: '',
//     taskCount: 0,
//     tasks: [],
//     loading: true
//   }

function AccountSummary() {
  return (
    <>
    {/* <div className="container">
      <h1> Testnet web3</h1>
      <p> Your Account: {this.state.account}</p>
    </div> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default AccountSummary;