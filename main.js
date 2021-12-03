const titleTask = document.getElementById('inputToDo');
const descriptionTask = document.getElementById('description');
const dateTask = document.getElementById('date');
const userTask = document.getElementById('userTask');
const buttonAdd = document.getElementById('toDoBtn');
const todosWrapper = document.getElementById('todosWrapper');
//const btnDel = document.getElementById('btn-delete').remove();
let tasks = [];

!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem('tasks')));

function Task(title, description, date, user) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.user = user;
  this.completed = false;
}

const createLi = (task, index) => {
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <strong>${task.title}</strong>
      <i>${task.description}</i>
      --${task.date}--${task.user}
    </div>
  <div class="list-item-task-add-buttons">
    <input class="list-item-task-add-buttons-complete"
    type="checkbox"
    id="btn-complete"
    />
    <button
      class="list-item-task-add-buttons-delete"
      id="btn-delete">x
      </button>
  </div>
  </div>
  `;
};

const fillHtmlList = () => {
  todosWrapper.innerHTML = '';
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      todosWrapper.innerHTML += createLi(item, index);
      console.log(createLi(item, index));
    });
  }
};

fillHtmlList();

const updateLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault();
  tasks.push(
    new Task(
      titleTask.value,
      descriptionTask.value,
      dateTask.value,
      userTask.value
    )
  );
  updateLocal();
  console.log(tasks);
  fillHtmlList();
});
