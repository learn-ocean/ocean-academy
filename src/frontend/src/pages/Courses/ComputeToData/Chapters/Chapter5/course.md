# Chapter 5: Inner Workings of CtD

#### Difficulty: **4/5** \| Estimated reading time: **10 min**

<dialog character="dolphin">“It takes a village...”</dialog>

Compute-to-Data adds a new role to the data marketplace, the “Compute Provider”. Compute Providers provide computation on data instead of the data itself. For the sake of simplicity we assume that the Compute Provider is the same entity as the Data Owner, even if this task could be delegated to a trusted partner.

We saw in [chapter 3](https://oceanacademy.io/ComputeToData/chapter-3) that Ocean Protocol Foundation provides such service, with minimal implementation for Compute jobs ordered via the Ocean Market, where the infrastructure is delegated to Ocean Protocol Foundation.

In a data sovereign setup, which is the base case we assume throughout this module, **the Data Seller is also the Compute Provider.**

Access to Data Assets is managed by smart contracts and a component called Ocean Provider.

The Ocean Provider is the service that validates access to the data based on what happens on the blockchain and smart-contracts; i.e. the data was paid for with a Datatoken, hence the service can be provided. The Ocean Provider is often run on a dedicated server for security reasons.

In addition to the Ocean Provider, two components orchestrate the workflow in the backend when a Compute job is sent to some dataset: the Operator Service and the Operator Engine.

**The Operator Service** manages the Compute-to-Data workflow, communicates with the Data Provider, and manages the computation.

The operator service is coordinating the entire CtD process in the backend. It:
* Allows for the execution of data access and Compute endpoints via an API.
* Interacts with the Data Provider’s infrastructure (on-premise, or cloud).
* Starts/stops/executes computing instances with the algorithms provided by the Data Consumer.
* Retrieves the logs generated during executions.
 
**The Operator Engine** represents the computing systems where the computation will be executed.

The Operator Engine is in charge of orchestrating the Compute environment using Kubernetes as backend where each Compute job runs in an isolated [Kubernetes Pod](https://kubernetes.io/docs/concepts/workloads/pods/). Typically the Operator Engine retrieves the workflows created by the Operator Service in Kubernetes, and manages the containers necessary to complete the execution of the Compute workflows.

The Operator Engine is in charge of retrieving all the workflows registered in a K8s cluster, allowing to:

* Orchestrate the flow of the execution
* Start the configuration pod in charge of fetching the computation dependencies, algorithm and data. This is called “pod-configure”.
* Start the pod including the algorithm to execute on the dataset, the “pod-compute”.
* Start the publishing pod that publishes the new assets created.

The Operator Engine doesn’t provide any storage capability, all the state is stored directly in the K8s cluster.

**Starting a Compute job**

Before the flow can begin, the following pre-conditions must be met:

* The Asset DDO has a Compute service.
* The Asset DDO Compute service must permit algorithms to run on it.

The Ocean Provider endpoint is referenced in the Datatoken created on Ocean Protocol. This way, Data Assets can be consumed just by receiving a Datatoken, without any other dependency.

But what happens under the hood when someone orders a Compute job on a dataset that one can’t, or only partially see? Here is the CtD Workflow.

<img src="/images/CtD/chapter_5_0.png" />

Let’s say a neuroresearch lab in Europe uses Ocean Compute-to-Data to set up its computing infrastructure.

They have published their Data Assets onto Ocean and receive a DID for the published Data Asset. Another lab in the US may want to use the data from the European lab without having to deal with GDPR compliance (the data relates to EU residents) and train or refine an AI model.

* **Preparation.** The EU lab has a set of approved algorithms available. Data Consumers are welcome to choose and run any of them. If the US lab has further requirements, it can publish a new  algorithm to be run on the EU lab’s data. In that case, the US lab will have to publish their algorithm into Ocean and receive a DID for the algorithm.
* **Buying Compute access**. The US lab buying the data pays for access to the Compute service by sending a Datatoken to the EU lab (the Data Owner), and starts the data consumption by calling the startOrder() function of the Datatoken smart contract. Doing so, the US lab implicitly triggers a Compute access request to Ocean Provider from the EU lab.
* **Passing access control**. Now the algorithm needs to pass access control. Ocean Provider compares the DID of the algorithm to a set of allowed algorithms, specified in the DDO of the dataset. If the US lab selected an algorithm that is already approved, it will pass the access control. If the US lab published a new algorithm, it needs to contact the EU lab for approval before it is allowed to run on the data.
* **Fetching the algorithm and the data**. The Ocean Provider now starts fetching the data and the algorithm by decrypting their URLs, which are stored encrypted on the blockchain. The Ocean Provider then relays them to the CtD environment. Once all actions are validated and completed, the Ocean Provider instructs the Operator Service to initiate the Compute job using the given algorithm on the given data.
* **Computation. **The Operator Service sets the stage with the configure-pod and performs checks on all inputs. Once ready, it instructs the Operator Engine to start the computing task, carried out by the compute-pod. It will spin a Kubernetes cluster process with the algorithm specified on the data specified, and provide the Compute on-premise in the EU.
* **Publication**. Once completed, the publish-pod takes care of  the publication of computation results, which consist of the output and execution logs. These results are published to any S3 format storage (AWS, IPFS, ..etc) upon completion, and are accessible to the Buyer via the Ocean Market.
* **Downloading results**. The US lab, the Data Consumer, gets informed once the computing is done. It can download those results, accessible via Ocean Market, to their storage.

So, collaboration in Neuroscience, which exposes some deeply sensitive personal data, is made possible across geographies with CtD, enhancing the pace and magnitude of scientific discoveries.
