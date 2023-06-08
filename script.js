const img_containers = document.querySelectorAll('.img-container');
const right_img_container = document.getElementById("right-content");

img_containers.forEach(img_container => {
    console.dir(img_container);
    img_container.addEventListener('dragstart', dragStart)

});



function dragStart(e) {
    console.log("drag start");
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        // e.target.classList.add('hidden');
    }, 0);
}


right_img_container.addEventListener('dragenter', dragEnter)
right_img_container.addEventListener('dragover', dragOver);
right_img_container.addEventListener('dragleave', dragLeave);
right_img_container.addEventListener('drop', drop);



function dragEnter(e) {
    e.preventDefault(e);
  

    
    e.target.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('dragging');
}

function dragLeave(e) {
    // e.preventDefault();
    e.target.classList.remove('dragging');
}

function drop(e) {
    // e.preventDefault();
    console.log("drop");
    e.target.classList.remove('dragging');
    const id = e.dataTransfer.getData('text/plain');
    console.log(id);
    const draggable = document.getElementById(id);
    // e.target.appendChild(draggable);
    console.log( e.target.parentNode);
    e.target.parentNode.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hidden');
}