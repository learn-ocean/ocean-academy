# Chapter 20: Access Control Flow

#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="mantaray">Want to know how you can see in the dark?</dialog>

We saw in chapter 17 that Ocean Compute-to-Data (C2D) enables training models without actually seeing any data. But what does this mean exactly?

**Bring computation to the data.** Compute Providers can supply or send algorithms and be sure that the computed returned results are sufficiently aggregated or anonymized that the data is fully obfuscated and the privacy risk is minimized.

This is not the first attempt done to develop remote execution technologies.

Federated learning, a distributed ML technique, enables computation of data for training AI models across many data silos. This approach requires centralized orchestration and aggregation, however.

The Compute-to-Data functionality provides a means to exchange data while preserving privacy.

Before jumping into how you can Train AI models in data that you cannot see with Ocean Protocol we have to introduce two new components: the Operator Service and the Operator Engine. The Operator is a backend that orchestrates the workflow when a compute job is sent to some dataset.

- **Operator Service.** A microservice in charge of managing the workflow and executing requests. It directly communicates and takes orders from the Data Provider (the data provider’s proxy server to be precise) and performs computation on the data provided by the Data Provider.

- **Operator Engine**. A backend service in charge of orchestrating the compute infrastructure using Kubernetes as a backend. Typically, the Operator Engine retrieves.

But what happens under the hood when you send an algorithm to be computed on a dataset you can’t, or that you can only partially see? Here is the C2D Workflow.

<img src="/images/chapter20_0.png" />

Let’s say a company uses Ocean Compute-to-Data to set up their compute infrastructure (including Aquarius, Operator Service, and Operator Engine). Then, publish your data assets onto Ocean and receive a DID for the published data asset.

- **The Data Consumer sends compute access request to Ocean and publishes Algorithm to be used to compute on provider’s data.** Why? He/she believes the data asset could prove useful in their AV development, based on the description. They purchase access to train their AI model on that data via the compute service. The data buyer publishes their algorithm into Ocean and receives a DID (e.g. algoDID) for the algorithm.
- **The Data Consumer signs the Service Agreement** and pays for access to the compute service. The data buyer signs a Service Agreement and pays the required amount of OCEAN to an escrow smart contract, which will also be used for the payment for the compute service.
- **The Data Consumer sends a compute service request to provide and instructs the Operator Service to start compute**Once all actions are validated and completed, Aquarius, the metadata store, gets hold of datasets and algorithm (using dataDID and algorithmDID, respectively) and instructs the Operator Service to initiate the compute job using the given algorithm on given data.
- **After necessary validations, the Operator Service instructs the Operator Engine to initiate compute**In this last step the Operator Service performs checks on all inputs and, once ready, instructs the Operator Engine to start the compute task. It will spin a Kubernetes cluster process within the given parameters of data and algorithm.
- During data processing, The Data Consumer can inquire about the compute completion status anytime. If the buyer is not satisfied, he can choose to restart compute execution with the same or a different algorithm, until the compute access expires.
- Once the computing is done, the Data Consumer gets informed. The Data Consumer can choose to download or move those results to their storage. The Compute Service produces two types of results: (1) output and (2) execution logs. Consumers can choose either or both to be delivered to them upon completion. These results are published to AWS S3 storage upon completion, and an AWS S3 URL is shared with the consumer.

<iframe  title="Ocean Compute-to-Data | Technical Workshop" width="2200" height="1300" src="https://www.youtube.com/watch?v=qm8aZ9N5VgU" frameborder="0" allowfullscreen></iframe>

Compute-to-Data is language agnostic and supports all types of compute platforms, environments, and programming languages. Since this whole process takes place on the data provider side, data remains private and is not revealed to the consumer. In this setup, **the Data Provider is also the Compute provider.**
