// create a module for our project
(() => {
  // select and work with our audio element
  console.log('fired!');

  const playZone = document.querySelector("#playZone"),
        audioTapes = document.querySelectorAll(".tapeImage"),
        audioControllButtons = document.querySelectorAll(".audioController"),
        theAudio = document.querySelector("audio");

function dragStart() {
  console.log('sgarted draggin');
}

function draggedOver(event) {
  event.preventDefault();
  console.log('dragged over me');
}

function dropped(event) {
  event.preventDefault();
  console.log('dragged over me');
}

function dropped(event) {
  event.preventDefault();
  console.log('dropped somethin on me');
}
function loadTrack() {

    let targetTrack = this.dataset.trackref;

    theAudio.src = `audio/${targetTrack}.mp3`;
    theAudio.volume = 0.5;
    theAudio.load();

    playTrack();
  }

  function rewindTrack() {

    theAudio.currentTime = 0;
  }


  function playTrack() {

    theAudio.play();
  }

  function stopTrack() {

    theAudio.pause();
  }


  for (tapeImage of audioTapes) {
    tapeImage.addEventListener("click", loadTrack);
  }

  audioControllButtons[0].addEventListener("click", rewindTrack);
  audioControllButtons[1].addEventListener("click", playTrack);
  audioControllButtons[2].addEventListener("click", stopTrack);

audioTapes.addEventListener("dragstart", dragStart);
playZone.forEach(zone => {
        zone.addEventListener("dragover", draggedOver);
        zone.addEventListener("drop", dropped);

})

})();
