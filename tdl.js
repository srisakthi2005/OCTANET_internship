let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput").value.trim();
  const category = document.getElementById("category").value;
  const dueDate = document.getElementById("dueDate").value;

  if (input === "") {
    alert("Please enter a task!");
    return;
  }

  const newTask = {
    id: Date.now(),
    name: input,
    category: category,
    dueDate: dueDate,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();
  document.getElementById("taskInput").value = "";
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleComplete(id) {
  const index = tasks.findIndex(task => task.id === id);
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleComplete(task.id));
    taskElement.appendChild(checkbox);

    const taskName = document.createElement("span");
    taskName.textContent = task.name;
    taskElement.appendChild(taskName);

    const dueDate = document.createElement("span");
    dueDate.textContent = task.dueDate;
    taskElement.appendChild(dueDate);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(task.id));
    taskElement.appendChild(deleteButton);

    if (task.completed) {
      taskElement.classList.add("completed");
    }

    taskList.appendChild(taskElement);
  });
}
