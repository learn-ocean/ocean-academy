# Chapter 19: Introducing Compute-to-Data

#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="mantaray">We’ve met the data and algorithm fishes. But there is another species that sits in-between them: this fish looks like a black-box, it provides both data and the infrastructure to run algorithms on that data. </dialog>

**Ocean Compute-to-Data** is the functionality that solves the current tradeoff between the benefits of using private data and the risks of exposing it.

Compute-to-Data allows data buyers to buy the results of some computing (i.e. AI model or other data outputs) rather than the data itself. Data owners can monetize their data without having to actually share it with anyone else, by sharing only computation outputs with data buyers.

**The data owner runs compute jobs on their data to train AI models while the data stays on their premise** (or premises that they control and trust, like by the Ocean Protocol Foundation) at all time.

Overall, the Compute-to-Data functionality provides many benefits:
- **Privacy**. The data buyer never sees the data, so they cannot get or leak any personal or sensitive information.
- **Control**. The data owner never puts its data at risk by opening it to a third party; this also ensures the data stays private and secure..
- **Storage capacity**. Data never moves, so neither the owner nor the buyer of the data compute have to worry about extra storage or bandwidth that could be expensive and slow.
- **Compliance**. Having only one copy of the data and not moving it makes it easier to comply with data protection regulations like GDPR in Europe.
- **Auditability**. Compute-to-Data gives proof that algorithms were properly executed so that AI practitioners can be confident in the results.

**Using Compute-to-data**. Using Compute-to-Data is almost as easy as gaining direct access to the data itself for the data buyer. Upon use, the buyer will be redirected to a dedicated page where they can load the code to be run on the dataset.

<img src="/images/chapter18_2.png" />

There are two fields to fill in order to send the script to be computed on some private data.
  1. First, select the image to run an algorithm, using either Python or Javascript, the first supported environments.You want to choose a python with pandas image if you have a .py script or you can run a nodejs10 image if you are doing analysis in Javascript.
  2. Secondly, drag and drop a script allowed by the data owner. Ocean Protocol will take the algorithm and the data, and it will orchestrate the computation of the output with the Kubernetes clusters of the Compute Provider.

The Compute Provider is the person or institution handling the compute operations onto the data. Compute can be provided by the Ocean Protocol Foundation (OPF) through the Ocean Market for free. This is a solution for rapid prototyping, low risk and low computation assets.

Compute on larger, or more sensitive data assets should be provided by the Data Providers themselves. Although the compute infrastructure may be delegated to a trusted third party, on-premise compute provision is the only way to keep the data 100% unexposed. Data owners who want to take no risk with their data should wrap their data in their own Compute infrastructure to monetize it with Compute-to-Data.

More on this in our [*Introduction to Compute-to-Data* course](https://oceanacademy.io/ComputeToData).
