document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("addTaskBtn").addEventListener("click", addTask);
});

function addTask() {
  var taskInput = document.getElementById("taskInput").value;
  var timeInput = document.getElementById("timeInput").value;
  var taskList = document.getElementById("taskList");

  if (taskInput !== '') {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    var taskContent = document.createElement("span");
    taskContent.className = "task-content";
    taskContent.textContent = taskInput + " - " + timeInput;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-btn";

    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    document.getElementById("taskInput").value = '';
    document.getElementById("timeInput").value = '';

    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        taskContent.style.textDecoration = "line-through";
      } else {
        taskContent.style.textDecoration = "none";
      }
    });

    deleteButton.addEventListener("click", function() {
      li.remove();
    });
  } else {
    alert("Please enter a task!");
  }
}
