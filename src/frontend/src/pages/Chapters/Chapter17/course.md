# Chapter 17: Who is an Algorithm Provider?
#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="mantaray">Not all fishes in the  Ocean are capable of coding their own algorithms. That’s why they need to rely on Algorithm Providers.</dialog>

Algorithm Providers are called Compute Providers in Ocean. They sell algorithms, instead of data itself. By making their algorithms available, the Compute providers are paid every time one of their algorithms is used.

**Algorithm Providers share their ML scripts to the market**. Data providers approve AI algorithms to run on their data and then Compute-to-Data orchestrates remote computation and execution on data to train AI models while preserving the privacy of the data. The blockchain-based smart contracts ensure that every data provider/AI practitioner can verify proper execution of their algorithm. In chapter 20 there is more about Compute to data.

**More accurate AI models.** AI practitioners & data scientists not only can access valuable, private data that was previously unavailable, but they can also leverage third party ML models available on the market. Data consumers can effectively train their algorithms using private data and a hosted model.

Let’s say you are a coffee farmer in Nicaragua, and you want to sell roasted beans at the local market. The prices at the market are subject to sharp changes depending on numerous factors, and you need to be able to sell at the best price possible to pay for expenses and develop your activity. Via Ocean Protocol, you can get the data you need (ex. historical price data, global meteorological data, ...etc.) and use it in a pre trained Deep learning model to and get a price forecast for the next 3 months (the same kind used by hedge-funds). You have never seen any data nor any algorithm, but now you know when to sell your beans to maximize your revenue.

<img src="/images/chapter17_0.png" />

The Ocean Compute-to-Data functionality solves the current tradeoff between the benefits of using the private data and the risks of exposing it. Ocean Compute-to-Data provides a means to exchange data while preserving privacy by allowing the data to stay on-premise with the data provider, yet allowing data consumers to run compute jobs on data to train AI models. 

Overall, a Compute Provider using Ocean Protocol Compute-to-Data functionality enjoys many benefits:

- **Privacy.** Compute Providers never see the data, so they cannot leak personal or sensitive information to the algorithm consumer.
- **Control.** Compute owners retain control of their algorithms, since the algorithm is never fully shown to the algo consumer.
- **Storage capacity.** Algorithm owners can share or sell their script without having to import any data, which is ideal for very large datasets that are slow or expensive to move.
- **Compliance.** Having only one copy of the data and not moving it makes it easier to comply with data protection regulations like [GDPR](https://docs.google.com/document/d/1dZsNiyaYoiqOM7MRdgmuBmCbFyV7DWMUrjNHSYDPMX4/edit#bookmark=id.p96246s1y7mf).
- **Auditability.** Compute-to-Data gives proof that algorithms were properly executed, so that AI practitioners can be confident in the results.

Once an algorithm is sold, that algorithm is sent to train or query some dataset in a Virtual Machine. The Algorithm and the data are both protected and cannot be seen by the algorithm consumer.

Wait, but how can you trust an algorithm supplied by another data scientist ? 
Ocean Protocol has built in financial incentives for every market participant to earn revenue by curating algorithms and reporting the best data assets. This is the main assumption in the Compute Quality Scoring Mechanism in Ocean Protocol.

The Compute Quality Scoring Mechanism in Ocean Protocol is designed in such a way that users lock OCEAN tokens into their algorithm, earning a cut of the transaction fees proportional to their share of the  total amount locked every time the algorithm is used. And anyone can lock OCEAN tokens into any asset to get a cut of the transaction fees of that asset.

This incentivizes participants in Ocean Protocol to invest in the data sets that they think will provide the most fee, and the total amount invested provides a signal on algorithm quality. You benefit from this market dynamic to judge the trustworthiness of an ocean asset taking liquidity as reference (how much are participants betting on this particular algorithm or dataset).
