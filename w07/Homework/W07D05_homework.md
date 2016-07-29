# RECIPES

I'm going to deliberately leave this fairly open-ended.

I have created and deployed a recipe manager API for you.

It can be found at
https://mighty-stream-47210.herokuapp.com/api/v1/recipes

I want you to build a full React CRUD app: view all recipes, view one recipe by title, make a new recipe, update a recipe, delete a recipe. You MUST have the view and create functions complete to recieve credit for this homework.

The API endpoints are as follows:

`GET '/'` -- returns general information on the API

`GET '/api/v1/recipes'` -- returns all recipes in DB (note that's v1 as in version 1 not an "I")

`GET '/api/v1/recipes/:title'` -- returns that recipe

`POST '/api/v1/recipes/new'` -- makes a new recipe (make a `recipe` object in the request body to hold the recipe properties)

`PUT '/api/v1/recipes/:title'` -- updates a recipe. IMPORTANT: you must have a `recipe` object in the request body. It must contain ALL fields. I.e., if the old version of the recipe is:
```js
{
  title: "banana pancakes",
  author: "liza",
  difficulty: "medium",
  time: 30,
  ingredients: ["bananas","other things"],
  instructions: "Liza, start cooking!"
}
```
and you want to update the `difficulty` field to `"hard"` you need to send over an object that looks like this:
```js
{
  title: "banana pancakes",
  author: "liza",
  difficulty: "hard",
  time: 30,
  ingredients: ["bananas","other things"],
  instructions: "Liza, start cooking!"
}
```
DO NOT just send `{difficulty: "hard"}` or it won't work.

`DELETE '/api/v1/recipes/:title'` -- deletes that recipe

### HOMEWORK SUBMISSION:

Your issue *MUST* answer the following questions:

(1) does your frontend display all recipes on request?

(2) can the user search for a given recipe and get just that one from the API?

(3) can the user post a new recipe to the API?

(4) can the user modify a recipe?

(5) can the user delete a recipe?

If functionality isn't working, talk about what isn't and why you think that is.

### ADDITIONAL HOMEWORK SUBMISSION REQUIREMENTS!

Include screenshots of your app for each of the following:

1. Displaying all recipes
2. Displaying the recipe the user searched for
3. Your form, filled-out, to create a new recipe (with you as the "author") AND a screenshot of the 'view all' from the API to show that the recipe was successfully added to the DB
4. Your form, filled-out, to edit an existing recipe AND a screenshot of the 'view all' from the API to show that the recipe was successfully modified.
5. Create another recipe with a silly name. Show screenshots of the "view all" from the API before and after you successfully deleted it from the API database.
