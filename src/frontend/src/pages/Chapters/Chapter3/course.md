# Chapter 3 : Key Concepts of Blockchain

<dialog character="jellyfish">You are now below water. This is a new environment. It feels like flying, it’s awesome. In fact most divers will tell you that they got hooked to the experience of moving freely in 3D from their very first dive. Same here, you will get a taste of a new universe enabled by collaborative technologies, in uncharted territories.</dialog>

A Blockchain is simply a ledger which chronologically records the facts that it is programmed to record. This ledger is duplicated across participants, and public, which allows everyone to check that its entries are correct. This removes the need for a central ‘validation authority’: you don’t need to trust, when you can verify.

Bitcoin was the first use case for blockchain technology. Bitcoin’s blockchain is used to record monetary transactions in a verifiable and trustable way. On that blockchain, you can write that you’re sending 0.01 Bitcoin to someone only if your account on record has a balance of at least 0.01 Bitcoin. This is a rule that was programmed in this blockchain.

Building on this foundation, Ethereum was the first ledger to allow the recording of not just transactions, but any kind of operation, making it essentially a distributed computer.

The Bitcoin and Ethereum blockchains are permissionless: anyone can operate or transact on these blockchains. Private blockchains exist, but they are limited in scope. And they wouldn’t be well suited to create an inclusive data economy: Ocean Protocol wants to be for anyone who has data or expertise, not just a select few.

You can think of a blockchain as a Google sheet with universal read and write access, but that can only accept new inputs if they are compliant with what the sheet was programmed to accept. Old entries can not be altered or deleted. Only those with a valid input can change the document, and everyone can see that no one cheated. Except the blockchain is a public good, not a private service.

But let’s get to it. Here comes your equipment to start swimming in the blockchain space.

## Install Metamask

The only thing you need to connect to the blockchain world is a wallet.

Installing a wallet will by default create a new account for you, which is unique, and is needed to transact on the blockchain. This account has a public address and a private key (basically a password) to sign transactions. Your account will allow you to buy and sell data, data assets and services through the Ocean Protocol network.

Wallets come in many forms and flavours, but a popular option is Metamask. A simple browser ad-on. It is quick to install, but it takes some planning: now is the time to get prepared to write down, backup and carefully save your _seed phrase_ and password.
That seed phrase should be kept secret and safe, it’s the unique key to your address. There is no other way to access your wallet than with this seed phrase and password, so you really do not want to lose access.

<a href="https://metamask.io/download.html" target="_blank">Download Metamask</a>

Metamask is available for Chrome, Firefox, Android and iOS. Select the one you want to install (typically the one recommended by Metamask); you will be redirected to the App/extensions store.

<img src="/images/image12.png" />

Install MetaMask.
On a laptop, it will get added as a browser extension, in the top right corner of your browser.
Click on the fox icon and get started. You can decide to provide anonymized information to Metamask or not.

<img src="/images/image23.png" />

Create your Wallet.
Provide a secure password to secure access to your wallet. Read the T&C and agree.
Now MetaMask will generate a secret backup phrase for you. This is called a seed. A seed is a collection of random words (in Metamask it’s 12 words) used as a unique starting point to create your accounts. Consider and treat it like a root password.

Although Metamask provides an option to back-up your secret phrase later, it is strongly recommended that you do this immediately. This is the unique key to your wallet; if you lose it, you lose everything that is associated with it.

Feel free to read more on public-key cryptography and how seed phrases are used to create addresses (with code in Python). It’s not needed here, but it’s interesting anyways.

Confirm your secret backup phrase and finish your MetaMask wallet setup.

<img src="/images/image15.png" />

That’s all. You now have a Web3 Wallet connected to Ethereum!
Let’s now see what you can do with it.

Your wallet address will look like: 0x4A22c8D17A7287902212d8089D65c0F5b1428ca6

Excellent, you now have the base equipment and we can get started.

## Get play money

Get play money from a faucet
Faucets are places where it’s possible to get tokens for free. Usually, they hand play money, basically tokens that have no market value. Many developers use faucets to start building apps in a safe and free environment before launching them on the main network.

You will get your play money from a faucet from Rinkeby, one of the main test nets for Ethereum. The entire test net uses play money, so the fees paid for transacting on the network do not represent any real financial value. Using free tokens in the Ethereum main net wouldn’t be smart because transaction fees would still be incurred in ETH, and therefore cost money. And you probably don’t want to pay fees while spending time on Ocean Academy.

First, you need to connect to the Ethereum test network called ‘Rinkeby’.Go to metamask and select Rinkeby Test Network in the upper central dropdown list. Your wallet address is the same as in the Ethereum Network, but everything is free to play now.

<img src="/images/image6.png" />

Go to https://faucet.rinkeby.io/ and follow the instructions provided.

You will be asked to post your ETH address on Twitter or Facebook; the faucet providers do this to ensure that people can do this just once, and don’t empty the faucet too quickly.

Copy your ETH wallet address by clicking on ‘Account 1’, the default account created by Metamask. Clicking will automatically copy your wallet address to the clipboard.

<img src="/images/image4.png" />

Paste your ETH wallet address into a new Tweet and post the tweet publicly.
Being kind is optional but recommended :)

<img src="/images/image27.png" />

Paste a link to that post in the faucet and define how much you look to receive.
3 Ethers is enough for now. It all gets automatically confirmed.

<img src="/images/image13.png" />

Wait a few seconds, refresh, and there you are: you have 3 ETH in your wallet.

<img src="/images/image18.png" />

Congratulations, you are now an active Blockchain participant!

## Exercise :

Type your public ethereum address from your wallet in the online editor on the right side of this page.
