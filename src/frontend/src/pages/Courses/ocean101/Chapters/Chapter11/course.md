# Chapter 11: Smart Contract for Storing and Reading Data
#### Difficulty: **4/5** \| Estimated reading time: **10 min**

<dialog character="jellyfish">These new species have absolutely incredible behaviors. They can do a lot of things, and more!</dialog>

**Selling your data**. Let’s walk through an example to explain the problems when we try to provide access to data using a public blockchain like Ethereum. We assume that we have a dataset of 1 GB with images from different fish in the Antarctic Ocean.

Now let's design a naive smart contract that allows us to get access to our fish dataset that we want to monetize. But first, we need to define our requirements and restrictions to find a suitable solution.

- Intermediary. No third party should have access to our images.
- Privacy. We do not want to reveal the data itself to the data consumer.
- Computation control. The data should only be used to train AI models. We do not want someone to use the data to be categorized by humans.
- Monetization. We want to monetize the data without introducing any administration overhead or any avoidable fees.
- Availability. The dataset should be available on all data marketplaces.

**Cutting costs and reducing efforts**. Such smart contract implementation would provide significant advantages compared to centralized data market places. A centralized market place might force us to upload our data to its servers (recall the trust problem we talked about in chapter 6). It might introduce restrictions to our dataset that might not be ideal for us (e.g. no images of faces allowed). It could change its terms and conditions anytime, trapping our data in high switching costs. Open market places built on Ethereum, on the other hand, remove the need to duplicate infrastructure, cut the costs, and do not lock their users.

**Immutability and accessibility.** If we considered the Ethereum blockchain only as a distributed database, we could think about uploading our dataset directly to the blockchain. We could implement a smart contract with a *store(data)* function which takes an array of bytes to be stored. Next, we would create an array byte representation of the image and send it to the smart contract. We saved our data on the blockchain. And everyone could read this data if they go through the blockchain history. But it would be convenient if the smart contract provided a function to retrieve all data that is stored in it. So we would implement *readStorage().* to return the image (represented in byte arrays).

This solution would work, and in fact, some [projects](https://boobies.surge.sh/) uploaded whole images to the blockchain. But it would violate most of our requirements. Most importantly, in this implementation, everyone can access the data. And while we still own the rights to the data itself, we can’t delete it anymore or control access right.

**Public access.** Because every smart contract is available on the Ethereum network, and because the Ethereum network is public, every smart contract is available for everyone. It does not mean that everyone can execute the functions in the smart contract in a meaningful way. But everyone can read what was written on the blockchain, smart contracts, and their data. This is really not desirable for our private data.

**User experience**. This implementation also introduces a bad user experience for data providers, because it requires that they save the data in a specific way to enable the upload to the Ethereum blockchain. And the viewer needs to know how the data was encoded to properly decode it. Since there is no rule that forces you to use byte arrays.

**Transaction costs**. Last but not least, each action that alters the state of the blockchain involves costs. To store 1 byte, it costs 5'200 Gas (as an example, 5'200 Gas was worth $0.2679 in September 2020). So to store a 1 GB dataset we would have paid 1'000'000'000 Bytes * $0.2679 = $267'900'000. Ouch!
