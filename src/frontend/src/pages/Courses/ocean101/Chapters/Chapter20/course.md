# Chapter 20: Compute to Data Flow - Train  AI Models Privately & Remotely
#### Difficulty: **3/5** \| Estimated reading time: **5 min**

<dialog character="mantaray">How does the bottom of the tech stack look like?</dialog>

**Access control.** Ocean Protocol's first released feature was access control. This is the central piece of data exchanges and orchestration.

<img src="/images/chapter19_0.png" />

Ocean Protocol Smart Contracts orchestrate the flow of access rights between Data Providers who want to monetize their data and Data Consumers who want to use the data to build AI models. This covers the entire set of operations required for a successful data exchange, from publishing data to consuming it.
There are many possible variants of access. Access could be perpetual (access as many times as you like), time-bound (access for just one day, or within a specific date range), or one-time.

**In Ocean Protocol, data access is always treated as a data service**. This could be a service to access a static dataset (e.g. a single file), a dynamic dataset (updated over specific time frames), or for a compute service (i.e. Compute-to-Data). When an exchange takes place, it follows a series of steps involving the Ocean Protocol middleware, chronologically.

1. The **Data Provider** provides a dedicated URL address for the compute service. The data can be stored wherever the data provider likes, as long as it is connected to the internet. With Compute-to-Data, the Data Provider provides the URL to Compute-to-Data service rather than a file to download.

2. The URL is encrypted by Ocean Provider. The Data Provider invokes Ocean Datatoken Factory to deploy a new datatoken to the blockchain.

3. When the data Provider registers the URL address with the metadata associated with the dataset, the URL is encrypted and stored on-chain and the Ocean Provider Service holds the key to decrypt that information.

4. The **Data Consumer** sends 1.0 Datatoken to the Data Provider’s wallet and specifies the algorithm to run on the data. The Ocean Provider checks that the payment has been made and proxy to the encrypted URL to enable the requested service (i.e. enable a Compute-to-data job on the algorithm submitted). Ocean Provider relays the output and logs of the compute job to the Data consumer without ever revealing the URL where the service is located.
