# Chapter 6: Due diligence for liquidity providers

#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="squid">“With so many species cohabiting in the Ocean, distinguishing friend from foe is of utmost importance.”</dialog>

As the Ocean ecosystem grows, datatoken **liquidity providers (LP)** may find it difficult to navigate these uncharted waters. While you should do your own research (DYOR), some indicators can be helpful in assessing the viability of a given data pool or data token.

**Risks**
Staking and hodling datatokens incurs risks. But no need to worry; we prepared a brief overview for you and will provide ideas on how to circumnavigate them in practice.

- *Full exposure:* If you hodl a datatoken, you are 100% exposed to the price movements of the datatoken. Price movements can be immense for illiquid datatokens and depend on the pool tokenomics and various factors: staking and swapping both influences the price.

- *Impermanent loss (IL):* Impermanent loss happens when the pool’s ratio of OCEAN to datatokens changes compared to when you staked them in the pool. Therefore, having OCEAN tokens staked in datatoken pools during high price divergence movements will create an impermanent loss. The larger the change is, either up or down, the bigger the unrealized loss.

  Why “impermanent”? Because as long as the relative prices of OCEAN/datatoken in the AMM return to their original state when you staked your OCEAN, the loss disappears. However, sometimes impermanent loss becomes permanent, leaving you with negative returns. 

- *Malicious data providers:* There exists the risk that a malicious data provider creates an AMM liquidity pool and then lures market participants to provide OCEAN liquidity. Afterwards they remove a significant portion of OCEAN liquidity from the pool, leaving datatokens behind. This is referred to as a “**rug-pull**”. In this case, OCEAN holdings in the pool drop significantly, causing honest liquidity providers to lose OCEAN tokens.Another risk is posed by **minting attacks**. 

  If a data provider mints and injects new tokens into a liquidity pool, which s/he can do at any time, it will penalize liquidity providers. Their pool share decreases because of the increased supply of datatokens. Hence, it is important to research the publisher and his or her intentions. Reputable publishers will pledge to not remove or add tokens to the pool, provide a vesting schedule, or pledge to publish their plans in advance.

- *Bugs and smart contract vulnerabilities:* Ocean Market and the underlying contracts are currently in beta. Although it was tested and audited thoroughly, there is always a slight risk that things go wrong in the early days.

**Based on my own risk profile, what can I look for when investing in a datatoken?**

First of all, you can start by evaluating the publisher. The risk of rug pulls and minting attacks always exists, so it might be a good idea to research the data providers’ reputation, trustworthiness and intent. When in doubt, you can try to get in contact with a publisher directly or consult the community in the Ocean Farm Telegram channel (take into consideration that they might have their own interests in mind). 

The Ocean Market is designed for you to be able to conveniently find information about a publisher. If a publisher uses 3Box and you hover your cursor over the profile information, a box appears that shows the publishers website, social media and Github links. 3Box is a service that links all of them to the publisher's verified Ethereum address.

<img src="/images/defi_chapter_6_0.png" />

Online resources, such as Twitter, LinkedIn, Github, websites and blogs can be helpful to learn more about a data publisher. You can also check the publishers’ transaction history on an Ethereum blockchain explorer, such as Etherscan, which is linked in the dataset description header as well.

If you have questions, you can try to get in direct contact with the publishers. Most of them are active community members that will pleasantly provide you information about their projects and datasets.

**Best practices to evaluate datasets**
If you have a good impression of a data providers’ reputation and trustworthiness, you can continue to assess their datasets. An important question to ask is how the dataset can be used by entrepreneurs, data scientists or researchers to develop a product or solve a problem. What are potential use cases? Is the data in a usable format? How unique is the data and how difficult is it to obtain similar data elsewhere? Do you expect it to be in high demand?

If you find a convincing dataset, there are a few more characteristics to keep an eye on. You can, for example, check if the publisher promises to deliver regular updates or if a data sample is available. Both likely contribute to the value of a dataset. But beware: samples can be malicious, especially if a sample comes in the form of an executable file.

There are also rating agency datasets available on the marketplace that track datasets and give an evaluation of their reliability and profitability. Moreover, you can take a look at the tokenomics, price and pool activity.

**Tokenomics**
No matter how good the data is, if a dataset succeeds (which means it is frequently consumed) in practice is largely dependent on its tokenomics. The price of a datatoken depends on the supply of tokens in the liquidity pool and the number of OCEAN tokens staked. Therefore it might be a good idea to assess the total supply of tokens. If there are few tokens, the dataset becomes unsellable in practice because the price rises beyond rational, as soon as market participants provide liquidity or remove datatokens from the pool. Remember you earn staking rewards from transaction fees, including sales transactions, of a dataset. If it can’t be sold, you probably won’t earn much.

Another criteria to pay attention to is the distribution of liquidity pool shares. The shares of the pool creator are displayed in the POOL tab. Note that data providers always start with 100% pool share at launch. You can check the pool share of other liquidity providers as well by following the “Pool” link to Etherscan.

<img src="/images/defi_chapter_6_1.png" />

**Price**
The price of a datatoken depends on the supply of tokens in the liquidity pool and the number of OCEAN tokens staked. But how does this relate to the real value of the data?

Valuing data is hard. You can try to assess a fair price by:

- thinking about how much it would cost the provider to gather the data and maintain it. Then you can add a margin on top of that and use this as a guide
- estimating the usability of the data. Is the data in a usable format? Are there use cases where this particular data can cater to a consumers’ needs?comparing the data with other assets on the market
- comparing the data with other assets outside the market
- consulting a professional data scientist or analytics company		

More information about pricing is available <a href="https://blog.oceanprotocol.com/value-of-data-part-two-pricing-bc6c5127e338&sa=D&ust=1612204558036000&usg=AOvVaw0V_hOsQQFsMgtH5Yd3UKzd" target="_blank">here</a>

How does the price of the dataset in Ocean Market compare with your value estimation?

**Pool activity**
Pool activity, such as adding or removing liquidity and swapping datatokens, contributes to the staking rewards from transaction fees. Consequently, stakers collectively profit from pool activity, which is a metric to consider when searching for suitable datasets. You can for example check the pool activity on Etherscan by following the link on the POOL tab.

Finally, because of the risks described in the beginning, it is always recommendable to look for signs of malicious intent when assessing data assets on the Ocean Market.

**Rugpullindex**
In addition to the criteria above, rugpullindex.com can be a useful source of information. The project is open-source, free of charge and aims to rate and index data assets on the Ocean Market. It takes into account the liquidity and equality of liquidity shares of liquidity pools and is based on the idea that the more liquidity providers with an equal share back an asset in the market, the less likely it is for a “rug-pull” to happen. The ranking is updated daily. However, be aware that a top-ranking does not rule out a rug-pull entirely.

Now you know what to mind when assessing datasets on Ocean Market. All in all, you finally need to trust a data provider. So it is recommended to carefully assess the providers reputation, trustworthiness and intent before taking action. The decision depends on your personal willingness to take risks. In any case, you can always start experimenting on Rinkeby for free.

Now you may familiarize yourself with the excellent guide made by fellow community member Agent K <a href="https://agentk.medium.com/ocean-market-staking-guide-5b36294a86c0" target="_blank">Ocean Market Staking Guide</a>