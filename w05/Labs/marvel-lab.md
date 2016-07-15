# Marvel Lab

Your task: Create an app that allows users to search for either a Marvel character or comic. When the results are displayed, the user can choose to 'favorite' that character or comic. The user can then see a list of all favorites, add one, edit, find, and delete one.

The Marvel API is a tough one, consider yourself lucky that you have instructions on how to get started. You guys will be on your own for the APIs you choose for P2.

This lab best mimics what you'll be doing for P2, which will include an external API, a DB, and your own API.

Tip: it's ok to do most of this in the console until the end. Don't worry about HTML elements & appending until you're able to successfully make your API calls to Marvel & your backend.


### The specifics
- Include a dropdown with two options: characters and comics
- An input box
- A search button
- Display the results of the search (all the results or just the first one)
- Display a 'favorite' button next to the result/s that when clicked will add the name of the character/title of the comic to your mongo db
- Include a way to do the following:
  - See all favorites
  - Add one
  - Find one
  - Delete one
  - Update one


---


### Marvel API
- Take a couple minutes to get familiar with the Marvel API docs: https://developer.marvel.com
- Find out how to sign up & register for an API key.
- Add `localhost` to Your Authorized Referrers list here: https://developer.marvel.com/account

### Setup FE
- You'll have frontend and backend directories for this lab.
- Your FE should include the following files:
  - `.gitignore`
  - `apiKey.js`
  - `index.css`
  - `index.html`
  - `index.js`
- Don't forget to include the jQuery CDN.
- In`apiKey.js` add a global variable called `MARVEL_PUBLIC_API_KEY` and set it equal to your public key. Literally all that should be in the file is this:
```javascript
MARVEL_PUBLIC_API_KEY = 'a84d62b5bd767whateveryourapikeyis';
```
- In `.gitignore`, simply add the name of the file you just created: `apiKey.js`

### Setup BE node app
- BE should include:
  - `.gitignore`
  - `server.js`
- Remember to npm init & install the correct dependencies.

### Get up & running
- BE: run `nodemon` from top level of BE dir & navigate to `localhost:3000`
- FE: run `http-server` from top level of FE dir & navigate to `localhost:8080` (or whatever your terminal says)
- In another tab, start your `mongod` server by typing `mongod` from anywhere
- In another tab, drop into `mongo` by typing `mongo` from anywhere

### Getting started
- Check out the 6 main endpoints that the API offers: Characters, Comics, Creators, Events, Series, Stories: http://developer.marvel.com/docs
- Remember what an endpoint is? Of course you do. It's a URL we use to access the API's data. Sometimes there are multiple endpoints, it depends on the API.

### Characters
- When the user clicks the submit button, make an API call to the endpoint `characters` with the query string `name` (which is the value of the input box)
- Hint: your URL should follow this structure: endpoint url + ? + `apikey=` + your key + & + `name=` + character name to search for
- Parse the return object until you find these properties. Append them to the DOM with vanilla JS:
  - Name of the character
  - ID
  - Description
  - Thumbnail (this one is slightly tricky! You have to add the `extension` to the end of the `img` then set that url as the source of an img tag.).

### Comics
- When the user clicks the submit button, make an API call to the endpoint `comics` with the query string `title` (the val of the input box)
- The return object should contain an array of about 20 results somewhere in it.
- The URL you'll make an AJAX call to will follow a similar structure as above, but it will be to a different endpoint, and instead of `name`, you'll use `title`
- Parse and append the following:
  - id
  - title
  - page count
  - description
  - thumbnail
  - price

### DB
- All of that was taking place in your FE app. Now let's start on the BE and dive into our DB for info.
- Create your DB
- Create the routes that will allow you to see all favorites, add, find, delete and update.


---


### Submitting
When you submit your homework Sunday night, answer yes/no to the following questions on the checklist:

- Is the user able to choose an endpoint from the dropdown?
- When the user clicks the search button, is an API call made to the appropriate Marvel endpoint?
- Are the results appended to the DOM?
- Do the results have a 'favorite' button next to them?
- Does the favorite button add one to the DB?
- Do the following buttons work: See all favorites, add, find, delete, update?







//
