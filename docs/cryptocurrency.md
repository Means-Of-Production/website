
#cryptocurrency 
#lefttech 
#laborvouchers
#meansofproduction
#economics 
#librarysocialism

## Cryptocurrency in library socialism


[TOC]



## Introduction {#introduction}

Library socialism[^1] is an emergent framework for imagining ownership and management of the commons. In a nutshell, library socialism can be thought of as moving all property into a library system.  Members of a library can use goods and services as they need them, and then return items as they’re no longer needed.  Many consumable items, such as food, may be considered permanent loans - or libraries may accept returns of processed items (such as compost for food). \
 \
This solution has the potential to gradually move past capitalism.  However it also has some issues which must be resolved if any library system is to work long term, much less supplant capitalism.  These include incentivizing work within the system, attracting capital resources for the system, preventing drain by private actors, and dealing with bad faith members who destroy or steal goods.

Cryptocurrency, while currently mainly a speculative asset, can offer some effective solutions to these problems.  Particularly with the use of smart contracts, it is possible to create tokens/currency which can have limitations placed upon them to behave better than money.  In addition, since speculation has fueled development, many tools already exist to manage this that we as library socialists can easily adopt for our own uses!  In particular the work done on Decentralized Autonomous Organizations (DAOs) will enable us to create library systems which are easy to manage while encouraging growth.


## Goals {#goals}



* maximize growth of capital resources that the library society can employ for the benefit of all
* minimize the amount of resources that are extracted by non-library (capitalist) systems existing outside the library
* incentivize investment by members into the library
* allow expansion of library services for the benefit of all
* reward creation of value by labor 
* prevent exploitation of labor within the library
* provide incentives to abide by library policies
* protect against members who do not return items


## Token types {#token-types}


### Membership {#membership}

The membership token indicates that a person who owns a wallet is a member of the library, and may participate in the library.  This means using items and services - as well as voting on matters that the library needs to decide on. \
 \
These tokens are **non-transferable** - once given to a wallet, that token cannot be sold or given away.  Only our organization/DAO can issue new ones.  In addition, we prevent more than one token from being held in a wallet, so each person can have only one vote, etc. \
 \
If a user becomes a problem, the library may vote to revoke their token (and membership).  They can then be issued another when the issues are resolved. \
 \
An example of this token has already been created on both the Ethereum and Polygon chains, as the **Means of Production** (MOP) token.


### Labor token {#labor-token}

Labor tokens are similar to the idea of labor vouchers used in many forms of socialist theory.  When people do useful work for the library, we recognize this by issuing them labor tokens.  We denominate these in hours.

Labor tokens are also **non-transferable**.  They are issued from the library to the wallet of the person who did the work, and can from there **only** be transferred back to the library (smart contracts provide this ability).  This prevents their use as cash, and of hoarding them to exploit others.  It also ensures that the library is able to enforce policy regarding labor tokens.


#### Uses {#uses}


##### Fines and fees {#fines-and-fees}

In the course of use of the library, a member may damage, lose, or return late items.  In order to discourage this, the library can impose fines to remain in good standing, and able to use items and vote.  These should be paid using labor tokens.  If a member does not have labor tokens, they can instead obtain them by donating money or items to the library, and exchanging the proceeds of that for labor tokens (discussed under Capital Tokens)

 \
A library may also want to create a base cost of use to its members - this membership fee would function exactly as a fine, and require labor tokens to pay. 


##### Withdrawls {#withdrawls}

 \
 \
Labor tokens may be, at the discretion of the library, transferred for other crypto currency (and eventually to cash).  This rate, which is set democratically by the library as a whole, is the wage rate that the library pays people for doing work for it.   The library must be careful to ensure that it has enough free resources to pay out any labor tokens - and if withdrawals reduce library funds, then this exchange rate should fall.  This price mechanism can help to prevent total withdrawals.  The exchange rate may also be set to automatically update with any withdrawals. \



##### Line skipping auctions {#line-skipping-auctions}

 \
Labor tokens also have another use within the library - that of line skipping.   \
 \
In a library, some items will be demanded by more members than we can supply at one time.  The usual means by which we deal with this are through **waiting lists** - as people use and return the item, the people waiting for the item get their turn, in the order they requested it. \
 \
However, to incentivize doing labor for the library, the labor token offers the holders another option - they can instead bid to have the next loan go to someone else. \
 \
Note that in this auction, a person does not have to bid only for themselves - they can bid for someone else to be given the next loan, and the total amount of bids for each person will determine who gets it.  This allows people who wish to work together to borrow library resources they will mutually benefit from, while still keeping labor tokens non-transferable.

When the current loan expires and the item is marked as ready to loan, the member who has the most tokens bid for the next turn will be loaned the item, and any tokens bid for that member will be transferred to the wallet of the library.

Tokens will be held in escrow during an auction, to prevent double bidding the same tokens.


###### Quadratic costs for line skipping {#quadratic-costs-for-line-skipping}

To prevent anyone from using their capital or saved labor tokens to monopolize a resource, the cost for line skipping should increase as a member seeks to hold the item for longer and longer. \
 \
Taking a cue from the concept of [quadratic voting](https://en.wikipedia.org/wiki/Quadratic_voting), we do not prevent the current holder from bidding on the item again, but we do make it increasingly expensive.  As such, if the bid is for the person currently borrowing the item, and they have consecutively held the item num_turns, their bid will cost `2^num_turns` more.   So your bids become worth ½, then ¼, and ⅛,etc as you hold the item more and more turns, but still cost as much.

This way, the cost to monopolize an item will quickly increase, incentivizing rotation while still allowing people to indicate their preferences more granually than a simple binary of on a list or off. \



#### Bonuses {#bonuses}

Certain things should pay a bonus above regular hourly tokens - but this is highly limited, as we as library socialist do not want to reintroduce a system of wage slavery. \
    

Perhaps bonuses should be yet another token, with slightly less use than regular labor tokens?

Items for bonus



* onerous work - if you have to clean shit, you shouldn't have to as long
* automation - If you can design a system to save 100 hours of work, you should get labor vouchers for what you saved to encourage innovation, but we also want to prevent ownership of the machine users by designers  
    * But who determines the amount saved?
* Highly skilled labor - we handle this, when needed, through capital tokens


### Capital token {#capital-token}

Capital tokens are issued when the library receives value from the outside that is not labor - usually a donation of cash or items.  These are denominated in cash value.  In the case of item donation, the mechanism of a fair means of appraisal must be determined by the library. \
 \
Capital tokens are **transferable** - if the holders wish to give or sell them to others, the library does not care.  A secondary market in capital tokens (by listing them on crypto exchanges), if one develops, would not impact the library at all, though it could make members more willing to donate funds for them if they have an outside value as well.


#### Temporary loans to the library {#temporary-loans-to-the-library}

In many cases, especially with distributed libraries, people may choose to make an item available for lending only temporarily. \
 \
In this case we will wish to compensate the owner for the depreciation, but not the full cost of the item. \
 \
If an item is damaged beyond repair, then the library can pay capital tokens as a form of insurance.


#### Highly skilled labor {#highly-skilled-labor}

Likewise, some services which require extensive training or licensing should be compensated for the investment of human capital outside of the library.  Examples would be doctors providing medical care, who have gone to schools they paid for themselves. \
 \
To determine the amount of capital that should be paid - we should determine the ratio of the contract of services provided to a full working career. \
 \
Deciding to reimburse education will be determined by need and voting in the library.


#### Exchange {#exchange}

Capital tokens can be exchanged for labor tokens.  This incentivizes increasing the resources of the library as a whole. \
 \
The rate of exchange of capital for labor tokens will be set democratically by the library - this is also a reflection of the wage discussed above under labor token withdrawals.  The library may choose to keep a lower rate of exchange of capital than this wage, but it can never be higher (otherwise a profit can be made simply trading cash for capital tokens, then labor, then back to cash).

 \
 \



## Example flows {#example-flows}


#### Basic work {#basic-work}

A member does 5 hours of work for the library.  

They are paid 5 labor tokens from the DAO.


#### Member donates capital {#member-donates-capital}

A member donates goods worth $500 to the library.  Our library has no loans greater than 3 months available, and a current wage of $50/hour.

They are granted 500 capital tokens from the DAO

They can exchange these for 10 labor tokens at the current exchange rate.


#### Members bid to skip a line {#members-bid-to-skip-a-line}

Matt and Doug both have 10 labor tokens from work they have done, and wish to throw a party on a yacht. \
Shelly has 15 tokens, and wants to go sailing as well. \
Carol is currently using the yacht, until Monday. \
 \
Shelly adds her name to the waiting list. \
Doug adds his name to the waiting list \
 \
Doug, not wanting to wait, starts an auction for Doug and pledges 10 tokens for Doug.  His tokens are placed in escrow. \
Shelly bids 15 tokens for Shelly.  Her tokens are placed in escrow.

Matt bids 10 tokens for Doug.  His tokens are placed in escrow. \
 \
On Monday, Carol returns the yacht on time. \
The auction ends, with Doug having the most tokens pledged. \
Shelly’s tokens are returned to her from escrow. \
Matt and Doug’s tokens are transferred to the library. \
Doug is loaned the yacht.


#### Member bids to keep extending loan {#member-bids-to-keep-extending-loan}

Doug has had the yacht for 2 turns now, having bid up the line last time

He wishes to keep the yacht for yet another turn, but Shelly is on the waiting list. \
 \
Doug starts an auction for the yacht, and bids 100 hours.  Since he has already had the yacht two times, his bid COSTS 100 hours, but only counts as 25 hours (100/2^2).  100 hours are put in escrow from him. \
 \
Shelly bids 30 hours for the yacht.  30 hours are put in escrow from her. \
 \
She wins the auction, and Doug has to return the yacht for her use for a standard period.


#### Highly skilled labor {#highly-skilled-labor}

Alice spends 500K to go to medical school, expecting a career of 40 hrs/wk for 50 years, for a total of 100,000 hours.  

She agrees to provide medical services for 5 hours a week for library patrons for a year  

The contract should award her $25 in capital tokens a week, in addition to 5hrs of labor tokens per week  - this is the cost of her education divided by the total hours - ($5/hr), multiplied by the amount of hours she works for the library. \



## Frequently Asked Questions {#frequently-asked-questions}


### Energy use {#energy-use}


#### “Isn’t cryptocurrency horrible for the environment?” {#“isn’t-cryptocurrency-horrible-for-the-environment-”}

it can be.  Bitcoin (BTC) absolutely is - however nothing here uses BTC.  We are currently based on the Polygon chain, which [claims](https://blog.polygon.technology/polygon-reaches-first-sustainability-milestone-by-achieving-carbon-neutrality/) to be carbon neutral.  The Ethereum network it uses is not - however it is currently moving from Proof-of-Work to Proof-of-Stake, and thus will cut its energy use by over 90%.  Other projects such as [Energy Web](https://www.energyweb.org/) can also provide a means to store library capital in a way to drive climate justice in interactions with the capitalist world, until library socialism is able to meaningfully address climate change through direct democracy.


### Why crypto at all? {#why-crypto-at-all}


#### “Why not just run a database and a website?” {#“why-not-just-run-a-database-and-a-website-”}

Most of the library software does, for now, run on a database, rather than on the blockchain.  However in the areas marked here, the blockchain can offer a few advantages.



* Transparency - especially in any financial matters, it is crucial that the validity and honesty of transactions and organizations be clear to all involved.  A distributed ledger aids in this, by ensuring that any financial decisions made by the organization are available for community scrutinization.
    * Privacy of loans is also a large concern here, so while financial matters might be held on chain, actual loan records should not be.  If limited aggregate information about loans is needed, sanitized information can be provided via Oracle systems.
* Tooling - large efforts have been taken in the VC glut of crypto to develop tools for many of the capabilities that a library organization would need, with the benefit that we do not have to devote scarce resources at first to them, and can instead focus on building library capabilities.  Some are
    * Voting - the [Aragon](https://aragon.org/) project supplies ready made, secure, voting abilities for use by libraries.  This includes template for one person, one vote organizations, instead of just corporate style stock control
    * Banking - because DAOs include a wallet, they bypass for now the need to set up bank accounts and corporate or legal entities in the capitalist system, at the cost of forcing people seeking to donate cash to the project to navigate (or be given help navigating) crypto exchanges.   
* Distributed mechanism - a central server can, long term, mean that there is a centralized bureaucracy that controls and maintains it.  This provides a natural collection point of power, to develop into hierarchy, and in the most and worst case a nomenklatura.  Blockchains do have a unique property, when using smart contracts, of completely making the executive functions of any governing body subject completely to the legislative ones which approve the contracts.
* Avoidance of tech monopolies and government attacks - currently our systems are hosted on Google Cloud, a capitalist entity.  While the construction of a library socialist cloud platform is one of the projects our orgs will want to work on, using capitalist networks is a necessary evil.  In the absence of a library socialist cloud platform, the system must either be error prone and require large amounts of - or be subject to possible removal by government or corporate entities.   And while both these options are fine with general library software, the ledgers of financial records for the library will require a higher standard to inspire and retain confidence.


#### “Isn’t crypto inherently capitalist?” {#“isn’t-crypto-inherently-capitalist-”}

Not necessarily.  While the headlines are taken by speculation of capital  desperately trying to fight off declining rates of profits, the underlying technology is just . . . technology.  Distributed ledgers and computation have no ideological basis (or if they do, they actually favor decentralization, and thus have a slight anti-capitalist bent).   \
 \
Some technologies, such as Bitcoin, do favor centralization due to their commitment to the Proof of Work means of consensus, and the subsequent need for specialized hardware.  Once again, though, the proposal listed here avoids any such technologies, instead focusing on widely distributed Proof of Stake mechanisms, and long term can use blockchains even less tied to capital than that. \


Currently the (meager) funds in the Means Of Production DAO are held using BREAD tokens, which enable us to ensure that interest on idle funds can fund more left-wing projects.  More information can be found at the [Breadchain](https://breadchain.mirror.xyz/boFKBZL9B2OS9lqKJ1a9BZPZgE7RhCpu1RQ0LQPJP1I) project.


#### “Crypto is so unstable, we can’t use it” {#“crypto-is-so-unstable-we-can’t-use-it”}

The dollar and euro value of crypto assets does fluctuate wildly.  However since the library will in no way seek to value itself or its members with these assets (our only internal valuations are in hours), this has the effect only in deciding how to price hours when importing or exporting cash.  These can be priced in dollars or euros, eliminating any impact from crypto speculation other than gas fees.  As we use the Polygon network, gas fees are also largely eliminated (typical transactions are less than a cent). \
 \
One way this can impact the library, however, is in funds held, if the library uses a DAO rather than a bank account.  To mitigate this risk, a library can hold their funds in stablecoins - both DAI and USDC are on Polygon.  While recent events have shown some stablecoins to be anything but, these two have shown no issues past or present, primarily because they require large colleteralization in third party assets.  DAI offers the advantage of being able to be used with Breadchain as well (see link above).


#### “How can you tell who owns a wallet?  I can just set up hundreds and bypass any checks!” {#“how-can-you-tell-who-owns-a-wallet-i-can-just-set-up-hundreds-and-bypass-any-checks-”}

On its own these crypto tokens offer no proof of identity - anyone can create a new ETH wallet at will, and begin a new identity. \
 \
Much like any other library, however, a library socialist library can demand proof of identity (whatever works for each library) for membership.  Anything from external identification (a photo ID) to collateral in labor or money, to biometrics, might make sense - or simply the sponsorship of an existing member.  

Issuing a membership token/library card requires the votes of the library - or a smart contract that the library votes to implement or change at will.  Likewise, any suspected fraud or double identity can likewise be taken to the membership for a vote, and if found true, the offending membership tokens can be revoked.


### Buying line cuts {#buying-line-cuts}


#### “This is so unfair!” {#“this-is-so-unfair-”}

While incentives to bring capital and do labor for the library are clear, giving the ability of some to use wealth to avoid waits seems undemocratic, unlibrary, or otherwise just wrong. \
 \
However this does have several benefits which outweigh these concerns.



1. it incentivizes both productive labor and increases in the capital stock of the jointly held library.  Which makes all members of the library richer materially.
2. It allows a more granular measure of desire of members than a simple binary on or off the list.  If it’s very important to one or more members to have an item at a specific time, they can indicate that through bids.  Likewise, since anyone can still sign up for a list without bidding, there is no minimum needed to eventually get an item
3. It avoids the development of black markets to swap positions (often a result of a failure of point #2)
4. It avoids the incentivization of the non-value labor of working the system.  In the abstract sense of most economics, to maximize their personal advantage, a member should put themselves on a waiting list for every item, in case they want it, as it costs them nothing.  Without a way to counteract this, this just means that people willing to waste the most time (and force others to) signing up for items they probably don’t want will have a market advantage to getting items, and possibly exploit this as well.  Offering a bid system helps to nullify this where education and social pressure can’t.  That hour used to sign up for items you don’t really want could instead do something useful for the library, and enable you to get what you want as well.

The use of quadratic bidding on this is key.  In order to maintain an exclusive lock on the means of production, a would-be bourgeois capitalist would be required to supply an increasing number of labor vouchers as each loan expires.  Since they only have so many hours in the day, they would either need to find an increasing number of other members to support their desires instead of their own (eventually running out of members) - or they would need to add an increasing amount of capital to the library constantly to keep winning auctions at an increasing cost. \
 \
In the former case, the library is acting democratically - the membership is deciding, for whatever reasons, to maintain lending to one person. \
 \
In the latter, the geometric growth of the bids needed means that quickly the would-be capitalist will need to import quickly doubling amounts of capital - and very soon, in order to prevent the resource from going to someone else, they’d need to donate much more than the replacement value of the item.  In which case the library would quite happily buy or build another item. \
 \
And finally, in an extreme case where a bad actor is working to monopolize things for a brief time - say, to hold all tools for ransom during harvest time - the membership of the library can always revoke the membership of the bad actor through a one person one vote mechanism on membership tokens, even if only temporarily, to avoid artificial scarcity.


#### “This is just capitalism with extra steps!” {#“this-is-just-capitalism-with-extra-steps-”}

It isn’t, because the bidding mechanism can ONLY operate with labor vouchers, which cannot be transferred or hoarded.  Without that, it’s impossible to force exploitation of labor through ownership of library goods.  Monopolization of any good in the long term is prevented by quadratic bidding, as well as a democratic membership check on any action. \


While there are still markets, in the form of line auctions, there is no ability to exploit labor for private profit (as labor vouchers can only be transferred to the library), or to turn exploited surplus value into capital.  Instead any surplus value not paid to the workers in vouchers is held by the library, which is democratically held by all. \
 \
In other words, you have socialism, if not quite communism yet.


#### “but ultimately shouldn't libraries house the items in the numbers needed/wanted by their community?” {#“but-ultimately-shouldn't-libraries-house-the-items-in-the-numbers-needed-wanted-by-their-community-”}

Yes, and part of the reason we want library socialism is that a system based on usufruct can not only make everyone richer, but hopefully allow us to direct the surplus value currently given to the rich to instead focus on moving us as a species to a post-scarcity society as quickly as possible - i.e. communism. 

 \
However, until we can do that, there are going to be items which are more demanded than what the community can provide.  Given that, we will need to ration their use at least temporarily.

The existence of waiting lines, and how intense (number of people, size of bids) can help us even to quantify that and see which items are in most demand, and help inform the library of what we should spend resources to acquire more of in the long run.


### Labor {#labor}


#### “Does high skill mean more important” {#“does-high-skill-mean-more-important”}

No - it does however usually mean that that type of labor is more difficult to obtain, particularly in the case where library socialism coexists with capitalism.  In that case it’s likely that a labor (like medicine) that takes a large amount of study was done outside the library socialist system - and that likewise the market outside will price that labor as such.   \
 \
We do recognize all labor as equal, which is why labor vouchers are delineated in hours, and “high skill” labor is NOT given larger values.   \
 \
While the subject of “human capital” is a contentious one, and one that capitalist apologist economists use to hide many of the contradictions of capitalism, a limited subset of it can be useful for our needs here.  Just as in the case of direct cash or good infusion, the library is seeking to incentivize the movement of capital (in this case, resources spent for education) into our non-exploitative ecosystem.  In order to do that, we make sure we will reimburse that portion of the capital they bring for use in the library.

Over time, we would seek to internalize training and education - and remove cost (and pay students for their labor done for the future) from the equation.  At that point we would not need to provide capital reimbursement, and so only labor tokens would be issued for high-skill services.


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
     https://www.neweconomy.org.au/journal/issues/vol2/iss4/library-socialism/
