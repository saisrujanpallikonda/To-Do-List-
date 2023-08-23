const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDateInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;
  if (taskText !== '' && dueDate !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <span>Due: ${dueDate}</span> <!-- Display due date -->
      <span class="delete-btn">Delete</span>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
    dueDateInput.value = '';

    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });
  }
}
