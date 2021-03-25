// create a module for our project
(() => {
  // select and work with our audio element
  console.log('fired!');

  const playZone = document.querySelector("#playZone"),
        dragImages = document.querySelectorAll(".tapeImages");

function dragStart() {
  console.log('sgarted draggin');
}

function draggedOver(event) {
  event.preventDefault();
  console.log('dragged over me');
}

function dropped(event) {
  event.preventDefault();
  console.log(dragged over me');
}

function dropped(event) {
  event.preventDefault();
  console.log('dropped somethin on me');
}

dragImages.addEventListener("dragstart", dragStart);
dropZones.addEventListener("dragover", draggedOver);
dropZones.addEventListener("drop", dropped);

})();
