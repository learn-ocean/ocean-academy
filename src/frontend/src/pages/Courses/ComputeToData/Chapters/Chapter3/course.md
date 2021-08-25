# Chapter 3: Selling Access to Data Compute in CtD

#### Difficulty: **2/5** \| Estimated reading time: **5 min**

<dialog character="seahorse">“Did you know that in sea horses, the male carries the eggs until they are born? Regardless of gender, the process requires some preparation.”</dialog>

Data owners may wish to sell their data with CtD on their own, or via a third party like the Ocean Market. Setup is specified in the _Access Type_ option.

<img src="/images/CtD/chapter_3_0.png" />

The CtD service made available from Ocean Market supports only limited computation power (1 minute processing time). It makes this implementation only suitable for building PoCs (Proofs of Concept, aka early functional prototypes) or deploying CtD on small Data Assets with simple algorithms to be run on them.

Other Service Providers that will offer CtD as a service are likely to emerge, making it both easy and scalable to delegate the CtD deployment.

Relying on third parties for CtD implementation will inevitably lead to the data being accessible by that third party infrastructure, which may represent a risk. So the choice of a third party would be of utmost importance for a Data Owner in this context.

But let’s look at what it takes to deploy CtD over a Data Asset. We assume here that Data Owners are selling the data themselves, on their own infrastructure, and we call them Data Sellers for the sake of simplicity. This is the best approach to ensure **data sovereignty**.

With CtD, a Data Seller will be selling access and operations conducted on their data, and return only the results ordered (output of computations and/or a log file).

**It is important to realize that selling data on CtD requires infrastructure**, as algorithms will be run on-premise, under the Data Seller’s control.

**Backend**

Data Sellers will need to provide computing power using Kubernetes Docker containers as backend. It is quite a handy implementation because Kubernetes is standard in the industry to deal with scalability.

Compute operations will happen within a Kubernetes (K8s) cluster, which will need to be set-up before the CtD can be deployed. The environment as well as job templates can be customized, according to [Ocean Protocol official documentation](https://github.com/oceanprotocol/operator-engine). Once the K8s cluster is operational, the CtD service can be spinned with as little as a 1-liner in Python.

Depending on data volume, velocity and variety, as well as complexity of algorithms and number of parallel Compute jobs to be run on this data, access to more or less computing power and memory may be required for Compute Providers. In fact, scaling is an important consideration when Compute Providers make back-end infrastructure choices. Most cloud providers offer auto-scaling of Kubernetes, but self-hosted environments are less flexible, so planning with a little extra capacity can be advised.

**Legal considerations**

Privacy risks emerge from 3 main sources:

1. Third parties; especially infrastructure providers represent a counterparty risk
2. Access control service to the data; it may be subject to mismanagement or hacks
3. Algorithms that are run on the data; they may leak or extract data

Legal agreements will not remove these risks, but they can at least mitigate them. The CtD technology is just a technology, data exchanges nonetheless happen within the scope of specific regulations.

**Access control**

Access to data and computation is granted by an Ocean Provider service; it grants access to the K8s cluster to authorized algorithms based on Ocean Protocol smart contracts (e.g. a Datatoken was paid to the Data publisher).

For each Data Set, Data Sellers can choose to allow various permission levels for algorithms to run:

* allow only selected algorithms, hand-picked by their DID (more to come in chapter 4)
* allow all algorithms published within a network or marketplace
* allow raw algorithms for advanced use cases circumventing algorithm as an asset type (not recommended as the most prone to data escape)

**Trusting external algorithms**

To understand why this is important, consider what would happen if an algorithm acts in a malicious way on the data. The algorithm could leak proprietary, private and/or personally identifiable data.

This poses a critical risk, and it is the data owner’s responsibility to choose which algorithms to trust. This is why it is advised to set data access permissions to private by default when publishing a Compute Data Set to avoid any risk.

Algorithms can be tested on a subset of the dataset, an anonymized or modified versions of the dataset and evaluated before they are selected. Auditing algorithms may well become a new service offered by third-parties in the value-chain of a data economy.
