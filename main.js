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

let tasksDone = !localStorage.tasksDone
  ? []
  : JSON.parse(localStorage.getItem('tasksDone'));

let tasksInPr = !localStorage.tasksInPr
  ? []
  : JSON.parse(localStorage.getItem('tasksInPr'));

let tasks = !localStorage.tasks
  ? []
  : JSON.parse(localStorage.getItem('tasks'));

function Task(title, description, date, user) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.user = user;
}

const createLi = (task, index) => {
  showClearAllToDo();
  return `
  <div id="toDoList" class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <strong>${task.title}</strong>
      <i>${task.description}</i>
      --${task.date}--${task.user}
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick="inProgressTask(${index})" class="list-item-task-add-buttons-inPR"
    id="btn-inPr"
    >in PR</button>
    <button onclick ="delTaskToDo(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delToDo" >x
      </button>
  </div>
  </div>
  `;
};

const createLiInProgress = (task, index) => {
  showClearAllInPr();
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <strong>${task.title}</strong>
      <i>${task.description}</i>
      --${task.date}--${task.user}
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick ="done(${index})" class="list-item-task-add-buttons-inPR"
    id="btn-inDone"
    >Done</button>
    <button onclick ="delTaskInPr(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delInPr" >x
      </button>
  </div>
  </div>
  `;
};

const createLiDone = (task, index) => {
  showClearAllDone();
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
    <button onclick ="delTaskDone(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delDone" >x
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
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick ="inProgressTask(${index})" class="list-item-task-add-buttons-inPr"
    id="btn-inPr"
    >in PR</button>
    <button onclick ="delTaskToDo(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-deleteToDo" >x
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
  if (tasks.length < 1) {
    notShowClearAllToDo();
  }
  updateLocal();
  updateLocalInPr();
  fillHtmlListInPr();
  fillHtmlList();
};

const done = (index) => {
  doneWrapper.innerHTML += createLiDone(tasksInPr[index], index);
  tasksDone.push(tasksInPr[index]);
  tasksInPr.splice(index, 1);
  if (tasksInPr.length < 1) {
    notShowClearAllInPr();
  }
  updateLocalInPr();
  updateLocalDone();
  fillHtmlListInPr();
  fillHtmlListDone();
};

const btnReturn = (index) => {
  todosWrapper.innerHTML += createLiReturn(tasksDone[index]['title'], index);
  tasks.push(tasksDone[index]['title']);
  console.log(tasksDone[index]['title']);
  tasksDone.splice(index, 1);
  if (tasksDone.length < 1) {
    notShowClearAllDone();
  }
  updateLocal();
  updateLocalDone();
  fillHtmlList();
  fillHtmlListDone();
};

const delTaskToDo = (index) => {
  tasks.splice(index, 1);
  if (tasks.length < 1) {
    notShowClearAllToDo();
  }
  updateLocal();
  fillHtmlList();
};

const delTaskInPr = (index) => {
  tasksInPr.splice(index, 1);
  if (tasksInPr.length < 1) {
    notShowClearAllInPr();
  }
  updateLocalInPr();
  fillHtmlListInPr();
};

const delTaskDone = (index) => {
  tasksDone.splice(index, 1);
  if (tasksDone.length < 1) {
    notShowClearAllDone();
  }
  updateLocalDone();
  fillHtmlListDone();
};

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleTask.value === '') {
    return;
  }
  tasks.push(
    new Task(
      titleTask.value,
      descriptionTask.value,
      dateTask.value,
      userTask.value
    )
  );
  titleTask.value = '';
  descriptionTask.value = '';
  dateTask.value = '';
  userTask.value = '';
  updateLocal();
  fillHtmlList();
});

clearAllListToDo.addEventListener('click', (e) => {
  tasks = [];
  notShowClearAllToDo();
  updateLocal();
  fillHtmlList();
});

clearAllListInPr.addEventListener('click', (e) => {
  tasksInPr = [];
  notShowClearAllInPr();
  updateLocalInPr();
  fillHtmlListInPr();
});

clearAllListDone.addEventListener('click', (e) => {
  tasksDone = [];
  notShowClearAllDone();
  updateLocalDone();
  fillHtmlListDone();
});

function showClearAllToDo() {
  document.getElementById('clearAllListToDo').style.display = 'block';
}

function showClearAllInPr() {
  document.getElementById('clearAllListInPr').style.display = 'block';
}

function showClearAllDone() {
  document.getElementById('clearAllListDone').style.display = 'block';
}

function notShowClearAllToDo() {
  document.getElementById('clearAllListToDo').style.display = 'none';
}

function notShowClearAllInPr() {
  document.getElementById('clearAllListInPr').style.display = 'none';
}

function notShowClearAllDone() {
  document.getElementById('clearAllListDone').style.display = 'none';
}
