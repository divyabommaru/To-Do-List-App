
let tasks = [];


function renderTasks() {
  const taskListElement = document.getElementById('task-list');
  taskListElement.innerHTML = ''; 

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <button class="edit-btn" onclick="editTask(${index})">EDIT</button>
      <button onclick="deleteTask(${index})">DELETE</button>
    `;
    taskListElement.appendChild(li);
  });
}


function addTask() {
  const inputElement = document.getElementById('task-input');
  const taskText = inputElement.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText });
    inputElement.value = '';
    renderTasks();
  } else {
    alert('Please enter a task.');
  }
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}


function editTask(index) {
  const newTaskText = prompt('Edit your task:', tasks[index].text);
  if (newTaskText !== null && newTaskText.trim() !== '') {
    tasks[index].text = newTaskText.trim();
    renderTasks();
  }
}


renderTasks();
