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
const editTaskToDo = document.getElementById('toDoTask');
const totalToDo = document.getElementById('totalToDo');
const totalInPr = document.getElementById('totalInPr');
const totalDone = document.getElementById('totalDone');

const userName = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      userName.push(json[i]['name']);
    }
    userName.forEach((el) => {
      userTask.innerHTML += `<option >${el}</option>`;
      console.log(el);
    });
  });

console.log(userTask);

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
function showClearAll(list) {
  list.style.display = 'block';
}

function notShowClearAll(list) {
  list.style.display = 'none';
}

const createLi = (task, index) => {
  console.log('createLi');
  showClearAll(clearAllListToDo);
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
      <span class="list-item-task-add-all-span" >
        <strong id="strong">${task.title}</strong>
          ${task.description}<br>
         <span id="data-user">${task.date}<br>${task.user}</span>
      </span>
    </div>
  <div class="list-item-task-add-buttons">
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
  showClearAll(clearAllListInPr);
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong id="strong">${task.title}</strong>
      ${task.description || 'тo description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${
    task.user || 'no assigned'
  }</span>
  </span>
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
  showClearAll(clearAllListDone);
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong id="strong">${task.title}</strong>
      ${task.description || 'тo description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${
    task.user || 'no assigned'
  }</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
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
  console.log('createLiReturn');
  return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong id="strong">${task.title}</strong>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
  <div class="list-item-task-add-buttons">
    <button onclick ="inProgressTask(${index})" class="list-item-task-add-buttons-inPr"
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

const fillHtmlList = () => {
  todosWrapper.innerHTML = '';
  console.log(tasks);
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

const fillHtmlListReturn = () => {
  todosWrapper.innerHTML = '';
  console.log(tasks);
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      todosWrapper.innerHTML += createLiReturn(item, index);
    });
  }
};
fillHtmlListReturn();

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
  if (tasksInPr.length > 4) {
    alert('нужно что-то выполнить прежде чем добавлять еще.');
    return;
  }
  inProgressWrapper.innerHTML += createLiInProgress(tasks[index], index);
  tasksInPr.push(tasks[index]);
  tasks.splice(index, 1);
  if (tasks.length < 1) {
    notShowClearAll(clearAllListToDo);
  }
  totalList(totalInPr, tasksInPr);
  totalList(totalToDo, tasks);
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
    notShowClearAll(clearAllListInPr);
  }
  totalList(totalDone, tasksDone);
  totalList(totalInPr, tasksInPr);
  updateLocalInPr();
  updateLocalDone();
  fillHtmlListInPr();
  fillHtmlListDone();
};

const btnReturn = (index) => {
  todosWrapper.innerHTML += createLiReturn(tasksDone[index]['title'], index);
  tasks.push({ title: tasksDone[index]['title'] });
  console.log(tasksDone[index]['title']);
  tasksDone.splice(index, 1);
  if (tasksDone.length < 1) {
    notShowClearAll(clearAllListDone);
  }
  totalList(totalDone, tasksDone);
  totalList(totalToDo, tasks);
  showClearAll(clearAllListToDo);
  updateLocal();
  updateLocalDone();
  fillHtmlListReturn();
  fillHtmlListDone();
};

const delTaskToDo = (index) => {
  tasks.splice(index, 1);
  if (tasks.length < 1) {
    notShowClearAll(clearAllListToDo);
  }
  totalList(totalToDo, tasks);
  updateLocal();
  fillHtmlList();
};

const delTaskInPr = (index) => {
  if (tasksInPr.length < 1) {
    notShowClearAll(clearAllListInPr);
  }
  tasksInPr.splice(index, 1);
  totalList(totalInPr, tasksInPr);
  confirm('Уверен в своем действии?'); //при нажатии esc/отмена все равно удаляет
  updateLocalInPr();
  fillHtmlListInPr();
};

const delTaskDone = (index) => {
  tasksDone.splice(index, 1);
  if (tasksDone.length < 1) {
    notShowClearAll(clearAllListDone);
  }
  totalList(totalDone, tasksDone);
  updateLocalDone();
  fillHtmlListDone();
};
/*
editTaskToDo.addEventListener('dblclick', (index) => {
  return `
  <form class="list-item-task-form">
              <input
                tabindex="1"
                placeholder="what need to do?"
                class="list-item-task-form-input"
                id="inputToDo"
                type="text"
                name="nameTask" ${task.title}${index}
              />
              <textarea
                class="list-item-task-form-textArea"
                name="description"
                tabindex="2"
                id="description"
                cols="30"
                rows="5"
                placeholder="description"
              ></textarea>
              <input
                type="date"
                class="list-item-task-form-data"
                name="date"
                tabindex="3"
                id="date"
              />
              <input
                type="text"
                tabindex="4"
                placeholder="user name"
                class="list-item-task-form-user"
                id="userTask"
                name="user name"
              />
              <button
                class="list-item-task-form-btn"
                id="toDoBtn"
                tabindex="5"
                name="ADD"
              >
                Add Task
              </button>
            </form>
  `;
});
*/

buttonAdd.addEventListener('click', (e) => {
  showClearAll(clearAllListToDo);
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
  totalList(totalToDo, tasks);
  updateLocal();
  fillHtmlList();
});

clearAllListToDo.addEventListener('click', (e) => {
  tasks = [];
  notShowClearAll(clearAllListToDo);
  totalList(totalToDo, tasks);
  updateLocal();
  fillHtmlList();
});

clearAllListInPr.addEventListener('click', (e) => {
  tasksInPr = [];
  notShowClearAll(clearAllListInPr);
  alert('уверен?');
  totalList(totalInPr, tasksInPr);
  updateLocalInPr();
  fillHtmlListInPr();
});

clearAllListDone.addEventListener('click', (e) => {
  tasksDone = [];
  notShowClearAll(clearAllListDone);
  totalList(totalDone, tasksDone);
  updateLocalDone();
  fillHtmlListDone();
});

function totalList(nameTotal, nameArr) {
  return (nameTotal.innerHTML = 'total tasks:    ' + nameArr.length);
}
totalList(totalToDo, tasks);
totalList(totalInPr, tasksInPr);
totalList(totalDone, tasksDone);
