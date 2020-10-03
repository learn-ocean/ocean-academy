# Chapter 10: Exploring the Ocean Token Contract
#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="jellyfish">Let's now use your equipment to observe those beautiful new species we've discovered down here</dialog>

**Web3 tools.** Smart contracts on the blockchain are useful to enable new forms of governance and liberty. But you also need the tools around the blockchain to interact with it. From [developer tools](https://github.com/ConsenSys/ethereum-developer-tools-list) like Remix IDE to write smart contracts, libraries like Web3py to interact with the blockchain to apps like Etherscan to explore the blockchain.

**Exploring Ocean**. Look for “OCEAN” on [Etherscan](https://etherscan.io) and you will find the smart contract for the Ocean token. Now let us inspect the [Ocean Token](https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48) a little closer.

<img src="/images/chapter10_0.png" />

When you open the contract there is a tab to read the actual Solidity code. If you look into the OCEAN Smart Contract you can see that **the Ocean Token uses the ERC20 standard**; it is an "ERC20 token", which is a widely used and secure standard. It proposes a standard set of functions to interact with it and suggests naming conventions.

**In need of standards**. While everyone can write smart contract in their own style the community realized that it might be useful for the ecosystem and for security (many smart contracts deal with real monetary value after all) to introduce standard smart contracts. These smart contracts are simply best practices so you should use them to increase quality and speed up your development. But the Ethereum network does not enforce you to use them.

**ERC standards.** In the Ethereum ecosystem, you will often read about standard token contracts like [ERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol). ERC is an acronym that stands for Ethereum Request for Comments, which were proposals in Git, that then got tested and adopted by the community. ERCs are application-level standards for Ethereum and can include token standards, name registries, library/package formats, and more. These standards and libraries are open-source, free to copy/use, and well documented.

**Better user experience**. When all proposals are followed other apps and smart contracts expect that the Ocean Token behaves like all other ERC20 tokens. This increases compatibility and enables e.g. the Ocean Token to contribute to and benefit from the whole Ethereum ecosystem.

Since the Ocean Token Contract follows the ERC20 standard Etherscan can find the Smart Contract by searching for *OCEAN*. The user does not need to know the address.

**Transparency**. Looking at the Ocean Contract you can see how many holders there are and you can inspect every single transaction. There is also a tab to directly call the functions of the Smart Contract. 
All this information is on-chain and therefore available for everyone. Etherscan enriches this view with off-chain data like the price of the token and they allow to upload the correct source code of the Smart Contract. Now everyone can audit the Solidity code. 

If you do not like Etherscan you can simply switch to another Explorer or build your own. This increases independency.