const plans = document.querySelectorAll(".draggable");
const dropBox = document.getElementById("dropbox");

// Add dragstart event to each plan image
plans.forEach((plan) => {
  plan.addEventListener("dragstart", dragStart);
  plan.addEventListener("dragend", dragEnd);
});

// Drag event functions
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.style.visibility = "hidden";
  }, 0);
}

function dragEnd(e) {
  e.target.style.visibility = "visible";
}

// Allow drop on dropbox
dropBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropBox.classList.add("over");
});

dropBox.addEventListener("dragleave", () => {
  dropBox.classList.remove("over");
});

dropBox.addEventListener("drop", (e) => {
  e.preventDefault();
  const draggedElementId = e.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(draggedElementId);
  dropBox.appendChild(draggedElement);
  dropBox.classList.remove("over");
});
