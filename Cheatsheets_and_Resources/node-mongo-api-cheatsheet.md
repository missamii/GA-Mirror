# Node, Mongo, APIs Cheatsheet

- First, create `frontend` and `backend` directories in your project

**Backend - node app**
- Create a js file (I like to call my BE JS file `server.js` bc it's server-side code)
- Create a .gitignore file, inside type `node_modules`
- `npm init` from the root of the backend dir
  - This command auto-creates your `package.json` file
  - Make sure your js file matches the 'entry point' or 'main' js file listed in your package.json
- Install your local dependencies using the command `npm install <package name> --save`
  - This command will auto-generate the `node_modules` directory
  - Some common ones:
  - cors
  - body-parser
  - express
  - mongodb
  - request
  - path
- You can also install `nodemon` as a development dependency: `npm install nodemon --save-dev`
- Require these at the top of your JS file
- Provide the Mongo connection url
  - `mongodb://localhost:27017/db_name`
- Specify which port it should listen to (3000 is customary)
- Write your BE routes; make sure the verb + path match the FE
- Hide your API keys in your bash profile (located at `~/.bash_profile`) using this format:
  - `export MARVEL_PUBLIC_API_KEY="21p983298479328749283728"`
- Anytime you edit your `.bash_profile` you must reload the terminal!
  - `source ~/.bash_profile`
  - Or close & reopen the current Terminal tab
- Retrieve them in your JS file like so:
  - `process.env.MARVEL_PUBLIC_API_KEY`
- This hides your keys locally


**Frontend - static files**
- Create html, css & JS files
- Decide when you want certain AJAX calls to be made to the BE (ie when user clicks search button, make AJAX call to BE & send along the search value, etc.)
- Make sure your FE routes match your BE routes


**Note:**
- If you download someone else's node app, they will (hopefully) have hidden their node_modules in their .gitignore, so you must `npm install` from the root of the node app. This command reads the package.json and installs the listed dependencies.


---


**Terminal**
- Four tabs open:
- From root level of the BE dir, run `nodemon` & navigate to `localhost:3000` in Chrome
- From root level of the FE dir, run `http-server` & navigate to `localhost:8080` in Chrome
- From anywhere, start your `mongod` server
- From anywhere, start your `mongo` shell (optional)  


---


**Frontend purpose:**
- User interaction (UI) (HTML & CSS)
- Send, receive & display info to/from the BE (our API) via AJAX

**Backend purpose:**
- Receive info from the FE (via AJAX)
- Retrieve info from the DB (via MongoClient connection)
- Make AJAX requests to external APIs (using the package `request`)
