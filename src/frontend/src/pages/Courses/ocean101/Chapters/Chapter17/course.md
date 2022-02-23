# Chapter 17: Ocean for Data Providers

#### Difficulty: **3/5** \| Estimated reading time: **5 min**

<dialog character="mantaray">In the depths of the ocean, nobody knows you’re a fish. Meet the main characters in the Web3 data ecosystem that Ocean Protocol is buidling. First, data owners who look to monetize their data.</dialog>

Now you know how smart contracts and blockchain can be beneficial for the transparency and privacy of a data marketplace. But who operates in this kind of market?

Let’s look at the different actors providing data and services on the network. First, the Data Providers.

A data provider is an organization or individual that *owns* data and makes it available to others, either for a fee or for free. There are 4 main considerations that data providers’ could have:
1. Control. What control do they exert on their data? How it is used, and what is their ability to share different data depending on who buys it, and for what purpose?
2. Traceability. How can they trace where their data flows, who uses it, and what it is used for?
3. Compliance. How is the data used vs. local and international data regulations?
4. Revenue. How can they be paid a fair price for the data, regardless of their licensing model?

Ocean Protocol provides a strong protection layer for all considerations:
1. The Data provider can choose what algorithms can be run on their data using Compute-to-data, the privacy-preserving technology of Ocean Protocol. More importantly, it can earn revenue from data without ever sharing that data with anyone.
2. Traceability is ensured via transactions logged into the blockchain as well as computation logs in the context of Compute-to-data.
3. Compliance enforcement is helped with the extra control and traceability offered by Ocean Protocol. The protocol may not replace legal arbitration, but such cases will not be for data abuses or misuses, as only the model/outputs can be misused as the data is not directly accessed.
4. Ocean Market provides an interesting price discovery mechanism for data sets with its unique data curation mechanism.

**How to Publish data**. As a data provider publishing a data asset, you define the terms and conditions under which the data can be accessed or consumed. Conditions can be combined in more complex logic to express payment conditions, access control, and compute operations.

The flow to publish data can be summarized in four steps:
1. **Prepare the metadata of the asset**. Not all of it is mandatory, but the more information on the data one provides, the higher the chances for the data to be found and bought. A proper description is required so that data consumers can find your data and decide if it’s what they are looking for.
2. **Provide a URL to get the data** that can be used to identify the data files when demanded for download or compute jobs. This URL is encrypted before saving.

<img src="/images/chapter16_0.png" />

3. **Define the attributes of the compute service** if the option to compute the data on-premise is selected. Select compute frameworks such as python or nodejs and service endpoints for the compute requests.
4. **Register the asset into the Blockchain**. The DDO and DID of the asset are saved on the blockchain.

Data *access* will follow the ERC20 token standard; ***access to a dataset can be granted to anybody who paid 1 datatoken***.
- Anyone who owns 1.00 of these datatokens has the ability to access the data under the terms specified in the datatoken contract (e.g. access for 1 day, 1 week, 1 month, 1 year or forever).
- Accessing the dataset is as simple as sending 1.00 datatoken to the data provider.
- Access right to the dataset can be transferred to someone else simply by sending 1.00 datatoken to their account.

When the dataset is registered, the publisher invokes the Ocean Datatoken Factory Smart Contract to deploy a new datatoken to the chain.

<img src="/images/chapter16_1.png" />

**Anyone is free to register their data onto Ocean Protocol and earn revenue from their data**. Data providers sitting on large sets of latent data have the tools to publish data now.
