# Chapter 9: Hello World Smart Contract

<dialog character="jellyfish">OK, you’ve received a lot of equipment; let’s make use of it! In the depth of Web3, we call this activity “to buidl”. The etymology of the letter inversion is quite funny if you like to wander.</dialog>

**EVM.** A smart contract is a piece of software that can be executed on a blockchain-enabled computer, for example, the Ethereum Virtual Machine (EVM). In the EVM, a smart contract is an executable program that was deployed to the Ethereum blockchain. It’s usually written in a high-level language called Solidity and compiled into bytecode to be executed whenever someone calls it.

**RemixIDE**. But instead of talking let’s start to write our first smart contract. A classic *hello world* program. The easiest way to write a smart contract is on [RemixIDE](http://remix.ethereum.org). It’s a browser-based IDE to write, test, execute, and deploy smart contracts.

You can simply copy the following code and paste it in a new file on Remix to do your tests. A simple hello world program in Solidity:

```Solidity
1 pragma solidity >=0.4.22 <0.7.0;
2 contract helloWorld { 
3    function sayHello (string memory message) public pure returns (string memory) { 
4        return "hello world";
5    }
6 }
```

**Explanation**. The *first line* of each solidity program defines the version of the compiler that should be run to compile the program to bytecode before it can be deployed to the blockchain. Determining the compiler version is really important since newer versions of the compiler could introduce new behavior to the program that might lead to unintended behavior and losses of funds. *Line 2* defines the contract itself. Line *3* is the definition of the function. *function* says that this is a function followed by the accepted arguments by the caller of the function. Next, the type of the function is declared as ‘Public and pure’. It means that the function can be called internally or via messages. *‘Pure’* means that it does not manipulate any variables of the contract. The next keywords describe that it returns a string in this case. *Line 4* contains the actual logic of the function. In this case, it returns the string “hello world”.

**Execution costs**. Since this is not considered to be a smart contract development course we will rather focus on explaining the concepts than trying to teach you to develop smart contracts. But always remember that each instruction has a price to be executed. This price is paid as a gas fee by the caller of the smart contract. Otherwise, there would be no incentive for an Ethereum node provider to execute any code. Transaction and execution fees keep the network running. It is therefore recommended to reduce the complexity of your smart contract to increase security and reduce the execution costs to run a function in the smart contract.

<img src="/images/chapter9_0.png" />

**Life of a smart contract.** Once you are done with your implementation, you compile your Solidity code to bytecode and deploy it on the Ethereum network. Each contract has an address that is used to interact with the smart contract. A smart contract is not independent and cannot execute code on its own but the very first call of a function must be done by an externally owned account (EOA). It provides an overview of the given functions and how to call them. Now you can use libraries like Web3py to execute your functions.

**Immutability**. The smart contract itself can’t be modified anymore and it can’t be moved to another address. Any updates in the code need to be deployed to a new address and your users should be informed about the update.

**Full control over contracts**. Also, note that a smart contract does not provide any logic on its own. If you only provide a function to receive money but none that allows you to spend the received money, there is no way to get the money back. Your contract will just do what you enable it to do there are no default functions.
