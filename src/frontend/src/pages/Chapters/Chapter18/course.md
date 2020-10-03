# Chapter 18: Who is Data/Compute Consumer?

#### Difficulty: **3/5** \| Estimated reading time: **5 min**

<dialog character="mantaray">We’ve met the data fishes. Now let’s scrutinize the species who look to acquire data to build models: the data consumers.</dialog>

Simply speaking, anyone who purchases priced data, free data or an algorithm on Ocean Protocol is called a **Data Consumer**. A collection of free data samples to play with is made available in the [Ocean Commons](http://commons.oceanprotocol.com).

**Finding Data.** When someone is looking to find a specific algorithm or dataset relevant to their needs, they will use any of the market places available. It could be via Ocean Market, for example. The metadata and the quality score of the data (which works the exact same on data as on compute algorithms) will be used to assess if the data is worth purchasing or not.

<img src="/images/chapter18_0.png" />

**Purchasing Data**. The data buyer will use the DID as a reference to create a service agreement. A service agreement is a contract signed between the buyer and the data provider using their Web3 wallet (Metamask, in our case). This will call a sequence of smart contracts to get the payment done and get data access tokens for the data. OCEAN token is sent to the contract and swapped for the amount of datatokens required (in our previous example, 1.0 datatoken was needed). Now, the buyer has enough datatokens in their wallet to get access to the data.

**Consuming Data.** At that stage, the datatoken owner can exchange the token for access to the data. An easy way to do that is via Ocean Market. They just connect with Metamask when they are on the Ocean Market webpage. They go to their desired dataset, and only need to click the “use” button on the right to consume the data (either by running a Compute-to-Data operation, or by simply downloading a dataset - yes it is still possible to work the good old way).

<img src="/images/chapter18_1.png" />

**Consume Datatoken in Compute-to-data.** Using Compute-to-Data is almost as easy. Upon *use*, the buyer will be redirected to a dedicated page where they can load the code to be run on the dataset.

<img src="/images/chapter18_2.png" />

There are two fields to fill in order to send the script to be computed on some private data.

First, select the image to run an algorithm, using either Python or Javascript, the supported environments for now. In the future it is expected that Data Consumers will be able to browse through different Compute Providers and choose one that support their algorithm/environment.

You want to choose a python with pandas image if you have a .py script or if you are doing analysis in Javascript you can run a nodejs10 image.

Secondly, drag and drop a script allowed by the data owner. Ocean Protocol will take the algorithm and the data, and it will orchestrate the computation of the output with the Kubernetes clusters of the Data Provider.

[![Publish a Compute-only asset](http://img.youtube.com/vi/dmvdARC6xxU/0.jpg)](https://www.youtube.com/watch?v=dmvdARC6xxU "Publish a Compute-only asset")
