// Left side images which will be dropped
const img_containers = document.querySelectorAll(".img-container");

// the drop section
const right_img_container = document.getElementById("right-content");


img_containers.forEach((img_container) => {
  img_container.addEventListener("dragstart", dragStart);
});

function dragStart(e) {
 
  e.dataTransfer.setData("text/plain", e.target.id);

  
}


// Adding event listeners to the drop section
right_img_container.addEventListener("dragenter", dragEnter);
right_img_container.addEventListener("dragover", dragOver);
right_img_container.addEventListener("dragleave", dragLeave);
right_img_container.addEventListener("drop", drop);

function dragEnter(e) {
  e.preventDefault(e);

  e.target.classList.add("dragging");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("dragging");
}

function dragLeave(e) {
  e.target.classList.remove("dragging");
}

function drop(e) {
 
  e.target.classList.remove("dragging");
  const id = e.dataTransfer.getData("text/plain");
  const dragged = document.getElementById(id);

  e.target.parentNode.appendChild(dragged);
  dragged.classList.remove("hidden");
}


//  Reset Button
function handleReset() {
  location.reload();
}
