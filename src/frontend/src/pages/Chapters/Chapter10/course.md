# Chapter 10: Exploring the OCEAN Token Contract
#### Difficulty: **3/5** \| Estimated reading time: **5 min**

<dialog character="jellyfish">Let's now use your equipment to observe those beautiful new species we've discovered down here</dialog>

**Web3 tools.** Smart contracts on the blockchain are useful to enable new forms of governance and liberty. But you also need the tools around the blockchain to interact with it. From [developer tools](https://github.com/ConsenSys/ethereum-developer-tools-list) like Remix IDE to write smart contracts, libraries like Web3py to interact with the blockchain to apps like Etherscan to explore the blockchain.

**Exploring the OCEAN Token**. Look for “OCEAN” on [Etherscan](https://etherscan.io) and you will find the smart contract of the token.

<img src="/images/chapter10_0.png" />

When you open the contract there is a tab to read the actual Solidity code. If you look into the [OCEAN token]((https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48) smart contract you can see that **the OCEAN token uses the ERC20 standard**; it is an *ERC20 token*, which is a widely used and secure standard. It imposes a standard set of functions to interact with it as well as standard naming conventions.

**In need of standards**. While everyone can write smart contracts in their own style, the community realized that it might be useful for the ecosystem and for security (many smart contracts deal with real monetary value after all) to introduce standards. The Ethereum network does not enforce you to use these standards, but most developers use them as they increase quality and speed up your development.

**ERC standards.** [ERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol) is just one standard for tokens, but standards are also available for name registries, library/package formats, and more. These standards use *ERC* as a suffix, as they all started as *Ethereum Request for Comments*. ERCs started as modification proposals by developers asking for feedback, got tested, and later adopted by the community. These standards and libraries are open-source, free to copy/use, and well documented.

**Better user experience**. Because the OCEAN token is an ERC20 token, other apps and smart contracts know how to interact with it, just like they do with other ERC20 tokens. This increases compatibility and enables cross-pollination; the OCEAN Token contributes to the Ethereum ecosystem, and it benefits from the whole Ethereum ecosystem.

Since the OCEAN token contract follows the ERC20 standard [Etherscan](https://etherscan.io) can be used to find the smart contract by searching for *OCEAN*. The user does not need to know the address.

**Transparency**. Looking at the OCEAN token contract you can see how many people (addresses) hold the token, and you can inspect every single transaction of the token. You can also view the smart contract code under the *Read Contract* tab. This information is publicly written on the Ethereum blockchain, Etherscan is only a tool to access that information, and enhanced with additional off-chain information. If you do not like Etherscan you can simply switch to another Explorer or build your own. It's that simple.
