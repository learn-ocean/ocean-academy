# Chapter 21: Access Control Flow

#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="mantaray">Want to know how you can see in the dark?</dialog>

We saw in [chapter 18](https://oceanacademy.io/ocean101/chapter-19) that Ocean Compute-to-Data enables training models without actually seeing any data.
But what does this mean exactly?

Bring Compute-to-data. Data/CtD consumers can supply or send algorithms to supported data assets, and be sure that the computed returned results are sufficiently aggregated or anonymized that the data is fully obfuscated and the privacy risk is minimized.

This is not the first attempt done to develop remote execution technologies.Federated learning, a distributed ML technique, enables computation of data for training AI models across many data silos. This approach requires centralized orchestration and aggregation, however.

The Compute-to-Data functionality provides a means to exchange data while preserving privacy.

Before jumping into how you can train AI models in data that you cannot see with Ocean Protocol we have to introduce two new components: the Operator Service and the Operator Engine. The Operator is a backend that orchestrates the workflow when a compute job is sent to some dataset.
- **The Operator Service**. A microservice in charge of managing the workflow and executing requests. It directly communicates and takes orders from the Ocean Provider (the data provider’s proxy server to be precise) and performs computation on the data provided by the Data Provider.
- **The Operator Engine**. A backend service in charge of orchestrating the compute infrastructure using Kubernetes as a backend.
But what happens under the hood when you send an algorithm to be computed on a dataset you can’t, or that you can only partially see? Here is the CtD Workflow.

<img src="/images/chapter20_0.png" />

Let’s say a company uses Ocean Compute-to-Data to set up it's computing infrastructure (including the Operator Service and the Operator Engine). Then they publish their data asset onto Ocean and receive a DID for the published data asset.

- **The Data Consumer must publish the algorithm she wants to run on the data in Ocean, in order to get it whitelisted by the Compute Provider**. The algorithm receives a DID (e.g. algoDID) in the Ocean ecosystem.

- **The Data Owner (aka the Compute Provider) has to approve the algorithm to be run on their data**. They may allow any algorithm to be run on their data, but that would typically not be the case for private, sensitive and more valuable datasets, so the Compute Provider will have to whitelist the particular algorithm from the Data Consumer.

- **The Data Consumer sends a compute access request to the Ocean Provider**; she purchases access to train her AI model on that data via the compute service of the Compute Provider by sending the latter 1 datatoken.

- **The Ocean Provider automatically sends a compute service request to the Operator Service to start compute** once all actions are validated and completed (i.e. payment of the datatoken). The operator Service fetches the specified  dataset and algorithm (using their dataDID and algorithmDID respectively) and relay this information to the Compute-to-data environment to initiate the compute job.

- **The Operator Service instructs the Operator Engine to initiate compute on-premise**. In this last step the Operator Service performs checks on all inputs and, once ready, instructs the Operator Engine to start the computing task. It will spin a Kubernetes cluster process with the given data and algorithm inputs.During data processing, The Data Consumer can inquire about the compute completion status anytime. If the buyer is not satisfied, he can choose to restart compute execution with the same or a different algorithm, until the compute access expires.

- **The Data Consumer is informed when the compute job is done**. The Data Consumer can choose to download or move those results to their storage. The Compute Service produces two types of results: (1) output and (2) execution logs. Consumers can choose either or both to be delivered to them upon completion. These results are published to AWS S3 storage upon completion, and its URL is shared with the Data Consumer.

**In this setup, the Data Provider is also the Compute provider**.
