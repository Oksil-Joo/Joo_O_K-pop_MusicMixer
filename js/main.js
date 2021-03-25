// create a module for our project
(() => {
  // select and work with our audio element
  console.log('fired!');

  const dropZone = document.querySelector(".drop-zone"),
        tapes = document.querySelectorAll(".tapeImage");


  let theAudio = document.querySelector("audio"),
      audioControllButtons = document.querySelectorAll(".audioController"),
      albumArt = document.querySelectorAll(".tapeImage");

function dragStart() {
  console.log('sgarted draggin');
  event.dataTransfer.setData("savedID", this.id);
}

function draggedOver(event) {
  event.preventDefault();
  console.log('dragged over me');
}

function dropped(event) {
  event.preventDefault();
  let targetID = event.dataTransfer.getData("savedID");
  console.log("I dragged this image:", targetID);
}
function loadTrack() {

    let targetTrack = this.dataset.trackref;

    theAudio.src = `sounds/${targetTrack}.mp3`;
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


  for (tapeImage of albumArt) {
    tapeImage.addEventListener("click", loadTrack);
  }

  audioControllButtons[0].addEventListener("click", rewindTrack);
  audioControllButtons[1].addEventListener("click", playTrack);
  audioControllButtons[2].addEventListener("click", stopTrack);

  tapes.forEach(piece => piece.addEventListener("dragStart", dragStart));
  dropZone.addEventListener("dragover", draggedOver);
  dropZone.addEventListener("drop", dropped);

})();
