# Chapter 14: Smart Contract for Storing Data
#### Difficulty: **4/5** \| Estimated reading time: **10 min**

<dialog character="jellyfish">These new species have absolutely incredible behaviors. They can do so many things, they are moving around graciously, touring completely into the Ether. </dialog>

**Selling your data**. Let’s walk through an example to explain the problems when we try to provide access to data using a public blockchain like Ethereum. We assume that we have a dataset of 1 GB with images from different fishes in the Antarctic Ocean.

Let’s say we want to use a set of requirements and restrictions to find a **safe solution for monetizing this data**, which can be summarized as:
- **No Intermediary**. No third party should have access to our images.
- **100% Privacy**. We do not want to reveal the data itself to the data consumer.
- **Lean process**. We want to monetize the data without introducing any administration overhead or any avoidable fees.
- **Access right control**. We want to be in control of who accesses the data and how.
- **Wide availability**. The dataset should be available on as many data marketplaces as possible (possibly all).

With the requirements in mind, let's design a naive Smart Contract that allows us to get access to this fish dataset that we want to monetize.

**Cutting costs and reducing efforts**. Such Smart Contract implementation would provide significant advantages compared to centralized data marketplaces. Unlike a centralized marketplace, an open marketplace built on Ethereum cannot change terms and conditions arbitrarily, nor require to upload data to a server under the control of one single entity and trust that entity, nor impose new restrictions (e.g. no images of faces allowed). They  remove the need to duplicate infrastructure, cut the costs, and they do not lock their users.

**Immutability and accessibility**. If we considered the Ethereum blockchain only as a distributed database, we could think about uploading our dataset directly to the blockchain. We could implement a smart contract with a *store(data)* function which takes an array of bytes to be stored. Next, we would create an array byte representation of the image and send it to the smart contract. We saved our data on the blockchain. And everyone could read this data if they go through the blockchain history. But it would be convenient if the smart contract provided a function to retrieve all data that is stored in it. So we would implement *readStorage()* to return the image representation.

This solution would work, and in fact, some <a href="https://boobies.surge.sh/" target="_blank" >projects</a> uploaded whole images to the blockchain. But it would violate key requirements we specified to safely monetize data.

Here are the main **issues with storing data directly on the Ethereum blockchain**:

- **Access rights**. Because every Smart Contract is available on the Ethereum network, and because the Ethereum network is public, every Smart Contract is available for everyone. In other words, everyone can access the data, and we have lost the ability to manage data access rights.
- **Immutability**. Data written on the blockchain is immutable; so we wouldn’t be able to delete the data once it was uploaded. This could create risks of duplication, but also of privacy protection depending on the data that is stored.
- **User experience**. This implementation also introduces a bad user experience for data providers, because it requires that they save the data in a specific way to enable the upload to the Ethereum blockchain. And the viewer needs to know how the data was encoded to properly decode it. Since there is no rule that forces you to use byte arrays.
- **Transaction costs**. Last but not least, each action that alters the state of the blockchain involves costs. To store 1 GB of data, one may have to spend well over $500M depending on market conditions… Not practical indeed.
