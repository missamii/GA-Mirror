# Intro to APIs, AJAX, JSON

**Thursday, July 7th • W04 D04**

### Lesson Objectives
- Reference API docs
- Make API calls in the browser
- Define API `endpoint` // the URL where we can access raw data
- What is the purpose of API `query strings`?
- Make an API call from your website using `jQuery AJAX`
- Use jQuery's `promise` methods to handle AJAX responses
- Define `JSON` and describe when it can be used
- Define `CDN`
- Parse an API response
- Render new HTML content using data loaded from an Ajax request
- Install a JSON formatter (Chrome Extension)
- Register for API key

---


# Part I • Making API calls in the browser

Concept:
- We talked about the definition of an `API` during the Speech Recognition lesson
- API: `Application Programming Interface`
- At the end of the day, it's just a set of data provided for public use.
- We access that data through a URL called an `endpoint`

OMDB API:
- What does the OMDB API offer? Movie data.
- It returns a single movie that best matches your search
- example: I want all the data about the movie Titanic
- Make a request to that api (which is just a store of data) & get back the data I want

Let's check out the OMDB docs!
- Check out the OMDB docs to find out how to construct queries
- Review the parts of the API:
  - What is the `endpoint`? // the URL we use to access the data
  - `Parameters`
  - What are `query strings`? // the way we specify the data we want
- Formula of a query: using `?` and `&`
- Example queries:
  - http://www.omdbapi.com/?t=buffy
  - http://www.omdbapi.com/?t=buffy&y=1992&type=movie
  - http://www.omdbapi.com/?t=buffy&type=series
- Why do we need query strings?
  - We don't want all the data from the set, right? That would be millions of movies.
  - We want to **constrain** the information & receive data back that only matches our specifications.
  - I don't want **all** movies back, I only want movies that have **Titanic** in the title for example.
  - You are essentially sending instructions to the API about how to narrow down the results that are sent back to you.
  - We specify our constraints by using `query strings` & `parameters`
  - The people who built the API designed the query strings for this purpose
  - Every API has different parameters; you must read the documentation to find out what they are and how to use them.

**What is this Javascript object thingie it's returning?**

### What is serialized data?
All data sent via HTTP must be in string format. We need to send structured data, meaning `arrays` & `objects`, but for security reasons we aren't allowed to. To get around those security constraints, we put the structured data in *string representation* of that data. Strings do not pose a security threat the way other data types do.

We can then transmit that string. After it is received, we can parse it back into Javascript.

There are **two** major serialized data formats:  

### 1- `JSON`
`JSON` stands for "JavaScript Object Notation", and has become a universal standard for serializing native data structures for transmission.

```json
{
  "users": [
    {"name": "Bob", "id": 23},
    {"name": "Tim", "id": 72}
  ]
}
```

**What's the difference between `JavaScript` and `JSON`?**
- See how JSON has strings around the keys? Javascript does not.
- This is because JSON is a **string representation** of the Javascript data we're sending.
- This is the Javascript version of the JSON above:

```javascript
{
  users: [
    { name: "Bob", id: 23 },
    { name: "Tim", id: 72 }
  ]
}
```

### 2- `XML`
* `XML` stands for "eXtensible Markup Language", and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly, and cumbersome to parse. However, you will find legacy usage of it across the web.

```
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

**Many APIs publish data in multiple formats, for example...**
* OMDB JSON [http://www.omdbapi.com/?t=brave&r=json](http://www.omdbapi.com/?t=brave&r=json)
* OMDB XML [http://www.omdbapi.com/?t=brave&r=xml](http://www.omdbapi.com/?t=brave&r=xml)
* MarkitOndeman JSON [http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL)
* MarkitOndeman XML [http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL)


---


**Exercise:** `exercise-1.md` • 15 minutes


---


# Part II • Making API calls from our website
**We've been making API calls in the browser, but how do we make them from our website?**

***** Laptops closed *****

### Live demo
Part I:
- New HTML & JS files
- When we click button, make API call
- Log the response

Part II:
- Add HTML elements where we want to append text
- Parse response into variables
- Append to DOM with vanilla JS

### What is a CDN?
- Content Delivery Network
- An easy way for us to use the jQuery library without downloading it
- Caveat: must be connected to interwebs for it to work

### What is jQuery?
- A library that extends the functionality of Javascript
- Only going to be looking at the AJAX method today

### What is AJAX?
- AJAX stands for "Asynchronous Javascript and XML" (AJAX)
- Nowadays indicates a set of technologies that allow us to make requests *without* reloading the page
- How does it work? Server-side requests are sent asynchronously on the client without having to send an actual browser request that reloads the page.

### Parts of the jQuery AJAX method
- Promises: kind of like an if statement -- tells the computer what to do upon `done`, `fail` or `always`

### API keys
While the majority of APIs are free to use, many of them require an API "key" that identifies the developer that is requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

**Try hitting the Giphy API:**

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat)

* With key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

> It is very important that you not push your API keys to a public Github repo.

##### JSON Formatter Chrome Extension
https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en


---


**Exercise:** `exercise-2.md`


---


**Lab:** Shake it Spear API


---


**Lab:** Weather Underground (wunderground) API


---
