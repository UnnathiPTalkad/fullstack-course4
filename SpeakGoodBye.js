// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
  // STEP 7: Create the byeSpeaker object
  var byeSpeaker = {};

  // STEP 8: Attach the speak method to byeSpeaker
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
