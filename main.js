const titleTask = document.getElementById('inputToDo');
const descriptionTask = document.getElementById('description');
const dateTask = document.getElementById('date');
const userTask = document.getElementById('userTask');
const buttonAdd = document.getElementById('toDoBtn');
const todosWrapper = document.getElementById('todosWrapper');
const inProgressWrapper = document.getElementById('inProgressWrapper');
const doneWrapper = document.getElementById('doneWrapper');
const clearAllListToDo = document.getElementById('clearAllListToDo');
const clearAllListInPr = document.getElementById('clearAllListInPr');
const clearAllListDone = document.getElementById('clearAllListDone');

let tasks = [];
let tasksInPr = [];

!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem('tasks')));

!localStorage.tasksInPr
  ? (tasksInPr = [])
  : (tasksInPr = JSON.parse(localStorage.getItem('tasksInPr')));

let tasksDone = !localStorage.tasksDone
  ? []
  : JSON.parse(localStorage.getItem('tasksDone'));

function Task(title, description, date, user) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.user = user;
  this.completed = false;
}

const createLi = (task, index) => {
  return `
  <div id="toDoList" class="list-item-task-add-description ${
    task?.completed ? 'checked' : ''
  } ">
    <div class="list-item-task-add-all">
    <strong>${task.title}</strong>
      <i>${task.description}</i>
      --${task.date}--${task.user}
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick="inProgressTask(${index})" class="list-item-task-add-buttons-inPR"
    id="btn-inPr"
    >in PR</button>
    <button
      class="list-item-task-add-buttons-delete"
      id="btn-delete" >x
      </button>
  </div>
  </div>
  `;
};

const createLiInProgress = (tasks, index) => {
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <strong>${tasks.title}</strong>
      <i>${tasks.description}</i>
      --${tasks.date}--${tasks.user}
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick ="done(${index})" class="list-item-task-add-buttons-inPR"
    id="btn-inDone"
    >Done</button>
    <button
      class="list-item-task-add-buttons-delete"
      id="btn-delete" >x
      </button>
  </div>
  </div>
  `;
};

const createLiDone = (task, index) => {
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <strong>${task.title}</strong>
      <i>${task.description}</i>
      --${task.date}--${task.user}
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick ="btnReturn(${index})" class="list-item-task-add-buttons-return"
    id="btn-return"
    >in To Do</button>
    <button
      class="list-item-task-add-buttons-delete"
      id="btn-delete" >x
      </button>
  </div>
  </div>
  `;
};

const createLiReturn = (task, index) => {
  return `
  <div class="list-item-task-add-description>
    <div class="list-item-task-add-all">
    <strong>${task.title}</strong>
      <i>${task.description}</i>
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick ="inProgressTask(${index})" class="list-item-task-add-buttons-inPr"
    id="btn-inPr"
    >in PR</button>
    <button
      class="list-item-task-add-buttons-delete"
      id="btn-delete" >x
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
    });
  }
};
fillHtmlList();

const fillHtmlListInPr = () => {
  inProgressWrapper.innerHTML = '';
  if (tasksInPr.length > 0) {
    tasksInPr.forEach((item, index) => {
      inProgressWrapper.innerHTML += createLiInProgress(item, index);
    });
  }
};
fillHtmlListInPr();

const fillHtmlListDone = () => {
  doneWrapper.innerHTML = '';
  if (tasksDone.length > 0) {
    tasksDone.forEach((item, index) => {
      doneWrapper.innerHTML += createLiDone(item, index);
    });
  }
};
fillHtmlListDone();

const updateLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateLocalInPr = () => {
  localStorage.setItem('tasksInPr', JSON.stringify(tasksInPr));
};

const updateLocalDone = () => {
  localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
};

const inProgressTask = (index) => {
  inProgressWrapper.innerHTML += createLiInProgress(tasks[index], index);
  tasksInPr.push(tasks[index]);
  tasks.splice(index, 1);
  updateLocal();
  updateLocalInPr();
  fillHtmlListInPr();
  fillHtmlList();
};

const done = (index) => {
  doneWrapper.innerHTML += createLiDone(tasksInPr[index], index);
  tasksDone.push(tasksInPr[index]);
  tasksInPr.splice(index, 1);
  updateLocalInPr();
  updateLocalDone();
  fillHtmlListInPr();
  fillHtmlListDone();
};

const btnReturn = (index) => {
  todosWrapper.innerHTML += createLiReturn(tasksDone[index], index);
  tasks.push(tasksDone[index]);
  tasksDone.splice(index, 1);
  updateLocal();
  updateLocalDone();
  fillHtmlList();
  fillHtmlListDone();
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
  fillHtmlList();
});

clearAllListToDo.addEventListener('click', (e) => {
  tasks = [];
  updateLocal();
  fillHtmlList();
});

clearAllListInPr.addEventListener('click', (e) => {
  tasksInPr = [];
  updateLocalInPr();
  fillHtmlListInPr();
});

clearAllListDone.addEventListener('click', (e) => {
  tasksDone = [];
  updateLocalDone();
  fillHtmlListDone();
});
