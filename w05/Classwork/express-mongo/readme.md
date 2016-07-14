# express mongo and crud

### to run:

- `npm install`
- `mongodb` (in it's own tab)
- `nodemon` (in it's own tab)

use `curl` or create a front-end that ajax's into your back-end to test
the routes

### api routes:

- GET|POST /contacts
- GET|PUT|DELETE /contacts/:id

use this `schema`:

    {
      "firstName": <string>,
      "lastName": <string>,
      "email": <string>,
      "phoneNumbers": {
        "mobile": <string>,
        "work": <string>
      },
      "twitterHandle": <string>,
      "addresses": {
        "home": <string>,
        "work": <string>
      }
    }


### todo

- create a front-end for this back-end. look at your phone, see how the ui
and ux work. what kind of data is it saving?

- spend some time designing your app. how will you ask the user to enter
information? how will update your "view". think about how you can programmatically
add elements (like forms) and remove elements (like lists).

- create a view that ***lists all the contacts**, **shows a single contact**,
**lets you enter a new contact**, **edit or delete and existing contact**
