# Chapter 4: Consuming a Data Asset with CtD

#### Difficulty: **2/5** \| Estimated reading time: **5 min**

<dialog character="octopus">“In experiments octopuses solved mazes and completed tricky tasks to get food rewards. They're also adept at getting themselves in and out of containers. (source: <a href="https://www.nhm.ac.uk/discover/octopuses-keep-surprising-us-here-are-eight-examples-how.html">NHM</a>... How handy!”</dialog>

AI researchers, developers and startups developing AI and data products are dependent on large quantities of data to build new and better models. With CtD, more data is likely to be made available because data Owners can safely earn revenue from it, which may be used to train better models.

Algorithm developers may also sell their algorithms on Ocean Protocol, getting paid every time one of their algorithms is used, and their algorithms may be used on data made available via CtD.

**Algorithms are an asset type**

An algorithm in the Ocean Protocol stack is an asset type, just like a Data Asset is.

Algorithms can be public, if the access to the algorithm is sold, or private, if a computation service is sold (the algorithm is only available as part of a Compute job without any way to download it).

An algorithm can be sold for a fixed price or for a variable price through a Datatoken pool, just like any Data Asset.

**What do CtD algorithms look like? **

An algorithm that runs over a Compute-to-Data instance is composed of the following:

* an algorithm code
* a Docker image (base image + tag)
* an entry point

The docker image provides the version of the interpreter (e.g. Python 3.9) and the required dependencies (e.g. Numpy, Pandas).

Compute-to-Data currently supports python and node.js, but it is language agnostic, and could support any computing platform and environment.

An algorithm set to public can be downloaded for its set price, while an algorithm set to private is only available as part of a Compute job without any way to download it. This is set in the algorithm DDO, the Decentralized Document which stores the metadata on the specific asset on Ocean Protocol. Each algorithm has a unique DID (Decentralized ID) in the ecosystem, just like Data Assets.

Importantly, if a CtD algorithm is set to private, it must be published on the same provider service (e.g. server or cluster) as the Data Asset it should run on.

**Consuming a dataset with CtD**

To consume a dataset in the context of CtD means to run an algorithm on a specific dataset. Anyone can run algorithms that are made publicly available onto private Data Assets with CtD.

However, the Data Asset Seller may set restrictive authorizations to datasets, and the Data Consumers will have to opt for an algorithm that is approved by a Data Seller.

A Data Consumer may want to run their own algorithm onto the dataset, and may not be able to do so because the Data Seller has restricted access to just a handful of vetted algorithms.

In that case, the Buyer may contact the Data Seller and ask whether the Seller authorizes the algorithm on the Data Asset. The Buyer may get their algorithm audited to demonstrate it will not extract private information and get it authorized by the Data Seller.

**Legal considerations**

Just like for Data Sellers, Data Buyers face some risks. What if a Data Seller does not provide the required computation accurately? This begs for complementing the approach with legal agreements that go beyond the simple usage of Ocean Protocol or Ocean Market.

**Transacting over the Ocean Market with CtD**

Transactions are straightforward on the Ocean Market, and work pretty much the same as simple Data Asset purchases via direct download. In addition to selecting and paying for the Data Asset, a Buyer has to select and pay for the algorithm to be run on the data, from the set of authorized algorithms for that Data Asset. In the Ocean Market, authorized algorithms are listed next to Data Assets sold with CtD.

This is why it is interesting for Data Buyers to make their algorithms available for use on Ocean Protocol; they can be audited, vetted, and selected in Ocean Market UI.

A Data Consumer may not have any algorithm or data at all; she can simply leverage third party algorithms or ML models available on the market on Data Assets available. Data Consumers can effectively train algorithms using private data and a hosted algorithm, combining them just like legos!
