#What Web Can Do • Thurs. Feb 25

### Lesson Objectives
- Define `API` in basic terms
- Explain why APIs are useful to developers
- Define the keyword `new` in basic terms
- Read technical documentation with confidence!
- Use JS APIs in Chrome


---

### What is an Application Programming Interface (API)?
- from [webplatform.org](https://docs.webplatform.org/wiki/apis):
  - ![JS API](demo/img/apiDef1.png)

- from [quora](https://www.quora.com/What-is-an-API-4):
  - ![API](demo/img/apiDef2.png)

- from [quora](https://www.quora.com/What-is-an-API-4):
 - ![API](demo/img/apiDef3quora.png)

- from [sproutsocial](http://sproutsocial.com/insights/what-is-an-api/)  
 - ![API](demo/img/apiDef5.png)

- from [wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)
 - ![API](demo/img/apiDef4Wiki.png)

### Stand on the shoulders of giants  
- API - slippery word to define - can have a lot of meanings - try to define through examples:
- Example: Embark - NYC subway routing app
- More examples: weather apps, Mint, Hootsuite
- Other types of APIs: you can build your own; jQuery & WordPress method/APIs, query your own database, etc.
- The Embark app:
- ![Embark Routing App](http://www.iphoneappsfinder.com/wp-content/uploads/2013/01/embark-app.png)


---


### Today's Focus: `JavaScript Web APIs`
- What are they? Basically, JS objects provided by your browser as properties of the window object.
- Careful of usability, some still experimental - check Can I Use
- There are a [ton!](https://developer.mozilla.org/en-US/docs/Web/API)
- But we're just going to look at a few on a site called [What Web Can Do Today](https://whatwebcando.today)


---


## Let's take a look at the `Web Speech API`


##### Two main interfaces:
- `Speech Synthesis`: Text to voice (uses synthesized voices)
- `Speech Recognition`: Voice to text
- [Web Speech API documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- *Note*: Reading documentation is overwhelming.

##### Getting started with the Speech Recognition component
- Check [caniuse](http://caniuse.com/#feat=speech-recognition)
- Pop Chrome's console & inspect `SpeechRecognition` (a property of the window object):
  - `window.webkitSpeechRecognition`
  - [Vendor prefixed](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) for Chrome
- Store in variable:
  - `var recognition = new window.webkitSpeechRecognition`
- *Note* Keyword `new`: Creates an empty object and runs the specified function (SpeechRecognition) inside of it.
- Review properties we can add to our new `recognition` object
- DEMO!

##### Now let's build it
*Note:*
- **Vendor prefix:** Browser vendors (like Google for Chrome) sometimes add prefixes to experimental or nonstandard functionality so that developers can experiment without breaking standard code. -- from MDN
- Basically a safe way to play with experimental features

*Note:*
- Two syntaxes to add event listeners to our `recognition` variable:
  - `recognition.addEventListener('result', function(){})`
  - `recognition.onresult = function(){}`
- Two types of results:
  - Interim
  - Final

##### Getting started
- Getting set up with Node, NPM & `http-server`
- Play with event listeners
- Why do you need http-server?
  - CORS issue
  - You need a server (in this case, a local file server) to avoid CORS issue - sends AJAX request with proper headers


---


#### Helpful links & some cool sites:
- Specs: https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#speechreco-section
- More specs: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
- https://shaungallagher.github.io/say_restyle/
- https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API
- https://github.com/mdn/web-speech-api

#### Other cool components of the Web Speech API
- Speech Synthesis
  - Synthesized voices available on the current device
- Speech Grammar
  - A set of words or patterns you tell the API to recognize



#
