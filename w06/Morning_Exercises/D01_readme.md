## Mongo Burger

![](https://media.giphy.com/media/ZagIu8mAKv8oE/giphy.gif)

Local restauranteurs have realized they can't compete with Shake Shack at the fast-food burger game.

One brave soul has decided to open Mongo Burger, a quick casual burger shack that differentiates itself based on the various assortments of cheese available on each burger.

But the owner can't keep track of all the cheeses manually! The owner has hired you to come in and build a Mongo database for all the cheeses available in the restaurant.

## Setup

No files are needed, but remember to run `mongod` in a terminal!

Then run `mongo` in a different terminal window.

## Completion

Get as far as you can! If you get stuck, check the [Mongo documentation](https://docs.mongodb.com/manual/crud/)!

## Assignment

Create a `cheesesDB` and a collection to store cheeses. Each document should store a **name, color, origin, and stink_level**.

***Keep track of your commands!***

#### Buying Cheese

Add these cheeses to your database:

- Roquefort, a yellow french cheese with a stink level of 5
- Epoisses, an orange french cheese with a stink level of 9
- Charolais, a white french cheese with a stink level of 5
- Maroilles, a white french cheese with a stink level of 10
- Durrus, a yellow Irish cheese with a stink level of 2
- Hooligan, a yellow American cheese with a stink level of 3
- Teleme, a white american cheese with a stink level of 2
- Stichelton, a white English cheese with a stink level of 4

#### Choosing Cheese

Now write [queries](https://docs.mongodb.org/manual/reference/operator/query/#query-selectors) to accomplish the following:

- Find all the cheeses
- Find all the French cheeses
- Find all the English cheeses
- Find all cheeses with a stink level of 2
- Find all cheeses with a stink level of 10
- Find all French cheeses with a stink level of 5
- Find all Irish cheeses with a stink level of 6
- Find all cheeses with a stink level of at least 4, but no greater than 8.
- Find all American and English cheeses.
- Find all cheeses that are not from France.

#### Restocking Cheese

The cheese game is changing constantly. Let's update our cheeses. Save your queries after you get them working in the command line.

- Change the stink level of Roquefort to 3
- Change the color of Teleme to "mauve"
- Delete the Hooligan cheese
- Change the stink level of Stichelton to be 7
- Add the cheese "Monterey Jack", an American cheese with a stink level of 0
- Delete Durrus
- Change the stink level of Teleme to be 1
- Delete Epoisses
- Change "Monterey Jack" to "Pepper Jack"
