# SQL Movie app

You're building the backend for an app that lets you search local movie theaters and see what's playing. You've got the following schema:

**Movies Table**
Fields:
  - ID (integer, primary key, required)
  - Title (text, required)
  - Rating (text)

**Movie_Theaters Table**
Fields:
  - ID (integer, primary key, required)
  - Name (text, required)
  - Movies_Playing (integer references Movies(ID))

Once you've created the database with this schema, insert the following movies into it (you have to insert the movies before the movie theaters!! Why?):

* 1, Citizen Kane, PG
* 2, The Wizard of Oz, G
* 3, The Quiet Man, NULL
* 4, North by Northwest, NULL
* 5, Last Tango in Paris, NC-17
* 6, Some Like it Hot, PG-13
* 7, A Night at the Opera, NULL

Now create some movie theaters:

* Odeon, showing Last Tango in Paris
* Imperial, showing Citizen Kane
* Majestic, no movie currently playing
* Royale, showing Some Like it Hot
* Paradiso, showing The Quiet Man
* Nickelodeon, no movie currently playing


## QUERIES

Use SQL queries to complete the following tasks

Select the title of all movies

Show all the distinct ratings in the database.

Show all unrated movies.

Select all movie theaters that are not currently showing a movie.

Select all data from all movie theaters and, additionally, the data from the movie that is being shown in the theater (if one is being shown).

Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.

Show the titles of movies not currently being shown in any theaters.

Add the unrated movie "One, Two, Three".

Set the rating of all unrated movies to "G".

Remove movie theaters projecting movies rated "NC-17".
