# Chapter 6: Due diligence for liquidity providers

#### Difficulty: **3/5** \| Estimated reading time: **10 min**

<dialog character="mantaray">“With so many species cohabiting in the Ocean, distinguishing friend from foe is of utmost importance.”</dialog>

As the Ocean ecosystem grows, datatoken liquidity providers may find it difficult to navigate these uncharted waters. While you should do your own research (DYOR), some indicators can be helpful in assessing the viability of a given data pool or datatoken.

**Risks**
Staking and hodling datatokens incurs risks. But we got you covered; we prepared a practical checklist to mitigate them.

- *Full exposure:* If you hodl a datatoken, you are 100% exposed to the price movements of the datatoken. Price movements can be brutal. Illiquid datatokens, in particular, are highly volatile. But all datatoken will be volatile, based on the pool tokenomics, amount of staking and swapping, all of which influence the price.

- *Impermanent loss (IL):* Impermanent loss happens when your ratio of OCEAN to datatokens in the pool changes compared to when you started staking in the pool. For example, if many new LPs add OCEAN after you staked on the pool, the price of the datatoken will go up, and the ratio *OCEAN/datatoken* will go up to keep the 70/30 pool split. By holding a share of the liquidity pool, you will have less datatoken than if you had just been hodling the datatoken at that point, hence reducing your exposure to the asset. The larger the price change, either up or down, the bigger the impermanent loss.

  Why *impermanent*? Because as long as the relative prices of OCEAN/datatoken in the AMM return to their original state when you staked your OCEAN, the loss disappears. The impermanent loss becomes permanent only when you exit the pool, leaving you with negative returns.

- *Malicious data providers:* There exists the risk that a malicious data provider creates an AMM liquidity pool and then lures market participants to provide OCEAN liquidity. Afterwards they remove a significant portion of OCEAN liquidity from the pool, leaving datatokens behind. This is referred to as a *rug pull*. In this case, OCEAN holdings in the pool drop significantly, causing honest liquidity providers to lose OCEAN tokens.

Another risk is posed by *minting attacks*. If a data provider mints and injects new tokens into a liquidity pool, which s/he can do at any time, it will penalize liquidity providers. Their pool share decreases because of the increased supply of datatokens. Hence, it is important to research the publisher and his or her intentions. Reputable publishers will pledge to not remove or add tokens to the pool, provide a vesting schedule, or pledge to publish their plans in advance.

Finally, there is no protection against malicious sample files which one would download to check the dataset in Ocean Market. A malicious data publisher may try to sneak in an executable file (i.e. a virus or trojan).

- *Bugs and smart contract vulnerabilities:* Ocean Market and the underlying contracts are currently in beta. Although it was tested and audited thoroughly, there is always a slight risk that things go wrong in the early days.

**Based on my own risk profile, what can I look for when investing in a datatoken?**

First of all, you can start by evaluating the publisher. The risk of rug pulls and minting attacks always exists, so it might be a good idea to research the data providers’ reputation, trustworthiness and intent. When in doubt, you can try to get in contact with a publisher directly or consult the Ocean community.

The Ocean Market is designed for you to be able to conveniently find information about a publisher. If a publisher uses 3Box and you hover your cursor over the profile information, a box appears that shows the publishers website, social media and Github links. 3Box is a service that links all of them to the publisher's verified Ethereum address.

<img src="/images/defi/chapter_6_0.jpg" />

Online resources, such as Twitter, LinkedIn, Github, websites and blogs can be helpful to learn more about a data publisher. You can also check the publishers’ transaction history on an Ethereum blockchain explorer, such as Etherscan, which is linked in the dataset description header as well.

If you have questions, you can try to get in direct contact with the publishers. Most of them are active community members that will by happy to give you information about their projects and datasets.

**Best practices to evaluate datasets**
If you have a good impression of a data providers’ reputation and trustworthiness, you can continue to assess their datasets. An important question to ask is how the dataset can be used by entrepreneurs, data scientists or researchers to develop a product or solve a problem. What are potential use cases? Is the data in a usable format? How unique is the data and how difficult is it to obtain similar data elsewhere? Do you expect it to be in high demand?

If you find a convincing dataset, there are a few more characteristics to keep an eye on. You can, for example, check if the publisher promises to deliver regular updates, which would likely contribute to value accrual for the dataset.

If you are a data scientist or AI expert, you may scrutinize the sample data provided to assess what one could do with it, and get a sense of its market value.

There are also rating agency datasets available on the marketplace that track datasets and give an evaluation of their reliability and profitability. Moreover, you can take a look at the tokenomics, price and pool activity.

**Tokenomics**
No matter how good the data is, the dataset tokenomics will largely impact its potential for revenue (purchase). The price of a datatoken depends on the supply of datatokens in the liquidity pool and the number of OCEAN tokens staked. Therefore it might be a good idea to assess the total supply of tokens. If only few tokens are in the liquidity pool, the price of the dataset will be highly volatile.

Another criteria to pay attention to is the distribution of liquidity pool shares. The shares of the pool creator are displayed in the POOL tab. Note that data providers always start with 100% pool share at launch. You can check the pool share of other liquidity providers as well by following the “Pool” link to Etherscan.

<img src="/images/defi/chapter_6_1.jpg" />

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
Pool activity, such as adding or removing liquidity and swapping datatokens, contributes to the staking rewards from transaction fees. Consequently, stakers collectively profit from pool activity, which is a metric to consider when searching for suitable datasets. You can check the pool activity on Etherscan by following the link on the POOL tab.

**Rugpullindex**
In addition to the criteria above, [rugpullindex.com](rugpullindex.com) can be a useful source of information. The project is aims to rate and index data assets on the Ocean Market. It is open-source and free of charge. It looks at the distribution of liquidity providers' share in the pool (some form of GINI coefficient). The idea is that the more evenly distributed liquidity providers are, the less likely it is for a *rug-pull* to happen. The ranking is updated daily. However, be aware that a top-ranking does not rule out a rug-pull entirely.

Now you know what to check when assessing datasets on Ocean Market. Ultimately, it boils down to trust in the data provider. So it is recommended to carefully assess the providers reputation, trustworthiness and intent before taking action. The decision depends on your personal willingness to take risks. In any case, you can always start experimenting on Rinkeby for free.

Thirsty for more? Check out the excellent guide made by fellow community member Agent K <a href="https://agentk.medium.com/ocean-market-staking-guide-5b36294a86c0" target="_blank">Ocean Market Staking Guide</a>.
