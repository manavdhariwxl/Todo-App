let taskList = document.getElementById("taskList");

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${task}</span>
    <button onclick="removeTask(this)">❌</button>
  `;

  taskList.appendChild(li);
  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}

function toggleDone(task) {
  task.classList.toggle("done");
}