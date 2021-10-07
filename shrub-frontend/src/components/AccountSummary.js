import React, { Component, useEffect, useState }  from 'react';
import Web3 from 'web3';


const AccountSummary = () => {

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
    // window.web3.eth.getAccounts().then( function (result) {  console.log(result[0]) });
  
  }, []);


  const [userAddress, setAddress] = useState("");
//  window.web3.eth.getAccounts().then( function (result) {  setAddress(result[0]) });
//   console.log(userAddress)

  const [userBalance, setBalance] = useState(0.0);
//   window.web3.eth.getBalance('0xCd4D0189dAce77b9385340DEb6144F296DE71180')
// .then(function(result){setBalance(window.web3.utils.fromWei(result,'ether'))});
// console.log(userBalance)
  


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

export default AccountSummary;