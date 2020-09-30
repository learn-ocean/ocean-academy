# Chapter 16: Who is a Data Provider?
#### Difficulty: **3/5** \| Estimated reading time: **5 min**

<dialog character="mantaray">In the depths of the ocean, nobody knows you’re a fish. Meet the main characters in the Web3 data ecosystem that Ocean Protocol is buidling. First, data owners who look to monetize their data.</dialog>

At this point, you know how smart contracts and blockchain can be beneficial for the transparency and privacy of a data marketplace, but who exactly operates in this kind of market? 

Let’s look at the different actors providing data and services on the network. First, the Data Providers. 

A data provider is an organisation or individual that ‘owns’ data and makes it available to others, either for a fee or for free.

Data providers’ considerations can be summarized easily:

- **Control.** What control do they exert on their data, how it is used, and what is their ability to share different data depending on who buys it and for what purpose.
- **Traceability.** How can they trace where their data flows,who uses it, and what it is used for.
- **Compliance.** How is the data used vs. local and international data regulations.
- **Revenue.** How can they be paid a fair price for the data, regardless of whether their licensing model is one-time, perpetual, or streaming.

**Publishing data.** When a provider publishes a data asset, they also define the terms and conditions under which the data can be accessed or consumed. Conditions can be combined in more complex logic to express payment conditions, access control and verified compute.

The flow to publish data can be summarized in four steps:

1. **Preparing the metadata** of the asset. Not all of it is mandatory, but the more information on the data one provides, the higher the chances for the data to be bought. A proper description is required so that data consumers can find your data and decide if it’s what they are looking for.
2. **Provide an URL to get the data** that can be used to identify the data files when demanded for download or compute jobs.
3. **Define the attributes of the compute service.** Select frameworks such as python or nodejs and service endpoint for the compute requests.
4. **Registering the asset into the Blockchain**. The asset is added to the DID Registry of Ocean Protocol.

The publisher inserts a title of the dataset and the type of access. In fact the publisher can allow for the data to be downloaded, computed upon, or both. Then the publisher provides the URL path to the data itself and encrypts it.

<img src="/images/chapter16_0.png" />

Data *access* will follow the ERC20 token standard. For example, consider a datatoken granting  **one single access to the dataset to somebody holding at least 1.0 token**. 

- Anyone with at least 1.0 of these datatokens has access to custody of the data once.
- To access the dataset, one would have to send 1.0 data token to the data provider.
- Access to the dataset can be ceded to someone else simply by sending them 1.0 datatoken.

When the dataset is registered, the publisher invokes **the Ocean Datatoken Factory Smart Contract** to deploy a new datatoken to the chain. This allows independent parties like data marketplaces to access the metadata of your data and provide access to the consume and compute functions for data consumers.

<img src="/images/chapter16_1.png" />

**Earn Ocean Tokens by providing data.** Data providers sitting on large sets of latent data can now publish data for sharing using a variety of pricing mechanisms, while maintaining full control over the data and complying with data privacy and compliance regulations.