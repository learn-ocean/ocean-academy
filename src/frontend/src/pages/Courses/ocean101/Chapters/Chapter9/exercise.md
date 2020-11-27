// Update the contract so that it returns the provided argument “message” by the caller of the function rather than ‘Hello World’

pragma solidity >=0.4.22 <0.7.0;

contract helloWorld { 
  function sayHello (string memory message) public pure returns (string memory) { 
    return "hello world";
  }
}