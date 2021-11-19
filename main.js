const taskName = document.getElementById('inputToDo');
const taskDescription = document.getElementById('description');

const taskDate = document.getElementById('date');
const taskUser = document.getElementById('taskUser');
const addTaskBtn = document.getElementById('toDoBtn');
const alllists = document.querySelector('.list-item');

let tasks = [];

function TaskToDo(description) {
  this.description = description;
  this.completed = false;
}
addTaskBtn.addEventListener('click', () => {
  tasks.push(new TaskToDo(taskName.value));
  console.log(tasks);
});

console.log();
