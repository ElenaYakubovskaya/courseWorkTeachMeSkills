const addTaskBtn = document.getElementById('toDoBtn');
const taskInput = document.getElementById('inputToDo');
const alllists = document.querySelector('.list-item');

let tasks = [];

function TaskToDo(description) {
  this.description = description;
  this.completed = false;
}
console.log(addTaskBtn);
addTaskBtn.addEventListener('click', () => {
  tasks.push(new TaskToDo(taskInput.value));
  console.log(tasks);
});
