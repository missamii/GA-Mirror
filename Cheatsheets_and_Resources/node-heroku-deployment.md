# Pushing a Node app to Heroku

**Notes:**
- You will be deploying your FE & BE separately
- BE: Heroku
- FE: gh-pages
- This means you'll need to init a git repo in each the FE & BE
- (hint: to delete a git repo run `rm -rf .git` from the root of the repo.)
- Heroku recognizes that an app is a node app by the existence of a `package.json` file in the root directory. Heroku reads the file to determine the version of Node.js that will be used to run your application on Heroku, as well as the dependencies that should be installed with your application.
- Make sure your `node_modules` dir is in a `.gitignore`. You do not want to push this to Heroku.


---


**Important: You will do all of the following to your BE node app!**


### Sign up for a heroku account
- www.heroku.com


### Install the Heroku toolbelt through homebrew
- From anywhere, run:
- `brew install heroku`
- `heroku login`


### Create a new Heroku project
- `cd` into the root folder of your node app (BE)
- `heroku create`
  - This command simultaneously creates an app on Heroku & adds a remote called `heroku` to your app (kind of like the reverse of when you git clone an existing app)
- Run `git remote -v` to see your remotes - you should have `origin` (if you've already sent up a repo on GH) and `heroku`


### Change the URL in your **FE**
- Go into your **FE** JS file and change the URL to your backend from `localhost:3000` to your new heroku URL. You can find it after you run the `heroku create` command above, it should look something like this:
`https://rocky-bastion-46302.herokuapp.com`
- We are doing this because your FE needs to know where to send AJAX requests. Your BE's URL is no longer `localhost:3000` because we've pushed it to Heroku.


### Config/Environment vars
- **Environment Variables:** (also called env vars, config vars, etc.) info you need to keep private, like API keys.
- Because your env vars are in your bash profile, and that will not be available on Heroku, you need to tell Heroku about your env var like this:
  - From the root of your node app (BE):
  - `heroku config:set LINKEDINAPIKEY='28cds9clkjai'`
- To see a list of all your Heroku config vars, run `heroku config`


### Change express port
- In your BE JS file, change the port that your app listens to from 3000 to:
```js
PORT = process.env.PORT || 80;

app.listen(PORT, function(){
  console.log('listening to events on a "port".')
});
```
- 80 is a production port. But `process.env.PORT` will let Heroku choose the port in case 80 isn't available.


### Add a `start` script in your `package.json`
- In your `package.json` there is a property called `scripts`
- Add another script (you probably have one called `test`, don't forget the comma)
- `"start": "node server.js"`


### Database
- Create a Mongo DB instance on Heruku using Mongolab:  
  - `heroku addons:create mongolab:sandbox`
  - This command simultaneously creates a DB and adds a `MONGODB_URI` env var
- Run `heroku config` and copy the URL of your Mongo DB
- Go into your BE JS file and change the url of your db from: `mongodb://localhost:27017/marvel_db` to the new one.


### Deploy to Heroku
- Add & commit
- Push to Heroku: `git push heroku master`
- You should also push to GH `git push origin master`


### Check on your app
- Ensure that at least one instance of your app is running:
  - `heroku ps:scale web=1`
- Add, commit & push to your heroku remote again
- Go to your heroku URL:
  - `heroku open`
- Or, go to heroku.com & see your app on your dashboard


### Deploy your FE to gh-pages
- Check out the gh-pages cheatsheet


### Troubleshooting
- If anything goes wrong, run `heroku logs` from the root of your node app. 


---


**Note:** Because Heroku is a free service, an app sleeps after 30 mins of inactivity, and an app can be active no more than 18 hours in a day before going to sleep. This means that when you visit your Heroku URL, it may take a few extra moments for it to "wake" & load. Remember, you need to wake your BE in order for your FE to work.
