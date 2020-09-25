# Chapter 11: Smart Contract for Storing and Reading Data

<dialog character="jellyfish">These new species have absolutely incredible behaviors. <span>They can do a lot of things, and more! </span></dialog>

**Public access.** Now when you know that every smart contract is available on the Ethereum network it must be clear that it’s available for everyone. It does not mean that everyone can execute the functions in the smart contract in a meaningful way. But everyone can read what was written on the blockchain, including the code of the smart contract.

**Selling your data**. So let’s walk through an example to explain the problems when we try to provide access to data using a public blockchain like Ethereum. Let's assume that we have a dataset of 1 GB with images of different fishes in the Antarctic ocean. 

Now let's design a naive smart contract that allows us to get access to our fish dataset that we want to monetize. But first, we need to define our requirements and restrictions to find a suitable solution.

- Intermediary. No third party should have access to our images. 
- Privacy. We do not want to reveal the data itself to the data consumer.
- Computation control. The data should only be used to train AI models. We do not want someone to use the data to be categorized by humans.
- Monetization. We want to monetize the data without introducing any administration overhead or any avoidable fees.
- Availability. The dataset should be available on all data marketplaces.

**Cutting costs and reducing efforts**. A centralized data market place might force us to upload our data to their servers (recall the trust problem we talked about in chapter 6). Additionally, a centralized market place might introduce restrictions to our dataset that might not be ideal for us (e.g. no images of faces allowed). It also exposes us to changes in their terms and conditions, made worse by their inherent switching cost. Open marketplaces built on Ethereum, on the other hand, remove the need to duplicate infrastructure and cut the costs, leading to more competition which eventually leads to better quality and more useful services.

**Immutability and accessibility.** If we considered the Ethereum blockchain as a distributed database, we could just upload our dataset directly to the blockchain. We could implement a smart contract with a function called *store(data)* which takes an array of bytes to be stored. Next, we would create an array byte representation of the image and send it to the smart contract. It would then be stored on the blockchain. And everyone could read this data if they go through the blockchain history. It would be convenient if the smart contract provided a function to retrieve all data that is stored in it. So we would implement *readStorage().* to return the image (represented in byte arrays).

This implementation would work, but it would violate most of our requirements. Most importantly, in this implementation everyone can access the data. And while we still own the rights to the data itself, we can’t delete it anymore or control access right. This is really not desirable.

**User experience**. Furthermore, it introduces a bad user experience for data providers, because it requires that they save the data in a specific way to enable the upload to the Ethereum blockchain. And the viewer needs to know how the data was encoded to properly decode it. Since there is no rule that forces you to use byte arrays. Last but not least, each action that alters the state of the blockchain involves execution costs. To store 1 byte, it costs 5'200 Gas (September 2020: 5'200 Gas is worth $0.2679). So to store a 1 GB dataset we would have to pay 1'000'000'000 Bytes * $0.2679 = $267'900'000. Ouch!
