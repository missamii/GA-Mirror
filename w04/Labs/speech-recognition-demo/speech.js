
// Getting started:
// `npm install http-server -g`
// run 'http-server' from root directory of project
// then navigate to localhost:8080 in Chrome
// https://whatwebcando.today/
// ===============================

window.onload = function() { // I think this is where window onload function loads the following variables inside this function. So it's like your telling the browser to do the following things when it's loaded.
  console.log('Window loaded.'); // This is show on your browser that the window had loaded.  Console log is for checking/testing your code.

  var interim_span        =   document.getElementById('interim-transcript'); // This means to get the element Id by whatever the element Id is called. So it will grab the HTML Id.
  var interim_transcript  =   ''; // This looks like an empty string.
  var final_span          =   document.getElementById('final-transcript'); // This is grabbing the HTML Id.
  var final_transcript    =   '';
  var pageOne             =   document.getElementById('page-one'); // This is grabbing the HTML Id it will get back the first page.
  var pageTwo             =   document.getElementById('page-two'); // This is grabbing the HTML Id, it will get back the second page.
  var nextBtn             =   document.getElementById('next'); // This is grabbing the HTML Id, it will store it in nextBtn variable and get the next id.
  var backBtn             =   document.getElementById('back'); // This is grabbing the HTML Id it will store it inside the backBtn variable. And get the back id.
  var dogPic              =   document.getElementById('dog'); // This is grabbing the HTML Id it will get the dog picture.
  var catPic              =   document.getElementById('cat'); // This is grabbing the HTML Id it will get the cat picture.

  var status = "off"; // I think this holds the value needd for the off command.

  var recognition = new window.webkitSpeechRecognition(); // I think webkit is something for the browser's set preference.
  recognition.continuous = false; // I think this means that it will not loop or continue over and over. So for example once engaged it will stop and probably needed to be started again.
  recognition.interimResults = true; // This is set to true so that it will show results in the browser, and the console log.

  var micButton = document.getElementById('record-button'); // This is grabbing the HTML Id for the record button.

  micButton.addEventListener("click", function() { // This looks like an Event listener for the mic button. So when it's clicked on, it will start the interaction or the event.
    if (status == "off") { // This is a comparing the off button to be excuted if it's true. This is a boolean.
      status = "on"; // This is assiging the status on.
      console.log("Status:", status); // This is to check the code. It'll show status, and what the status is.

      micButton.classList.remove("off"); // This will remove the HTML class for the off button.
      micButton.classList.add("on"); // This will add the HTML class for the on button.

      recognition.start(); // I feel that this is a fuction to make the code below operate. Although it's not in a curly bracket. But then I think that maybe it starts the speech recognition service, so that it will listen to incoming audio/voice.

      recognition.addEventListener('result', function(event) { // This is targeting the recognition obeject so that it'll
        console.log( "event:", event ); // This will display the event value and the event.

        for (var i = event.resultIndex; i < event.results.length; ++i) { // This is loop for the event result index.
          console.log( "Is final? ", event.results[i]["isFinal"] ); // This is return or display the final results.
          console.log( "Transcript: ", event.results[i][0]["transcript"] ); // This is display the results for the transcript result.
          var transcr = event.results[i][0].transcript; This is a variable containing DOM

          if (event.results[i].isFinal) { // final transcript if conditionals which take in the condition of results of this event
            final_transcript = transcr; // gives the value of transcr to final_transcript


            // * page two stuff (dog & cat page):
            if (transcr.indexOf("dog") > -1) { // this should check or evalute the transcript index
              dogPic.classList.remove("hidden"); // remove hidden from dogPic classList
              catPic.classList.add("hidden"); // will add hidden to the cat picture classList
            } else if (transcr.indexOf("cat") > -1) { // this will index of the transcript
              catPic.classList.remove("hidden"); // will remove the cat picture from the classList
              dogPic.classList.add("hidden"); // add the hidden dog picture
            }


          } else { // if not final transcript (interim):
            interim_transcript += transcr; // this updates interim transcript
          }
        }

        interim_span.innerHTML = linebreak(interim_transcript); // use a linebreak in the interim_spa
        final_span.innerHTML = linebreak(final_transcript); // use a linebreak in the final_span

        console.log('================'); // will show ================ in the console log

      }); // end event listener
    } else {    // the statement is, if status = 'on'
      status = "off"; // and if it is on, it tell it to turn it off here
      console.log("status: ", status);  // shows the status in the console log

      micButton.classList.remove("on"); //remove on class from mic
      micButton.classList.add("off"); //add off class from mic

      recognition.stop();  //just as it all started, I think this stops the recognition of the API

      console.log('* ================== *'); // will show this in the * ================== *
    }

  }); // end mic click fxn

  // what to do upon end listening:
  recognition.addEventListener('end', function() {
    console.log('Listening ended.'); // will log the listening end
    status = "off"; // mic status is set to off
    console.log("Status: ", status); // will log the status in the console log
    micButton.classList.remove("on"); // this will remove the class of "on" for the mic
    micButton.classList.add("off"); // this adds a class so to turn "off" the mic
    console.log('=================='); // will show this ================== in the console log
  });

  // * Next & Back button click fxns:
  nextBtn.addEventListener("click", function() {
    pageOne.classList.add("hidden");
    pageTwo.classList.remove("hidden");
  });
  // *
  backBtn.addEventListener("click", function() {
    pageTwo.classList.add("hidden");
    pageOne.classList.remove("hidden");
  });

  // * spaces, etc. fxns ==> regex
  var two_line = /\n\n/g;
  var one_line = /\n/g;
  function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
  }
  function capitalize(s) {
    var first_char = /\S/;
    return s.replace(first_char, function(m) { return m.toUpperCase(); });
  }


}; // end window loaded fxn
