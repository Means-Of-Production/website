#meansofproduction 
#documentation
#librarysocialism 

- [[#Entities|Entities]]
	- [[#Entities#Thing|Thing]]
		- [[#Thing#Title|Title]]
	- [[#Entities#Library|Library]]
	- [[#Entities#Borrower|Borrower]]
	- [[#Entities#Loan|Loan]]
		- [[#Loan#Gifts/consumables|Gifts/consumables]]
		- [[#Loan#Return locations|Return locations]]
	- [[#Entities#Waiting Lists|Waiting Lists]]
- [[#Services|Services]]
	- [[#Services#Geocoder|Geocoder]]
	- [[#Services#Notifications|Notifications]]
	- [[#Services#Bidding strategy|Bidding strategy]]
		- [[#Bidding strategy#Regular Bidding Strategy|Regular Bidding Strategy]]
		- [[#Bidding strategy#Quadratic Bidding Strategy|Quadratic Bidding Strategy]]


## Entities
### Thing
A thing is a good or service that someone can use.  

#### Title
A title is how we group multiple items that are identical.  Typically users browse titles.

### Library
A library is an organization to provide things to People or other organizations

### Borrower
A borrower is something that can consume Things from a specific Library.  A library card is an example of a Borrower, letting a specific Person borrow from a Library.

People might have multiple Borrowers associated with them, as they belong to multiple Libraries.

Libraries may also decide to allow Borrowers from other Libraries to borrow their Things, through #federation.

### Loan
A loan is how a Thing is given to a borrower.  It can have a return date specified, or with gifts have no return required.

#### Gifts/consumables
Items which are given are still considered loans - while the recipient need never return that item, if they no longer require it they should give it back within the library system, instead of selling it, etc.

#### Return locations
The location an item is to be returned is part of the loan.  
- For static libraries, this will usually be the library location.  
- For distributed libraries, this will be a location selected by the borrower
- For gift networks and BuyNothing groups, there is not a return location

### Waiting Lists
A waiting list is how libraries deal with scarcity among their items, where more people want to use an item than there are currently items available to use.  

They can operate on many different principles, from simple lines (you put your name down and wait your turn) to quadartic bidding based upon labor vouchers.

## Factories
### Fee schedules
Determines how a library will assess fees for lost, damaged, or overdue items.

### Money Factory


## Services
### Geocoder
This allows us to determine distances between [[Means of Production concepts#Physical Location|Physical Location]]s.  This can be based upon addresses, lat/long, etc

### Notifications
This allows us to notify users via a variety of means, depending on their and the library's preference
- email
- sms
- Matrix server

### Bidding strategy
These are used for [[Means of Production concepts#Waiting Lists| Waiting Lists]] that allow bids for skipping the line

#### Regular Bidding Strategy
Basic aution - whoever is willing to pay the most wins and pays that.

#### Quadratic Bidding Strategy
An auction, however the amount that a bid is counted at halves for every previous turn

So if a user bids $100, but has also held the item for the last 2 turns, the effective bid is $25, even though they would need to pay $100 for this bid.  If another user bids $30, they would instead be next

#### Value items
### Money
money can mean either usual currency, like USD or Euros, or also cryptocurrency.  [[meansofproduction/website/docs/cryptocurrency]] has proposed methods of using cryptocurrency for labor vouchers within a library, for example.

Money is held within an object to ensure that different currencies and values can be used coherently.










