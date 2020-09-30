# Chapter 19: Compute to Data Flow - Train  AI Models Privately & Remotely
#### Difficulty: **3/5** \| Estimated reading time: **5 min**

<dialog character="mantaray">How does the bottom of the tech stack look like? 
</dialog>

**Access control.** Ocean Protocol's first released feature was access control. This is the central piece of data exchanges and orchestration.

<img src="/images/chapter19_0.png" />

Ocean Protocol smart contracts orchestrate the flows between Data Providers who want to monetize their data and Data Consumers who want to use the data to build AI models.  This covers the entire set of operations required for a successful data exchange, from accepting an access request dataset delivery and payment.

It is important to know that there are many possible variants of access. Access could be perpetual (access as many times as you like), time-bound (e.g. access for just one day, or within specific date range), or one-time (after you access, the token is burned).

What’s more, data access is always treated as a data service. This could be a service to access a static dataset (e.g. a single file), a dynamic dataset (stream), or for a compute service (e.g. “bring compute to the data”), the same requests and process is followed within Ocean Protocol. This is also why Compute algorithm assets are handled the same as data assets.

When an exchange takes place, it follows a series of steps involving the Ocean Protocol middleware, chronologically.

1. **The Data Provider** provides the URL address of the data or compute service. The data provider publisher actor holds can store their the dataset wherever they like, as long as it’s connected; it can be stored on in Google Drive, Dropbox, AWS S3, on their phone, on their home server, or even on their smartphone etc.
2. The dataset must have a dedicated URL, this is how the data will be accessed by the Data Consumers. The publisher can also use [IPFS](https://ipfs.io/), a decentralized file management system, for a content-addressable URL. Or instead of a file, the publisher may run a compute-to-data service. It then invokes **Ocean Datatoken Factory** to deploy a new datatoken to the chain.
3. When the data Provider registers the URL address with the metadata associated with the dataset, the URL is encrypted and stored in the **Ocean Provider Service**.
4. **Service Execution Agreements**. For each data set, the network validates who is able to access what. Ocean Protocol implements this with Service Execution Agreements (SEAs).A SEA is a contract-like agreement between a publisher, a consumer, and a verifier. SEAs specify what assets are to be delivered, the conditions that must be met, and the rewards for fulfilling the conditions. SEAs are implemented as part of Ocean Protocol smart contracts.
5. **The Data Consumer.** Buyers of data have to send the amount of datatokens required to access the dataset to the Provider wallet. Once this is done, the smart contracts of the Ocean Provider Service load the encrypted URL, decrypt it, and enable the requested service (i.e. send static data, or enable a compute-to-data job).


