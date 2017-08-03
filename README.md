# Farmers Market

Farmers Market is a place for people to exchange goods. The objective for the user is to buy low and sell high. A leaderboard page displays the ranking of users who are currently playing the game.

## Technologies

- Mongo, Express, Angular, Node, Grunt, ES6, Babel

## Setup

> Make sure mongo is running in an open tab

- `npm install`
- `grunt` - _Leave this running in it's own tab_
- `npm start` - _Create a new tab for this_

All client work should be done in the `client/` directory and all server work should be done in the `server/` directory. Files in the `server/public/` directory should **not** be modified directly.

## Base Functionality

> Document your project and your code as you go!

- [x] Ability to register and log in
- [ ] Display a list of available items to purchase on the Marketplace page
- [ ] Ability to buy or sell items available for purchase
- [x] Server should randomly change product prices (within a 1 - 15 cent range) every 10 seconds for each product
- [ ] Client will check for updates every 8 seconds
- [ ] Leaderboard page that displays the top 10 users ranked by the most cash on hand
- [ ] Leaderboard is refreshed every 10 seconds automatically

### Assumptions

- Each item has unlimited quantity
- Prices for items may not go below 50 cents and may not go above 49 dollars and 99 cents.
- User may not spend more money than they have
- Players ranked by cash on hand, no need to account for current supply of goods
- We're using polling so it's possible the client prices will be slightly behind the server, **always use the server price when completing a transaction**

## Stretch Goals

- [ ] Leaderboard should take into account current inventory
- [ ] Market items should be moved from an array into the database
- [ ] Use Angular Material to layout and style your content
- [ ] Add a sell all inventory button
- [ ] Host on Heroku
- [ ] Each market item should have a limited inventory

## Documentation

**TODO:** document your project here.
