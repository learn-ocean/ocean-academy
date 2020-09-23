# Chapter 11: Smart Contract for Storing and Reading Data

<dialog character="jellyfish"></dialog>

**Public access.** Now when you know that every smart contract is available on the Ethereum network it must be clear that it’s available for everyone. It does not mean that everyone can execute the functions in the smart contract in a meaningful way. But everyone can read what was written on the blockchain.

**Selling your data**. So let’s walk through an example to explain the problems when we try to provide access to data using a public blockchain like Ethereum. We assume that we have a dataset of 1 GB with images from different fish in the antarctic ocean. We learned that everything that is written on a public blockchain is readable for everyone. 

Now let's design a naive smart contract that allows us to get access to our fish dataset that we want to monetize. But first we need to define our requirements and restrictions to find a suitable solution. 

- Intermediary. No third party should have access to our images. 
- Privacy. We do not want to reveal the data itself to the data consumer.
- Computation control. The data should only be used to train AI models. We do not want someone to use the data to be categorized by humans.
- Monetization. We want to monetize the data without introducing any administration overhead or any avoidable fees.
- Availability. The dataset should be available on all data marketplaces.

**Cutting costs and reducing efforts**. We are only interested in Ethereum based solutions since a centralized data market place might force us to upload our data to their servers. Additionally it might introduce restrictions to our dataset that might not be ideal for us (e.g. no images of faces allowed). Finally a data market place is always trying to earn on their users. They will always try to force their users to use their market place by forbidding access for other data marketplaces. Open marketplaces remove the need to reinvent infrastructure and cut the costs, leading to more competition which eventually leads to better quality and more useful services.

**Immutability and accessibility.** When we consider the Ethereum blockchain as a distributed database we could just upload our dataset directly to the blockchain. We could implement a smart contract with a function called *store(data)* which takes an array of bytes to be stored. Next we would create an array byte representation of the image and send it to the smart contract. Now it’s stored on the blockchain. And everyone could read this data if they go through the blockchain history. But it would be more convenient if we also provide a function to retrieve all data that is stored in this smart contract. So we implement *readStorage().* This returns the image or more precisely the image represented as an byte array.

This implementation violates all our requirements though. Everyone can access the data this way. And while we still own the rights to the data itself, we can’t delete it anymore or control access which might result in a decrease in (monetary) value.

**User experience**. Furthermore it introduces a bad user experience for the data provider that needs to save it in a specific way to enable the upload to the Ethereum blockchain. And the viewer needs to know how the data was encoded to properly decode it. Since there is no rule that forces you to use byte arrays.Additionally we have to remember that each action which alters the state of the blockchain involves execution costs. To store a bye it costs 5200 Gas (september 2020:: $0.2679). So to store a 1 GB dataset we would pay 1000000000 Bytes * 5200 Gas * 0.2679 € = 13.930.800.000.000 €. 