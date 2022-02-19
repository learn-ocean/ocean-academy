# Chapter 15: Buying and Selling Data using Ocean Protocol
#### Difficulty: **3/5** \| Estimated reading time: **15 min**

<dialog character="jellyfish">Look how these marine creatures interact. Some stay still, some move around. They wander, they transact.</dialog>

**Storing an immutable link**. If storing data on the blockchain is not desirable, why don’t we just save our data in a place where we can control access and provide a link to the data on the blockchain?
A naive approach would be to modify the *store()* function of our previous contract to accept a link to the data, rather than the data itself.  The data would then be stored outside the blockchain. But this implementation still fails; because the Smart Contract is public, everyone can find the link to our data and access it. Access control could be handled on the site where the link points, but at this point, why would we use a blockchain, since nothing is happening on the blockchain anyways?

**Standardized Access Control**. What’s more, in this implementation, each data seller would have their own infrastructure, metadata and access standards to their dataset. In that world, a data buyer would have to register to dozens of different marketplaces with the hope of finding the data she is looking for. That's basically the legacy model, and the user experience isn't great in it.
It would be easier to have a central repository to store information about data, which anyone can query. But since none of the marketplaces would want to become dependent on a single third party, that central authority cannot be another institution. The only truly neutral solution is to have an independent Smart Contract where everyone can register their data. A blockchain can enable collaboration among competitors, just like that.
Introducing Ocean Protocol. This is exactly what the protocol does. It implements standards on how to provide a valid link to the data, description, and further metadata.

**The trick? Encryption**. Links to datasets are encrypted, and decryptable only by those who spend an access token to decrypt them. A data buyer essentially buys a data access token from the data seller, and spends it to decrypt the link to the dataset.

**Sourcing Data Access Tokens**. Data buyers may also buy a data access token from a marketplace; they may not know or have access to the data seller after all. Ocean Market is an obvious place to buy data tokens, as all data sets listed on Ocean Protocol are available through the Ocean Market.
As more marketplaces become available, with different UX, data pricing mechanisms or extra metadata, the marketplaces would just access the entire ocean of available data, and they may take a fee to provide that service. Data marketplaces need only to query Ocean Smart Contracts to list available datasets.

Ocean Protocol provides a standard way to do all of this. Eventually, it increases the quality of data markets since they can focus their limited resources on providing additional features that might be useful for their users instead of re-implementing a payment process yet again.

**Finding Data**. When someone is looking to find a specific algorithm or dataset relevant to their needs, they will use any of the market places available. It could be via Ocean Market, the reference implementation from Ocean Protocol Foundation, for example. Metadata and curation on data and algorithms can be used to assess if particular data assets are worth purchasing or not.

<img src="/images/chapter15_1.png" />

**Purchasing Data**. The data itself is typically not purchased, it is only its access that is bought through Ocean Protocol. To gain access right to a particular data asset, one needs to purchase an access token. Data access tokens can be bought from Ocean Market. A data consumer will need to connect on the Ocean Market webpage with her MetaMask wallet, and ***SWAP 1 datatoken*** in the ***TRADE tab***. Of course, this requires to have some funding in the wallet..

<img src="/images/chapter15_2.png" />

That access right token is what is called datatoken in the Ocean Protocol ecosystem.

**Consuming Data**. Data consumption is made possible by spending the data access token to gain access as specified in the data asset smart contract parameters. Access conditions are provided from metadata.
An easy way to consume data is via Ocean Market as well. The data consumer goes to her desired dataset, and only needs to click the ***BUY button*** in the ***USE tab*** on the right to consume the data. This will automatically spend the datatoken and provide access to the data asset.

<img src="/images/chapter15_3.png" />
