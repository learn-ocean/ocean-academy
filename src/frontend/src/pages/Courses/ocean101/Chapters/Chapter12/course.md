# Chapter 12: Hello World Smart Contract
#### Difficulty: **4/5** \| Estimated reading time: **10 min**

<dialog character="jellyfish">OK, you’ve received a lot of equipment; let’s make use of it! In the depth of Web3, we call this activity “to buidl”. The etymology of the letter inversion is quite funny if you like to wander.</dialog>

**EVM**. A Smart Contract is a piece of software that can be executed on a blockchain-enabled computer, like the Ethereum Virtual Machine (EVM). The EVM can be thought of as a decentralized cloud, while the Smart Contract is an executable program that was previously deployed to the blockchain and can be run on it. In the EVM, this program is usually written in a high-level language called Solidity and compiled into bytecode to be executed whenever someone calls it.

**RemixIDE**. Let’s start to write our first Smart Contract ; a classic hello world program. The easiest way to write a Smart Contract is on [RemixIDE](http://remix.ethereum.org/), a browser-based development environment to write, test, execute, and deploy Smart Contracts.

You can simply copy the following code and paste it in a new file on Remix to play around. A simple ***'Hello World'*** program looks like this:

```Solidity
1 pragma solidity >=0.4.22 <0.7.0;
2 contract helloWorld {
3    function sayHello (string memory message) public pure returns (string memory) {
4        return "hello world";
5    }
6 }
```
**Explanation**.

***Line 1*** of the Smart Contract defines the version of the Solidity compiler that should be run to compile the program to bytecode before it can be deployed to the blockchain. Solidity is the programming language used in the EVM. Setting the compiler version is critical since newer versions of the compiler might lead to unintended behaviors and losses of actual money.

***Line 2*** defines the contract itself and it's name.

***Line 3*** is the definition of the function.
- The first part of the line says that it accepts a string as an argument
- The second part declares the visibility and behavior as ‘public and pure’
  - *Public* means it can be called internally or via messages
  - *Pure* indicates that the function will not alter the storage state
- The last part defines the return value (string)

***Line 4*** contains the actual logic of the function.

This Smart Contract only returns the string “hello world” and it does not use the passed string argument at all.

<img src="/images/chapter9_0.png" />


**Life of a Smart Contract**. Once complete, the Solidity code needs to be compiled to bytecode and deployed on the Ethereum blockchain. Each contract has a unique address on the blockchain that is used to interact with it (the address starts with “0x”). A Smart Contract is not independent; the very first call of a function must be done by an externally owned account (EOA, which also is represented by an address that also starts with “0x”). Anyone who knows the address of the Smart Contract can run the ***sayHello*** Smart Contract. Libraries like [Web3py](https://pypi.org/project/web3/) make it easy to access smart contracts from Python, for example.

**Execution costs**. Something important to know is that each instruction has a price to be executed on the EVM. This price is paid by the caller of the Smart Contract and it is often referred to as *gas fee*.  This fee is paid to Ethereum nodes that provide the computing power to execute the code on the blockchain. It is therefore recommended to reduce the complexity of Smart Contracts to cut the execution costs to run a function.

**Immutability**. Once deployed, a Smart Contract itself can’t be modified anymore and it can’t be moved to another address. Any code updates need to be deployed to a new address; users should be informed about the update.

**Full control over contracts**. All logic in a Smart Contract should be written within the Smart Contract; there are no other applicable “default functions” that the program will inherit. If a Smart Contract was deployed without a function to spend the money it received, nobody will be able to recover any money sent to that Contract. A Smart Contract will do just what it was enabled to do.
