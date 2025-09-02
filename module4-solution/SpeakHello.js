// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
  // STEP 3: Create the helloSpeaker object
  var helloSpeaker = {};

  // STEP 4: Attach the speak method to helloSpeaker
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
