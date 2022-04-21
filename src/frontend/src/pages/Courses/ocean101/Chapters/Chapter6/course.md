# Chapter 6: Ocean Market and Ocean Protocol Infrastructure
#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="mantaray">In the depths of the ocean, nobody knows you’re a fish. Meet the main characters in the Web3 data ecosystem that Ocean Protocol is buidling.</dialog>

Legacy data marketplaces have three main issues: centralized control which requires the data publisher to trust the marketplace operator, loss of privacy, and difficulty in determining the price. Now that you are familiar with the Ocean, let’s explore how Ocean Protocol addresses these issues.

<img src="/images/chapter14_0.png" />

**Ocean Market**, the reference marketplace provided by Ocean Protocol, makes it easy to publish data services, provide accurate pricing for the data, discover data, purchase data, and consume data services. Ocean Market supports fixed pricing and automatic price discovery for your assets (datasets and algorithms).

It’s a **vendor-neutral reference data marketplace** for use by the Ocean community. It is open (it is owned by Ocean Protocol Foundation) and non-custodial (only the data owner holds the keys to the data). Developers and entrepreneurs are free to fork Ocean Market to build their own data marketplaces to access Ocean Protocol datasets.

Everyone at Ocean Protocol hopes that there will be many data marketplaces in the ecosystem, each targeting a specific industry or vertical, and that Ocean Market will be just one among many. Each Ocean-powered marketplace will have the same features as the reference implementation provided by Ocean Protocol, plus any feature they will want to add.


**Let’s explore Ocean Market to understand more in-depth the Ocean Protocol 3 layers stack.**

<img src="/images/chapter14_1.png" />

The Buyer interacts with the frontends including Ocean Market, or with any independent third-party markets connected to Ocean Protocol. Front-end UIs, usually running in the browser, are connected to the Ocean Protocol backend with Ocean React hooks and Ocean JS library. Think of Ocean React hooks as the glue for the frontend the user sees, and the backend that sits on the blockchain. The Decentralized Backend is Solidity code that includes the libraries and tools needed to provide the service in a decentralzed fashion, like access Smart Contracts and on-chain metadata store.

Ocean Markets can be used on different *anchor* blockchains like Ethereum, the main blockchain for Smart Contracts, BSC, its cheaper equivalent, or Polygon, Ethereum's scaling solution (a so-called *Layer-2* that uses zero-knowledge proof technology to make transactions more efficient).

From an infrastructure standpoint, Ocean marketplaces are what data buyers and data sellers interact with.

**Let’s explore the 3 layers stack behind Ocean Marketplaces.**

<img src="/images/chapter14_2.png" />

**Apps Layer** - This is the ecosystem of marketplaces, data management platforms. This is effectively the services and the UI that people interact with for their data exchanges. It is the marketplace or publisher app that users go to, which may typically be accessed from a web browser.

**Middleware Layer** - This is made of Ocean Metadata cache, Ocean proxy, libraries. Datasets and their metadata are cached in what is called ***Aquarius*** in Ocean, for quick retrieval (rather than having to query the entire blockchain to search for data assets, which may be slow). It includes all the high-level libraries to interact with Ocean Protocol from various interfaces. The Ocean proxy is called the ***Ocean Provider*** and it enables the integration of data access control with Ocean Protocol.

**Smart Contracts Layer** - This is the foundational layer, the open ledger that records data ownership, access rights and metadata. It is made of Ethereum nodes and Smart Contracts (or any other blockchain on which Ocean is available). Ocean Protocol Smart Contracts facilitate the exchange of data access rights via the use of data tokens.

Don’t worry if it’s not all entirely clear; the Ocean Protocol stack is made simple for the end-user anyway as they may only interact with the Marketplace UI.
