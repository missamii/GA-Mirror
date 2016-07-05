
// Getting started:
// `npm install http-server -g`
// run 'http-server' from root directory of project
// then navigate to localhost:8080 in Chrome
// https://whatwebcando.today/
// ===============================

window.onload = function() {
  console.log('Window loaded.');

  var interim_span        =   document.getElementById('interim-transcript');
  var interim_transcript  =   '';
  var final_span          =   document.getElementById('final-transcript');
  var final_transcript    =   '';
  var pageOne             =   document.getElementById('page-one');
  var pageTwo             =   document.getElementById('page-two');
  var nextBtn             =   document.getElementById('next');
  var backBtn             =   document.getElementById('back');
  var dogPic              =   document.getElementById('dog');
  var catPic              =   document.getElementById('cat');

  var status = "off";

  var recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;

  var micButton = document.getElementById('record-button');

  micButton.addEventListener("click", function() {
    if (status == "off") {
      status = "on";
      console.log("Status:", status);

      micButton.classList.remove("off");
      micButton.classList.add("on");

      recognition.start();

      recognition.addEventListener('result', function(event) {
        console.log( "event:", event );

        for (var i = event.resultIndex; i < event.results.length; ++i) {
          console.log( "Is final? ", event.results[i]["isFinal"] );
          console.log( "Transcript: ", event.results[i][0]["transcript"] );
          var transcr = event.results[i][0].transcript;

          if (event.results[i].isFinal) { // final transcript
            final_transcript = transcr;

            // * page two stuff (dog & cat page):
            if (transcr.indexOf("dog") > -1) {
              dogPic.classList.remove("hidden");
              catPic.classList.add("hidden");
            } else if (transcr.indexOf("cat") > -1) {
              catPic.classList.remove("hidden");
              dogPic.classList.add("hidden");
            }


          } else { // if not final transcript (interim):
            interim_transcript += transcr;
          }
        }

        interim_span.innerHTML = linebreak(interim_transcript);
        final_span.innerHTML = linebreak(final_transcript);

        console.log('================');

      }); // end event listener
    } else {    // if status = 'on'
      status = "off";
      console.log("status: ", status);

      micButton.classList.remove("on");
      micButton.classList.add("off");

      recognition.stop();

      console.log('* ================== *');
    }

  }); // end mic click fxn

  // what to do upon end listening:
  recognition.addEventListener('end', function() {
    console.log('Listening ended.');
    status = "off";
    console.log("Status: ", status);
    micButton.classList.remove("on");
    micButton.classList.add("off");
    console.log('==================');
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
