// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public{
    storedData = x;
  }

function get() public view returns (uint){
  return storedData;
}
}

// }
//   }
//   address public owner = msg.sender;
//   uint public last_completed_migration;

//   modifier restricted() {
//     require(
//       msg.sender == owner,
//       "This function is restricted to the contract's owner"
//     );
//     _;
//   }

//   function setCompleted(uint completed) public restricted {
//     last_completed_migration = completed;
//   }
// }
