# Chapter 10: Exploring the Ocean Token Contract

<dialog character="jellyfish"></dialog>

**Tools and libraries.** Luckily, standards and libraries have been built by Ocean Protocol and other community members to make our life easier, so we don’t have to create new smart contracts in data pipelines. Imagine this infrastructure like a collection of tools and libraries like in the python ecosystem that allows you to build on top of existing solutions. You can focus on your specific problem and do not need to bother to reimplement known solutions.

**In need of standards**. While everyone can write their smart contract the community realized that it might be useful for the ecosystem and for security (many smart contracts deal with real monetary value after all) to introduce standard smart contracts. These smart contracts are simply best practices so you should use them to increase quality and speed up your development. But the Ethereum network does not enforce you to use them.

**ERC standards.** In the Ethereum ecosystem, you will often read about standard token contracts like ERC20. ERC is an acronym that stands for Ethereum Request for Comments, which were proposals in Git, that then got tested and adopted by the community. ERCs are application-level standards for Ethereum and can include token standards, name registries, library/package formats, and more. These standards and libraries are open-source, free to copy/use, and well documented.

**Web3 tools.** Additionally, there is also tooling around the blockchain itself. Because it is not only the code that is executed on the blockchain but also the tools to interact with the blockchain. From editors like Remix IDE to libraries like Web3js or Web3py. If you are interested in further exploring the Ethereum developer tools you should have a look into [awesome ethereum](https://github.com/ConsenSys/ethereum-developer-tools-list).

**Exploring Ocean**. You can for example look for “OCEAN” on [Etherscan](https://etherscan.io) and you will find the smart contract for the Ocean token. Etherscan offers the possibility for token creators to verify that this smart contract is the one by the Ocean team. It improves the user experience since everyone could name their smart contract Ocean since there is no way to censor names. But it’s important to understand that this information is not written on the blockchain and you should always double-check if the given address is the correct one that you want to interact with.

<img src="/images/chapter10_0.png" />

When you open the contract you will see that Etherscan offers a tab to read the actual Solidity code. This is a feature that is offered by Etherscan though. The Ethereum Blockchain only knows the bytecode. When we have a quick look into the Smart Contract we can see that the Ocean Token uses the ERC20 standard. It is therefore an ERC20 token and other apps and smart contracts will assume that it behaves like any other ERC20 token. This further increases compatibility and enables the Ocean Token to benefit from the Ethereum ecosystem.
