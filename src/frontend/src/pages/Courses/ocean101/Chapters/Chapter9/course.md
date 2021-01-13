# Chapter 9: Hello World Smart Contract
#### Difficulty: **4/5** \| Estimated reading time: **10 min**

<dialog character="jellyfish">OK, you’ve received a lot of equipment; let’s make use of it! In the depth of Web3, we call this activity “to buidl”. The etymology of the letter inversion is quite funny if you like to wander.</dialog>

**EVM.** A smart contract is a piece of software that can be executed on a blockchain-enabled computer, for example, the Ethereum Virtual Machine (EVM). In the EVM, a smart contract is an executable program that was deployed to the Ethereum blockchain. It’s usually written in a high-level language called Solidity and compiled into bytecode to be executed whenever someone calls it.

**RemixIDE**. But instead of talking let’s start to write our first smart contract. A classic *hello world* program. The easiest way to write a smart contract is on <a href="http://remix.ethereum.org" target="_blank" >RemixIDE</a>. It’s a browser-based IDE to write, test, execute, and deploy smart contracts.

You can simply copy the following code and paste it in a new file on Remix to play around. A simple hello world program in Solidity:

```Solidity
1 pragma solidity >=0.4.22 <0.7.0;
2 contract helloWorld {
3    function sayHello (string memory message) public pure returns (string memory) {
4        return "hello world";
5    }
6 }
```
**Explanation**. Let's look at each component of the smart contract.
*Line 1* defines the version of the compiler that should be run to compile the program to bytecode before it can be deployed to the blockchain. Setting the compiler version is critical since newer versions of the compiler might lead to unintended behaviors and losses of funds.
*Line 2* defines the contract itself and it's name.
*Line 3* is the definition of the function.
    - The first part says that it accepts a string as an argument
    - The second part declares the visibility and behavior as ‘public and pure’
    - *Public* means it can be called internally or via messages
    - *Pure* indicates that the function will not alter the storage state
    - The last part defines the return value (string)
*Line 4* contains the actual logic of the function. This smart contract only returns the string “hello world” and it does not use the passed string argument at all.

<img src="/images/chapter9_0.png" />

**Life of a smart contract.** Once done with an implementation, the Solidity code needs to be compiled to bytecode and deployed on the Ethereum blockchain. Each contract has a unique address that is used to interact with it. A smart contract is not independent and cannot execute code on its own but the very first call of a function must be done by an externally owned account (EOA). If you know the address of the smart contract you can use libraries like Web3py to call the *sayHello* function.

**Execution costs**. Since this is not considered to be a smart contract development course we will rather focus on explaining the concepts than trying to teach you to develop smart contracts. But you should know that each instruction has a price to be executed. This price is paid as a gas fee by the caller of the smart contract. Otherwise, there would be no incentive for an Ethereum node provider to execute any code. Transaction and execution fees keep the network running. It is therefore recommended to reduce the complexity of your smart contract to increase security and cut the execution costs to run a function.

**Immutability**. The smart contract itself can’t be modified anymore and it can’t be moved to another address. Any code updates need to be deployed to a new address and your users should be informed about the update.

**Full control over contracts**. Also, note that a smart contract does not provide any logic on its own. If you only provide a function to receive money but none that allows you to spend the received money, there is no way to get the money back. Your contract will just do what you enable it to do. There are no default functions.
