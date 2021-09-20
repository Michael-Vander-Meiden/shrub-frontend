import React, { Component }  from 'react';
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

{/* <p1>Account Number: {this.state.account} </p1>  */}


function OAccountSummary() {
  return (
    <>
      <div>
          <h1>OAccount Summary</h1>
          <p1>Account Number: this.state.account </p1> 
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