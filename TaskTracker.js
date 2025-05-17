function $(element) {
  return document.querySelector(element);
}

const taskInput = $(".task-input");
const taskForm = $(".task-form");
const tasks = $(".tasks");

taskForm.addEventListener("submit", e => {
  e.preventDefault();

  const task = taskInput.value;

  if(task) {
    const li = document.createElement("li");
    li.textContent = task;
    tasks.appendChild(li);
    taskInput.value = "";

    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";

    editButton.classList.add("edit-button");
    deleteButton.classList.add("delete-button");

    li.appendChild(editButton);
    li.appendChild(deleteButton);
  } else {
    alert("Please enter a task");
  }
})

tasks.addEventListener("click", e => {
  if(e.target.classList.contains("delete-button")) {
    e.target.parentElement.remove();
  } else {
    console.log("Editing Button...");
  }
})