# Deploying to GH Pages

- CD into the root of your app
  - For BE/FE node apps, this will the FE
  - Make sure BE & FE have separate repos
- Create a new branch called `gh-pages`:
  - `git checkout -b gh-pages`
  - This command simultaneously creates a new branch (`-b`) and switches you into it (`checkout`)
  - *Note:* If you have already created the branch & simply need to switch into it, omit the `-b`
- Merge your most recent code into the new branch:
  - `git merge master`
- Add, commit & push to the `gh-pages` branch:
  `git push origin gh-pages`
- Navigate to: `http://username.github.io/repositoryname`


---


### Updating your gh-pages code
- You can continue to develop on the `gh-pages` branch and anytime you need to update your github.io website, just `git push origin gh-pages`
- If you also want to keep `master` updated, just switch back into master and `git merge gh-pages`, then push your master branch `git push origin master`


---


Resources:
- https://pages.github.com/
